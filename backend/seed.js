require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('./models/producttemp');
const products = require('./products.json');
mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    await Product.deleteMany({});
    await Product.insertMany(products);
    console.log('Products seeded');
    process.exit();
  })
  .catch(err => {
    console.error('Seeding error:', err);
    process.exit(1);
  });
