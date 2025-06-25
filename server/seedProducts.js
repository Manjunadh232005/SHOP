const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Product = require("./models/Product");

dotenv.config();

const sampleProducts = [
  {
    name: "Apple iPhone 14",
    description: "6.1‑inch display, A15 Bionic chip",
    price: 69999,
    image: "https://m.media-amazon.com/images/I/61bK6PMOC3L._SL1500_.jpg",
    category: "Mobiles"
  },
  {
    name: "Samsung Galaxy S23",
    description: "8GB RAM, 256GB Storage, Snapdragon 8 Gen 2",
    price: 74999,
    image: "https://m.media-amazon.com/images/I/71QaFtzkXlL._SL1500_.jpg",
    category: "Mobiles"
  },
  {
    name: "boAt Rockerz 450",
    description: "Bluetooth On-Ear Headphones",
    price: 1499,
    image: "https://m.media-amazon.com/images/I/61u1VALn6JL._SL1500_.jpg",
    category: "Accessories"
  }
];

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(async () => {
  await Product.deleteMany({});
  await Product.insertMany(sampleProducts);
  console.log("Sample products inserted");
  process.exit();
})
.catch(err => console.log(err));
