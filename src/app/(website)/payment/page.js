'use client';

import { useState } from 'react';

export default function PaymentPage() {
  const [email, setEmail] = useState('');
  const [amount, setAmount] = useState('');
  const [utr, setUtr] = useState('');
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMsg('');

    if (!email || !amount || !utr || !file) {
      setMsg('Please fill all fields and upload screenshot.');
      setLoading(false);
      return;
    }

    const formData = new FormData();
    formData.append('email', email);
    formData.append('amount', amount);
    formData.append('utr', utr);
    formData.append('screenshot', file);

    try {
      const res = await fetch('/api/payment', {
        method: 'POST',
        body: formData,
      });

      const result = await res.json();
      setLoading(false);
      setMsg(result?.message || 'Payment submitted successfully');
      setEmail('');
      setAmount('');
      setUtr('');
      setFile(null);
    } catch (error) {
      console.error('Submit error:', error);
      setLoading(false);
      setMsg('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-md">
      <h1 className="text-2xl font-bold text-center mb-4">Make Payment</h1>

      <div className="mb-4 text-center">
        <p className="text-gray-600">Scan the QR code to pay</p>
        <img src="/assets/new1.jpeg" alt="QR Code" className="mx-auto w-40 h-40 my-2 rounded" />
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="number"
          placeholder="Enter Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="text"
          placeholder="Enter UTR Number"
          value={utr}
          onChange={(e) => setUtr(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files[0])}
          className="w-full"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition disabled:opacity-60"
        >
          {loading ? 'Submitting...' : 'Submit Payment'}
        </button>
      </form>

      {msg && (
        <p className="text-center mt-4 text-sm font-medium text-green-600">{msg}</p>
      )}
    </div>
  );
}
