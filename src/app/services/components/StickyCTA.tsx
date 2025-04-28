'use client';

import { useState,} from 'react';

const StickyCTA = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(true);

  const formspreeEndpoint = 'https://formspree.io/f/{form-id}'; // Replace {form-id}

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
        <div className="relative bg-white shadow-2xl rounded-2xl p-6 space-y-4">
          {/* Minimize Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-2 right-2 text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full px-3 py-1"
          >
            Minimize
          </button>

          {isSubmitted ? (
            <div className="text-center">
              <h3 className="text-lg font-semibold text-green-600">
                ✅ Thank you! We&apos;ll contact you soon.
              </h3>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              <h2 className="text-2xl font-bold text-center">Get in Touch</h2>
              {error && <p className="text-red-500 text-sm text-center">{error}</p>}

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm"
              />
              <input
                type="text"
                name="whatsapp"
                value={formData.whatsapp}
                onChange={handleChange}
                placeholder="Your WhatsApp Number"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm"
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-2 text-white text-sm rounded-lg ${
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
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full shadow-lg text-sm sm:text-base"
        >
           Book a Free Call
        </button>
      )}
    </div>
  );
};

export default StickyCTA;
