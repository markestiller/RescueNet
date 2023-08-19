import Cities from '../Cities/Cities';
import Subscriber from './SubscriberSchema';

async function create(subscriberObject, res) {
    try {
        const subscriber = await Subscriber.create(subscriberObject);

        // Find city + province in cities collection and update with new subscriber
        await Cities.findOneAndUpdate(
            {
                city: subscriberObject.city,
                province: subscriberObject.province,
            },
            { $push: { subscribers: subscriber._id } }
        );
        res.status(201).json({ subscriber });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function read(id, res) {
    try {
        const subscriber = await Subscriber.findById(id);
        res.status(200).json({ subscriber });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function update(id, subscriberObject, res) {
    try {
        const subscriber = await Subscriber.findByIdAndUpdate(
            id,
            subscriberObject
        );
        res.status(200).json({ subscriber });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export { create, read, update };
