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
    let subscribers = cityObject?.subscribers;
    let subscribedPeople = [];
    subscribers?.forEach(async (subscriber) => {
        // Get their data from Subscriber collection and add to our array
        let subscribedPerson = await Subscriber.findOne({
            _id: subscriber,
        }).exec();
        subscribedPeople.push(subscribedPerson);
    });

    // Now we have all the subscribers in the affected region
    // * Homeowners
    // First find all nearby cities
    const evacutationCityQID = getQID(evacutationCity);
    let nearbyCities = await getNearbyCities(evacutationCityQID);

    const nearbyCityObjects = (await Promise.all(nearbyCities.map(city => Cities.findOne({ city: city }).exec())))
        .filter(value => value != null)
    const nearbyHomeownerIds = nearbyCityObjects.map(cityObj => cityObj.homeowners).flat() // new ObjectId(...)
    const allHomeownerObjects = await Promise.all(nearbyHomeownerIds.map(id => HomeOwner.findById(id)))


    /*
    // Send messages
    Object.entries(people).forEach(([key, value]) => {
        
                
        setTimeout(function() {
        createMessage(key, value.phone, value.city);
        }, 1000);
    }); */
    res.status(202).send('Alert received');
});
app.use('/api/subscriber', SubscriberRouter);
app.use('/api/homeowner', HomeOwnerRouter);

start();
