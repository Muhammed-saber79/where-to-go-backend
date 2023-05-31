const mongoose = require("mongoose");

const AddressSchema = mongoose.Schema({
  country: String,
  state: String,
  city: String,
  street: String,
  zip: Number,
});

// Create user schema
module.exports = new mongoose.Schema({
  email: {
    type: String,
    match: [
      /^\w+([.-]?\w+)@\w+([.-]?\w+)(\.\w{2,3})+$/,
      "Please Enter Correct Email",
    ],
    unique: [true, "Email Has To Be Unique"],
    required: [true, "Please Enter Contact Email"],
  },
  password: String,
  phoneNumber: String,
  address: AddressSchema,
  deactivated_at: {
    type: Date,
    default: null,
  },
  role: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "roles",
  },
});
