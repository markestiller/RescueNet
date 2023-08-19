import mongoose, { Schema } from 'mongoose';

const CitiesModel = Schema({
    city: {
        type: String,
        required: true,
    },
    province: {
        type: String,
        required: true,
    },
    subscribers: {
        type: [{ type: Schema.Types.ObjectId, ref: 'Subscriber' }],
    },
    homeowners: {
        type: [{ type: Schema.Types.ObjectId, ref: 'Homeowner' }],
    },
});

const Cities = mongoose.model('HomeOwner', CitiesModel);

export default Cities;
