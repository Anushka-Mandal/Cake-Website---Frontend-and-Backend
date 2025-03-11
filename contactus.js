import mongoose from 'mongoose';

const detailSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    message: { type: String, required: true },
});

const Contact = mongoose.model('Contact', detailSchema);
export default Contact;