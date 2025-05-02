import mongoose from 'mongoose';

const PaymentSchema = new mongoose.Schema({
  utr: { type: String, required: true },
  screenshot: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Payment || mongoose.model('Payment', PaymentSchema);
