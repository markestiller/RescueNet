import Homeowner from "./HomeownerSchema.js";
import Cities from "../Cities/CitiesSchema.js"

async function getById(id, res) {
    try {
        const homeownerObject = await Homeowner.findById(id).lean();
        return homeownerObject;
    } catch {
        res.sendStatus(500)
    }
}

async function create(homeownerObject, res) {
    try {
        const created = await Homeowner.create(homeownerObject);
        Cities.findOneAndUpdate(
            {city: created.city},
            {$push: {homeowners: created._id}}
        )
        res.sendStatus(200).json(created);
    } catch {
        res.sendStatus(500)
    }
}

export {getById, create};