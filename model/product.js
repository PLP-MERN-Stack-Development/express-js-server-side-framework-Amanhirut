import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },        // ✅ capital S
  description: { type: String, required: true }, // ✅
  price: { type: Number, required: true },       // ✅ capital N
  category: { type: String, required: true },    // ✅
  inStock: { type: Boolean, default: true }      // ✅ capital B
});

const Product = mongoose.model('Product', productSchema);

export default Product;
