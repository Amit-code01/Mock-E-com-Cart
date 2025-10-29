import mongoose from "mongoose";
import dotenv from "dotenv";
import Product from "./models/productModel.js";
import connectDB from "./config/db.js";

dotenv.config();
await connectDB();

const sampleProducts = [
  {
    name: "iPhone 15 Pro",
    image: "https://via.placeholder.com/200",
    price: 1299,
    description: "Apple’s latest flagship smartphone.",
    category: "Electronics",
  },
  {
    name: "Nike Air Max",
    image: "https://via.placeholder.com/200",
    price: 199,
    description: "Stylish and comfortable running shoes.",
    category: "Fashion",
  },
  {
    name: "Sony WH-1000XM5",
    image: "https://via.placeholder.com/200",
    price: 349,
    description: "Noise-cancelling wireless headphones.",
    category: "Electronics",
  },
];

try {
  await Product.deleteMany();
  await Product.insertMany(sampleProducts);
  console.log("✅ Sample products inserted successfully!");
  process.exit();
} catch (error) {
  console.error(`❌ Error: ${error.message}`);
  process.exit(1);
}
