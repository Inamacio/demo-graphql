import { Schema, model } from 'mongoose';

const ProductSchema = new Schema({
  name: String,
  price: Number,
  category: String,
});

const product = model('product', ProductSchema);

export default product;
