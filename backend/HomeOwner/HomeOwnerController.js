import HomeownerSchema from "./HomeownerSchema";

async function getById(id) {
    const homeownerObject = await HomeownerSchema.findById(id).lean();
    return homeownerObject;
}

async function create(homeownerObject) {
    await HomeownerSchema.create(homeownerObject);

    // also need other table
}

export {getById, create};