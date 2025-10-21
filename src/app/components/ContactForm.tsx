'use client';

import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');
    setIsError(false);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitMessage('Thank you! Your message has been sent successfully.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      } else {
        setIsError(true);
        setSubmitMessage(data.error || 'There was a problem sending your message.');
      }
    } catch (error) {
      setIsError(true);
      setSubmitMessage('There was a problem sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Status Message */}
      {submitMessage && (
        <div className={`mb-6 p-4 rounded-md ${isError ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
          {submitMessage}
        </div>
      )}

      <form className="space-y-6" onSubmit={handleSubmit}>
        {/* Name and Email */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Your Name..."
              required
              autoComplete="name"
              className="w-full p-4 text-gray-800 transition-all duration-300 border-b-2 border-gray-300 rounded-none focus:border-b-2 focus:border-gray-500 focus:outline-none focus:ring-0 bg-gray-50"
            />
          </div>
          <div>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Your Email..."
              required
              autoComplete="email"
              className="w-full p-4 text-gray-800 transition-all duration-300 border-b-2 border-gray-300 rounded-none focus:border-b-2 focus:border-gray-500 focus:outline-none focus:ring-0 bg-gray-50"
            />
          </div>
        </div>

        {/* Phone and Subject */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Phone Number..."
              autoComplete="tel"
              className="w-full p-4 text-gray-800 transition-all duration-300 border-b-2 border-gray-300 rounded-none focus:border-b-2 focus:border-gray-500 focus:outline-none focus:ring-0 bg-gray-50"
            />
          </div>
          <div>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              placeholder="Your Subject..."
              autoComplete="off"
              className="w-full p-4 text-gray-800 transition-all duration-300 border-b-2 border-gray-300 rounded-none focus:border-b-2 focus:border-gray-500 focus:outline-none focus:ring-0 bg-gray-50"
            />
          </div>
        </div>

        {/* Message */}
        <div>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Write here your message..."
            rows={6}
            required
            autoComplete="off"
            className="w-full p-4 text-gray-800 transition-all duration-300 border border-gray-300 rounded-md resize-y focus:border-b-2 focus:border-gray-500 focus:outline-none focus:ring-0 bg-gray-50"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full text-white font-bold py-4 px-6 rounded-full transition-opacity duration-300 text-lg shadow-md`}
          style={{
            backgroundColor: '#02ACC3',
            opacity: isSubmitting ? 0.5 : 1,
            cursor: isSubmitting ? 'not-allowed' : 'pointer'
          }}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </>
  );
};

export default ContactForm;