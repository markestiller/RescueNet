import mongoose, { Schema } from 'mongoose';

const SubscriberSchema = Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    province: {
        type: String,
        required: true,
    },
    postalCode: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    phoneNumber: {
        type: Number,
        required: true,
    },
    isAuthenticated: {
        type: String,
        required: true,
        default: true,
    },
    password: {
        type: String,
        required: true,
    },
    occupants: {
        type: Number,
        required: true,
    },
    isHoused: {
        type: Boolean,
        required: true,
        default: false,
    },
    paymentId: {
        type: String,
        required: false,
    },
});

const Subscriber = mongoose.model('Subscriber', SubscriberSchema);

export default Subscriber;
