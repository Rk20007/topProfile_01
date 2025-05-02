// app/api/payment/fetch/route.js
import { NextResponse } from 'next/server';
import connectDB from '@/libs/mongoClient';
import PaymentDetails from '@/models/paymentDetails';

export async function GET() {
  try {
    await connectDB();
    const payments = await PaymentDetails.find().sort({ createdAt: -1 });
    return NextResponse.json(payments);
  } catch (error) {
    return NextResponse.json({ message: 'Failed to fetch payments' }, { status: 500 });
  }
}
