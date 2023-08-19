import mongoose, { Schema, model } from 'mongoose';

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
		unique: true,
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
	},
	password: {
		type: String,
		required: true,
	},

	occupants: {
		type: Number,
		required: true,
	},
});

const Subscriber =
	mongoose.models.SubscriberModel || model('Subscriber', SubscriberSchema);

export default Subscriber;
