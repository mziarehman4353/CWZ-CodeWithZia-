'use client';

import { useState, useEffect } from 'react';

const StickyCTA = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(true); // auto-open on load

  const formspreeEndpoint = 'https://formspree.io/f/{form-id}'; // Replace {form-id}

  useEffect(() => {
    // Auto-open logic (already default in useState)
    setIsOpen(true);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', whatsapp: '' });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Something went wrong, please try again.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 w-[22rem] max-w-[90vw] transition-all duration-500 ease-in-out">
      {isOpen ? (
        <div className="relative bg-white shadow-xl rounded-lg p-6">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-2 right-2 text-sm text-gray-500 hover:text-gray-800"
          >
            &times; {/* Escaped the apostrophe */}
          </button>

          {isSubmitted ? (
            <div className="text-center">
              <h3 className="text-lg font-semibold text-green-600">
                ✅ Thank you! We&apos;ll contact you soon.
              </h3>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
              {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full mb-3 px-4 py-2 border border-gray-300 rounded-lg"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="w-full mb-3 px-4 py-2 border border-gray-300 rounded-lg"
              />
              <input
                type="text"
                name="whatsapp"
                value={formData.whatsapp}
                onChange={handleChange}
                placeholder="Your WhatsApp Number"
                required
                className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-lg"
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-2 text-white rounded-lg ${
                  isSubmitting ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'
                }`}
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
            </form>
          )}
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-3 rounded-lg shadow-lg"
        >
          Book a Free Call
        </button>
      )}
    </div>
  );
};

export default StickyCTA;
