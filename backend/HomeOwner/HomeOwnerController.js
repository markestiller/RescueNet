import Homeowner from './HomeOwnerSchema.js';
import Cities from '../Cities/CitiesSchema.js';

async function getById(id, res) {
    try {
        const homeownerObject = await Homeowner.findById(id).lean();
        return homeownerObject;
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function create(homeownerObject, res) {
    try {
        const created = await Homeowner.create(homeownerObject);
        await Cities.findOneAndUpdate(
            { city: homeownerObject.city },
            { $push: { homeowners: created._id } },
            { upsert: true }
        );
        res.status(201).json({ created });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export { getById, create };
