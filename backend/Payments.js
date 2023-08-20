/**
 * See installation instructions at
 * https://developers.circle.com/developer/docs/circle-sdk
 */
import dotenv from 'dotenv';
import { Circle, CircleEnvironments } from '@circle-fin/circle-sdk';
import crypto from 'crypto';
import Subscriber from './Subscriber/SubscriberSchema.js';

dotenv.config({ path: './.env.local' });

const circle = new Circle(
    process.env.CIRCLE_API,
    CircleEnvironments.sandbox // API base url
);

async function createCryptoPayment(req, res) {
    let userId = req.body.userId;

    const reqBody = {
        amount: {
            amount: '0.01',
            currency: 'USD',
        },
        settlementCurrency: 'USD',
        paymentMethods: [
            {
                type: 'blockchain',
                chain: 'ETH',
            },
        ],
        idempotencyKey: crypto.randomUUID(),
    };
    const resp = await circle.cryptoPaymentIntents.createPaymentIntent(reqBody);
    console.log(resp.data);

    pollPaymentIntent(resp.data.data.id, userId, res);
}

// Create promise that gets resolved in time milliseconds
function delay(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

async function getPaymentIntent(paymentIntentId) {
    const resp = await circle.cryptoPaymentIntents.getPaymentIntent(
        paymentIntentId
    );

    return resp.data;
}

async function pollPaymentIntent(paymentIntentId, userId, res) {
    const pollInterval = 500; // Interval (in ms) by which to poll

    let resp = undefined;
    while (true) {
        resp = await getPaymentIntent(paymentIntentId);
        let depositAddress = resp.data?.paymentMethods[0].address;

        if (depositAddress) break;
        await delay(pollInterval);
    }
    console.log(resp);
    let paymentId = resp.data.id;
    await Subscriber.findByIdAndUpdate(userId, { paymentId: paymentId }).exec();
    console.log(resp.data?.paymentMethods[0].address);
    res.status(200).json({ address: resp.data?.paymentMethods[0].address });
}

export default createCryptoPayment;
