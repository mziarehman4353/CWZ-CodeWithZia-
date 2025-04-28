'use client';

import { useState } from 'react';

const ContactForm = () => {
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    try {
      const res = await fetch('https://formspree.io/f/your-form-id', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
        },
        body: formData,
      });

      if (res.ok) {
        setStatus('Thanks for reaching out!');
      } else {
        setStatus('Oops! Something went wrong.');
      }
    } catch (error) {
      console.error('Error submitting contact form:', error);
      setStatus('Oops! Something went wrong.');
    }
  };

  return (
    <div className="flex-1 flex items-center">
      <div className="w-full bg-white p-8 shadow-lg rounded-xl">
        <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your Name</label>
            <input
              id="name"
              type="text"
              name="name"
              required
              className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Your Email</label>
            <input
              id="email"
              type="email"
              name="email"
              required
              className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-700">WhatsApp Number</label>
            <input
              id="whatsapp"
              type="text"
              name="whatsapp"
              required
              className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-200"
            >
              Send Message
            </button>
          </div>

          {status && (
            <div className="mt-4 text-center text-sm text-green-500">
              {status}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
