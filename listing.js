const mongoose = require("mongoose");
const review = require("./review");
const Schema = mongoose.Schema;

const listingSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  image: {
    filename: { type: String, default: "default.jpg" },
    url: {
      type: String,
      default:
        "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80", // example default image
    },
  },
  price: { type: Number, default: 0 },
  location: String,
  country: String,
  reviews:[{
    type:Schema.Types.ObjectId,
    ref:"Review",
  }]
});

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;
