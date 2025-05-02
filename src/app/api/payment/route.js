// app/api/payment/route.js
import { NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import connectDB from '@/libs/mongoClient';
import PaymentDetails from '@/models/paymentDetails';

export async function POST(req) {
  const formData = await req.formData();
  const email = formData.get('email');
  const amount = formData.get('amount');
  const utr = formData.get('utr');
  const file = formData.get('screenshot');

  if (!email || !amount || !utr || !file) {
    return NextResponse.json({ message: 'All fields are required' }, { status: 400 });
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  const fileName = `${uuidv4()}-${file.name}`;
  const uploadDir = path.join(process.cwd(), 'public', 'uploads');
  const filePath = path.join(uploadDir, fileName);

  await mkdir(uploadDir, { recursive: true });
  await writeFile(filePath, buffer);

  await connectDB();
  await PaymentDetails.create({
    email,
    amount,
    utr,
    screenshot: `/uploads/${fileName}`,
  });

  return NextResponse.json({ message: 'Payment submitted successfully' });
}
