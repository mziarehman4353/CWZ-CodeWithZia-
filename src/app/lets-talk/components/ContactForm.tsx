"use client";
import ContactCTA from './ContactCTA';


import { useState } from "react";

const formspreeEndpoint = "https://formspree.io/f/mayrkbya"; // ✅ Real Formspree ID

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    message: "",
    service: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setIsSubmitted(true);
        setFormData({
          name: "",
          email: "",
          whatsapp: "",
          message: "",
          service: "",
        });
      } else {
        throw new Error("Form submission failed.");
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 px-4 sm:px-8 md:px-16 max-w-2xl mx-auto">
      <form
        onSubmit={handleSubmit}
        className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-lg shadow-xl space-y-6"
      >
        <h2 className="text-2xl font-semibold text-white text-center">Contact Us</h2>

        {isSubmitted && (
          <div className="text-green-400 text-center font-medium">
            Thanks! We'll get in touch soon.
          </div>
        )}

        {error && (
          <div className="text-red-400 text-center font-medium">{error}</div>
        )}

        {/* Name */}
        <div className="relative">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder=" "
            className="peer w-full bg-transparent border-b border-gray-500 focus:outline-none focus:border-blue-400 text-white px-1 py-2"
          />
          <label className="absolute left-1 top-2 text-gray-400 text-sm transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:text-sm peer-focus:text-blue-400">
            Name
          </label>
        </div>

        {/* Email */}
        <div className="relative">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder=" "
            className="peer w-full bg-transparent border-b border-gray-500 focus:outline-none focus:border-blue-400 text-white px-1 py-2"
          />
          <label className="absolute left-1 top-2 text-gray-400 text-sm transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:text-sm peer-focus:text-blue-400">
            Email
          </label>
        </div>

        {/* WhatsApp */}
        <div className="relative">
          <input
            type="text"
            name="whatsapp"
            value={formData.whatsapp}
            onChange={handleChange}
            placeholder=" "
            className="peer w-full bg-transparent border-b border-gray-500 focus:outline-none focus:border-blue-400 text-white px-1 py-2"
          />
          <label className="absolute left-1 top-2 text-gray-400 text-sm transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:text-sm peer-focus:text-blue-400">
            WhatsApp Number (Optional)
          </label>
        </div>

        {/* Message */}
        <div className="relative">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder=" "
            rows={4}
            className="peer w-full bg-transparent border-b border-gray-500 focus:outline-none focus:border-blue-400 text-white px-1 py-2 resize-none"
          />
          <label className="absolute left-1 top-2 text-gray-400 text-sm transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:text-sm peer-focus:text-blue-400">
            What do you want to talk about?
          </label>
        </div>

        {/* Service Select */}
        <div className="relative">
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full bg-transparent border-b border-gray-500 focus:outline-none focus:border-blue-400 text-white px-1 py-2"
          >
            <option value="" disabled>
              Select service type (Optional)
            </option>
            <option value="Portfolio">Portfolio</option>
            <option value="E-commerce">E-commerce</option>
            <option value="Mobile App">Mobile App</option>
            <option value="Web Development">Web Development</option>
            <option value="Growth/SEO">Growth & SEO</option>
          </select>
        </div>

        {/* Submit Button */}
        <ContactCTA isSubmitting={isSubmitting} isSubmitted={isSubmitted} />
      </form>
    </section>
  );
}

// Make sure to import ContactCTA at the top:
// import ContactCTA from "./ContactCTA"; (adjust path if necessary)
