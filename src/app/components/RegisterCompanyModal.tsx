'use client';

import { useState, useRef } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon } from '@heroicons/react/24/outline';
import ReCAPTCHA from 'react-google-recaptcha';

const PRIMARY_COLOR = '#00204f'; // Njere Blue
const ACCENT_COLOR = '#04baab'; // Njere Teal

interface RegisterCompanyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const RegisterCompanyModal: React.FC<RegisterCompanyModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    companyName: '',
    industry: '',
    location: '',
    province: '',
    contactName: '',
    position: '',
    phone: '',
    email: '',
    areasOfInterest: '',
    budget: '',
    motivation: '',
    consent: false,
  });

  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const target = e.target as HTMLInputElement;
    const { name, value, type } = target;
    const checked = target.checked;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consent) {
      alert('Please consent to sharing your company\'s information.');
      return;
    }

    if (!captchaToken) {
      alert('Please complete the reCAPTCHA verification.');
      return;
    }

    try {
      const response = await axios.post(
        'https://csr-njere.smathub.com/api/companies',
        { ...formData, captchaToken },
        {
          headers: { 'Content-Type': 'application/json' },
        },
      );

      if (response.status >= 200 && response.status < 300) {
        alert('Company registration successful! We will contact you soon.');
        setFormData({
          companyName: '',
          industry: '',
          location: '',
          province: '',
          contactName: '',
          position: '',
          phone: '',
          email: '',
          areasOfInterest: '',
          budget: '',
          motivation: '',
          consent: false,
        });
        setCaptchaToken(null);
        recaptchaRef.current?.reset();
        onClose();
      } else {
        alert(`Registration failed: Please provide all required information.`);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900">Register Your Company</h2>
              <button
                onClick={onClose}
                className="p-2 text-gray-400 hover:text-gray-600"
              >
                <XMarkIcon className="w-6 h-6" />
              </button>
            </div>
            <div className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="companyName"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Company Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 text-gray-900 bg-white border border-gray-400 rounded-lg focus:ring-2 focus:outline-none focus:border-blue-500"
                      style={{
                        boxShadow:
                          '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
                        transition: 'all 0.2s ease-in-out',
                      }}
                      placeholder="Enter your company name"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="industry"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Industry <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="industry"
                      name="industry"
                      value={formData.industry}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 text-gray-900 bg-white border border-gray-400 rounded-lg focus:ring-2 focus:outline-none focus:border-blue-500"
                      style={{
                        boxShadow:
                          '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
                        transition: 'all 0.2s ease-in-out',
                      }}
                      placeholder="Enter your industry"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="location"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Location (City/Town) <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 text-gray-900 bg-white border border-gray-400 rounded-lg focus:ring-2 focus:outline-none focus:border-blue-500"
                      style={{
                        boxShadow:
                          '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
                        transition: 'all 0.2s ease-in-out',
                      }}
                      placeholder="Enter city or town"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="province"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Province <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="province"
                      name="province"
                      value={formData.province}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 pr-10 text-gray-900 bg-white border border-gray-400 rounded-lg appearance-none cursor-pointer focus:ring-2 focus:outline-none focus:border-blue-500"
                      style={{
                        boxShadow:
                          '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
                        transition: 'all 0.2s ease-in-out',
                        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                        backgroundPosition: 'right 0.75rem center',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: '1.5em 1.5em',
                      }}
                      required
                    >
                      <option value="" className="text-gray-900">
                        Select Province
                      </option>
                      <option value="Bulawayo" className="text-gray-900">
                          Bulawayo
                        </option>
                        <option value="Harare" className="text-gray-900">
                          Harare
                        </option>
                        <option value="Manicaland" className="text-gray-900">
                          Manicaland
                        </option>
                        <option value="Mashonaland Central" className="text-gray-900">
                          Mashonaland Central
                        </option>
                        <option value="Mashonaland East" className="text-gray-900">
                          Mashonaland East
                        </option>
                        <option value="Mashonaland West" className="text-gray-900">
                          Mashonaland West
                        </option>
                        <option value="Masvingo" className="text-gray-900">
                          Masvingo
                        </option>
                        <option value="Matabeleland North" className="text-gray-900">
                          Matabeleland North
                        </option>
                        <option value="Matabeleland South" className="text-gray-900">
                          Matabeleland South
                        </option>
                        <option value="Midlands" className="text-gray-900">
                          Midlands
                        </option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="contactName"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Contact Person Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="contactName"
                      name="contactName"
                      value={formData.contactName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 text-gray-900 bg-white border border-gray-400 rounded-lg focus:ring-2 focus:outline-none focus:border-blue-500"
                      style={{
                        boxShadow:
                          '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
                        transition: 'all 0.2s ease-in-out',
                      }}
                      placeholder="Enter contact person name"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="position"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Position <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="position"
                      name="position"
                      value={formData.position}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 text-gray-900 bg-white border border-gray-400 rounded-lg focus:ring-2 focus:outline-none focus:border-blue-500"
                      style={{
                        boxShadow:
                          '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
                        transition: 'all 0.2s ease-in-out',
                      }}
                      placeholder="Enter position (e.g., CSR Manager)"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 text-gray-900 bg-white border border-gray-400 rounded-lg focus:ring-2 focus:outline-none focus:border-blue-500"
                      style={{
                        boxShadow:
                          '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
                        transition: 'all 0.2s ease-in-out',
                      }}
                      placeholder="Enter phone number"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 text-gray-900 bg-white border border-gray-400 rounded-lg focus:ring-2 focus:outline-none focus:border-blue-500"
                      style={{
                        boxShadow:
                          '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
                        transition: 'all 0.2s ease-in-out',
                      }}
                      placeholder="Enter email address"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="areasOfInterest"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Areas of Interest for Sponsorship <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="areasOfInterest"
                    name="areasOfInterest"
                    value={formData.areasOfInterest}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 pr-10 text-gray-900 bg-white border border-gray-400 rounded-lg appearance-none cursor-pointer focus:ring-2 focus:outline-none focus:border-blue-500"
                    style={{
                      boxShadow:
                        '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
                      transition: 'all 0.2s ease-in-out',
                      backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                      backgroundPosition: 'right 0.75rem center',
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: '1.5em 1.5em',
                    }}
                    required
                  >
                    <option value="" className="text-gray-900">
                      Select Area of Interest
                    </option>
                    <option value="ICT" className="text-gray-900">
                      ICT
                    </option>
                    <option value="Stationery" className="text-gray-900">
                      Stationery
                    </option>
                    <option value="Infrastructure" className="text-gray-900">
                      Infrastructure
                    </option>
                    <option value="Fees Support" className="text-gray-900">
                      Fees Support
                    </option>
                    <option value="Other" className="text-gray-900">
                      Other
                    </option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="budget"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Estimated Annual CSR Budget (USD) <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 text-gray-900 bg-white border border-gray-400 rounded-lg focus:ring-2 focus:outline-none focus:border-blue-500"
                    style={{
                      boxShadow:
                        '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
                      transition: 'all 0.2s ease-in-out',
                    }}
                    placeholder="Enter estimated budget in USD"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="motivation"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Short Description / Motivation <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="motivation"
                    name="motivation"
                    value={formData.motivation}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 text-gray-900 bg-white border border-gray-400 rounded-lg resize-none focus:ring-2 focus:outline-none focus:border-blue-500"
                    style={{
                      boxShadow:
                        '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
                      transition: 'all 0.2s ease-in-out',
                    }}
                    placeholder="Tell us briefly why your company wants to sponsor schools"
                    required
                  ></textarea>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="consent"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleInputChange}
                    className="w-4 h-4 mr-2 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    style={{ accentColor: ACCENT_COLOR }}
                    required
                  />
                  <label htmlFor="consent" className="text-sm text-gray-900">
                    I consent to having my company's information shared with schools.
                  </label>
                </div>

                <div className="flex justify-center">
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''}
                    onChange={(token) => setCaptchaToken(token)}
                    onExpired={() => setCaptchaToken(null)}
                  />
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full py-3 font-bold text-white transition-all rounded-full cursor-pointer hover:opacity-90"
                    style={{ backgroundColor: ACCENT_COLOR }}
                  >
                    Register Company
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default RegisterCompanyModal;
