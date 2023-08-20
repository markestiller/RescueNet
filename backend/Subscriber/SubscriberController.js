import Cities from '../Cities/CitiesSchema.js';
import Subscriber from './SubscriberSchema.js';

async function create(subscriberObject, res) {
    try {
        const subscriber = await Subscriber.create(subscriberObject);

        // Find city + province in cities collection and update with new subscriber
        await Cities.findOneAndUpdate(
            {
                city: subscriberObject.city,
                province: subscriberObject.province,
            },
            { $push: { subscribers: subscriber._id } },
            { upsert: true }
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

async function setEvacuated(id, res) {
    try {
        const subscriber = await Subscriber.findByIdAndUpdate(id, {
            $set: { isHoused: true },
        });

        res.status(200).json({ subscriber }); // todo, return the updated guy
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export { create, read, update, setEvacuated};
