import mongoose from 'mongoose';

const HomeOwnerSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },

  lastName: {
    type: String,
    required: true,
  },

  age : {
    type: Number,
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

  phoneNumber: {
    type: String,
    required: true,
  },

  capacity: {
    type: String,
    required: true,
  },

  occupants: {
    type: String,
    required: true,
  },
});

const HomeOwner = mongoose.model('HomeOwner', HomeOwnerSchema);

export default HomeOwner;