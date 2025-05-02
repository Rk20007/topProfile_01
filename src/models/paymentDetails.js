// models/paymentDetails.js
import mongoose from 'mongoose';

const paymentDetailsSchema = new mongoose.Schema({
  email: { type: String, required: true },
  amount: { type: Number, required: true },
  utr: { type: String, required: true },
  screenshot: { type: String, required: true },
}, { timestamps: true });

export default mongoose.models.paymentdetails || mongoose.model('paymentdetails', paymentDetailsSchema);
