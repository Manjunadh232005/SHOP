const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Product = require("./models/Product");

dotenv.config();

mongoose
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("MongoDB Connected");
    return Product.insertMany([
      {
        name: "iPhone 14 Pro Max",
        price: 129999,
        image: "https://m.media-amazon.com/images/I/61nzPMNY8zL._SX679_.jpg",
        description: "Apple iPhone 14 Pro Max with A16 Bionic chip and Dynamic Island."
      },
      {
        name: "Samsung Galaxy S23 Ultra",
        price: 124999,
        image: "https://m.media-amazon.com/images/I/61+Q6Rh3OQL._SX679_.jpg",
        description: "Samsung Galaxy S23 Ultra with Snapdragon 8 Gen 2 and 200MP camera."
      },
      {
        name: "OnePlus 11 5G",
        price: 56999,
        image: "https://m.media-amazon.com/images/I/61amb0CfMGL._SX679_.jpg",
        description: "OnePlus 11 5G with 120Hz AMOLED and Snapdragon 8 Gen 2."
      },
      {
        name: "Sony WH-1000XM5 Headphones",
        price: 29990,
        image: "https://m.media-amazon.com/images/I/71o8Q5XJS5L._SX679_.jpg",
        description: "Industry leading noise cancelling headphones with premium sound quality."
      },
      {
        name: "Apple MacBook Air M2",
        price: 114999,
        image: "https://m.media-amazon.com/images/I/71f5Eu5lJSL._SX679_.jpg",
        description: "Apple MacBook Air with M2 chip and Liquid Retina display."
      },
      {
        name: "Boat Rockerz 450",
        price: 1499,
        image: "https://m.media-amazon.com/images/I/61u48FEs1rL._SX679_.jpg",
        description: "Wireless Bluetooth on-ear headphones with 15H playback."
      }
    ]);
  })
  .then(() => {
    console.log("Data Seeded Successfully ✅");
    mongoose.disconnect();
  })
  .catch((err) => {
    console.error("Error seeding data:", err);
    mongoose.disconnect();
  });
