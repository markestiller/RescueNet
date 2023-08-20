import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import SubscriberRouter from './Subscriber/SubscriberRouter.js';
import HomeOwnerRouter from './HomeOwner/HomeOwnerRoutes.js';
import { createMessage } from './Messaging.js';
import Cities from './Cities/CitiesSchema.js';
import Subscriber from './Subscriber/SubscriberSchema.js';
import HomeOwner from './HomeOwner/HomeOwnerSchema.js';
import getNearbyCities, { getQID } from './NearbyCities.js';

dotenv.config({ path: './.env.local' });

const allowedOrigins = ['http://localhost:5173', undefined]; // allow undefined origin from Postman and curl
const corsOps = {
    origin: (origin, callback) => {
        console.log('Request from: ' + origin);
        if (allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Origin not allowed by CORS'));
        }
    },
};

const app = express();
app.use(cors(corsOps));
app.use(helmet());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const MONGO_DB_URI = process.env.MONGO_DB;

const start = async () => {
    try {
        await mongoose.connect(MONGO_DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        app.listen(process.env.PORT || 3000, () => {
            console.log('Server is running on port 3000');
        });
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

app.post('/alert', async (req, res) => {
    let evacutationCity = req.body.city;

    // * Subscribers
    // Find all individuals in affected city
    let cityObject = await Cities.findOne({ city: evacutationCity }).exec();
    let subscriberIds = cityObject?.subscribers;
    let subscribedPeople = (
        await Promise.all(
            subscriberIds.map((id) => Subscriber.findById(id).exec())
        )
    ).filter((value) => value != null);

    // Now we have all the subscribers in the affected region
    // * Homeowners
    // First find all nearby cities
    const evacutationCityQID = getQID(evacutationCity);
    let nearbyCities = await getNearbyCities(evacutationCityQID);

    const nearbyCityObjects = (
        await Promise.all(
            nearbyCities.map((city) => Cities.findOne({ city: city }).exec())
        )
    ).filter((value) => value != null);
    const nearbyHomeownerIds = nearbyCityObjects
        .map((cityObj) => cityObj.homeowners)
        .flat(); // new ObjectId(...)
    let allHomeownerObjects = await Promise.all(
        nearbyHomeownerIds.map((id) => HomeOwner.findById(id))
    );

    let pairedHousing = [];

    subscribedPeople.forEach((person) => {
        let firstAvailableHomeowner = allHomeownerObjects.find(
            (homeObj) =>
                parseInt(homeObj.capacity) - parseInt(person.occupants) >=
                parseInt(homeObj.occupants)
        );
        if (firstAvailableHomeowner) {
            pairedHousing.push({
                subscriber: person,
                homeowner: firstAvailableHomeowner,
            });
            firstAvailableHomeowner.occupants =
                parseInt(firstAvailableHomeowner.occupants) +
                parseInt(person.occupants);
        }
    });
    // console.log(pairedHousing)
    // console.log("here")
    // Send messages

    let i = 0;
    let intervalId = setInterval(() => {
        const { subscriber, homeowner } = pairedHousing[i];
        const messageText = `EMERGENCY: ${subscriber.firstName}, you MUST evacuate to ${homeowner.address}, ${homeowner.city}, ${homeowner.province}, and call ${homeowner.phoneNumber}`;
        i++;
        if (i == pairedHousing.length) {
            clearInterval(intervalId);
        }

        createMessage(subscriber.phoneNumber, messageText);
    }, 5000);

    res.status(202).send('Alert received');
});
app.use('/api/subscriber', SubscriberRouter);
app.use('/api/homeowner', HomeOwnerRouter);

start();
