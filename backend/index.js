import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import SubscriberRouter from './Subscriber/SubscriberRouter.js';

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

app.listen(process.env.PORT || 3000, () => {
    console.log('Server is running on port 3000');
});
app.use('/alert', (req, res) => {
    console.log('FIRE Alert');
    res.status(202).send('Alert received');
});
app.use('/api/subscriber', SubscriberRouter);
