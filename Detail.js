import mongoose from 'mongoose';

// Detail Schema
const cartItemSchema = new mongoose.Schema({
    name: { type: String, required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
});

const DetailSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    message: { type: String, required: true },
    paymentMethod: { type: String, required: true },
    cartItems: [cartItemSchema], 
});


const Detail = mongoose.model('Detail', DetailSchema);

export default Detail;