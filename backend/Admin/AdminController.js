import Subscriber from '../Subscriber/SubscriberSchema.js';

async function resetAll(res) {
    try {  
        await Subscriber.updateMany({}, { isHoused: false }).exec();
        console.log("Reset finished")
        res.status(200).send("Reset recieved");
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export { resetAll };
