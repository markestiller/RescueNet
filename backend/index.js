import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import SubscriberRouter from './Subscriber/SubscriberRouter.js';
import HomeOwnerRouter from './HomeOwner/HomeOwnerRoutes.js';
import { createMessage } from './Messaging.js';

dotenv.config({path: "./.env.local"});

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

app.use('/alert', (req, res) => {
    // Do our "algorithm" and find cities
    // get phonenumbers
    let people = {
        'Andy John': {
            phone: '+12262800252',
            city: 'San Francisco',
        },
    };

    Object.entries(people).forEach(([key, value]) => {
        createMessage(key, value.phone, value.city);
    });
    res.status(202).send('Alert received');
});
app.use('/api/subscriber', SubscriberRouter);
app.use('/api/homeowner', HomeOwnerRouter);

start();
