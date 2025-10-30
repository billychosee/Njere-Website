'use client';

import { useState, useRef } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon } from '@heroicons/react/24/outline';
import ReCAPTCHA from 'react-google-recaptcha';

const PRIMARY_COLOR = '#00204f'; // Njere Blue
const ACCENT_COLOR = '#04baab'; // Njere Teal

interface RegisterSchoolModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const RegisterSchoolModal: React.FC<RegisterSchoolModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [formData, setFormData] = useState({
    schoolName: '',
    location: '',
    province: '',
    level: '',
    contactName: '',
    position: '',
    phone: '',
    email: '',
    schoolFees: '',
    internetConnectivity: '',
    serviceProvider: '',
    computerLab: '',
    computerCount: '',
    areasOfNeed: '',
    motivation: '',
    consent: false,
    schoolLogo: null as File | null,
    schoolImage: null as File | null,
  });

  const [loading, setLoading] = useState(false);
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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files && files[0]) {
      setFormData((prev) => ({
        ...prev,
        [name]: files[0],
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.consent) {
      alert("Please consent to sharing your school's information.");
      return;
    }

    if (!captchaToken) {
      alert('Please complete the reCAPTCHA verification.');
      return;
    }

    setLoading(true);

    try {
      // Create FormData for file uploads
      const submitData = new FormData();

      // Add all form fields
      Object.entries(formData).forEach(([key, value]) => {
        if (value !== null && value !== undefined) {
          if (value instanceof File) {
            submitData.append(key, value);
          } else {
            submitData.append(key, String(value));
          }
        }
      });

      submitData.append('captchaToken', captchaToken || '');

      const response = await axios.post(
        'https://csr-njere.smathub.com/api/schools',
        submitData,
        {
          headers: { 'Content-Type': 'multipart/form-data' },
        },
      );

      if (response.status >= 200 && response.status < 300) {
        alert('School registration successful! We will contact you soon.');
        setFormData({
          schoolName: '',
          location: '',
          province: '',
          level: '',
          contactName: '',
          position: '',
          phone: '',
          email: '',
          schoolFees: '',
          internetConnectivity: '',
          serviceProvider: '',
          computerLab: '',
          computerCount: '',
          areasOfNeed: '',
          motivation: '',
          consent: false,
          schoolLogo: null,
          schoolImage: null,
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
    } finally {
      setLoading(false);
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
              <h2 className="text-2xl font-bold text-gray-900">
                Register Your School
              </h2>
              <button
                onClick={onClose}
                className="p-2 text-gray-400 hover:text-gray-600"
              >
                <XMarkIcon className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* School Name */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="schoolName"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      School Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="schoolName"
                      name="schoolName"
                      value={formData.schoolName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 text-gray-900 bg-white border border-gray-400 rounded-lg focus:ring-2 focus:outline-none focus:border-blue-500"
                      placeholder="Enter your school name"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="location"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Location (City/Town){' '}
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 text-gray-900 bg-white border border-gray-400 rounded-lg focus:ring-2 focus:outline-none focus:border-blue-500"
                      placeholder="Enter city or town"
                      required
                    />
                  </div>
                </div>

                {/* Province & Level */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
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
                      required
                    >
                      <option value="">Select Province</option>
                      <option value="Eastern Cape">Eastern Cape</option>
                      <option value="Free State">Free State</option>
                      <option value="Gauteng">Gauteng</option>
                      <option value="KwaZulu-Natal">KwaZulu-Natal</option>
                      <option value="Limpopo">Limpopo</option>
                      <option value="Mpumalanga">Mpumalanga</option>
                      <option value="Northern Cape">Northern Cape</option>
                      <option value="North West">North West</option>
                      <option value="Western Cape">Western Cape</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="level"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      School Level <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="level"
                      name="level"
                      value={formData.level}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 pr-10 text-gray-900 bg-white border border-gray-400 rounded-lg appearance-none cursor-pointer focus:ring-2 focus:outline-none focus:border-blue-500"
                      required
                    >
                      <option value="">Select Level</option>
                      <option value="Primary">Primary</option>
                      <option value="Secondary">Secondary</option>
                    </select>
                  </div>
                </div>

                {/* Contact Name & Position */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="contactName"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Contact Person Name{' '}
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="contactName"
                      name="contactName"
                      value={formData.contactName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 text-gray-900 bg-white border border-gray-400 rounded-lg focus:ring-2 focus:outline-none focus:border-blue-500"
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
                      placeholder="Enter position (e.g., Principal, Teacher)"
                      required
                    />
                  </div>
                </div>

                {/* Phone & Email */}
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
                      placeholder="Enter email address"
                      required
                    />
                  </div>
                </div>

                {/* School Fees */}
                <div>
                  <label
                    htmlFor="schoolFees"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Average School Fees (per term){' '}
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="schoolFees"
                    name="schoolFees"
                    value={formData.schoolFees}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 text-gray-900 bg-white border border-gray-400 rounded-lg focus:ring-2 focus:outline-none focus:border-blue-500"
                    placeholder="Enter average school fees per term"
                    required
                  />
                </div>

                {/* Internet Connectivity & Service Provider */}
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900">
                    Internet Connectivity
                  </label>
                  <div className="flex space-x-6">
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="internetConnectivity"
                        value="yes"
                        checked={formData.internetConnectivity === 'yes'}
                        onChange={handleInputChange}
                        className="w-4 h-4 mr-2 text-blue-600 border-gray-300 focus:ring-blue-500"
                        style={{ accentColor: ACCENT_COLOR }}
                      />
                      <span className="text-gray-900">Yes</span>
                    </label>
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="internetConnectivity"
                        value="no"
                        checked={formData.internetConnectivity === 'no'}
                        onChange={handleInputChange}
                        className="w-4 h-4 mr-2 text-blue-600 border-gray-300 focus:ring-blue-500"
                        style={{ accentColor: ACCENT_COLOR }}
                      />
                      <span className="text-gray-900">No</span>
                    </label>
                  </div>
                  {formData.internetConnectivity === 'yes' && (
                    <div className="mt-3">
                      <label
                        htmlFor="serviceProvider"
                        className="block mb-2 text-sm font-medium text-gray-900"
                      >
                        Which service provider do you use?
                      </label>
                      <input
                        type="text"
                        id="serviceProvider"
                        name="serviceProvider"
                        value={formData.serviceProvider}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 text-gray-900 bg-white border border-gray-400 rounded-lg focus:ring-2 focus:outline-none focus:border-blue-500"
                        placeholder="Enter service provider name"
                      />
                    </div>
                  )}
                </div>

                {/* Computer Lab & Count */}
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900">
                    Computer Lab
                  </label>
                  <div className="flex space-x-6">
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="computerLab"
                        value="yes"
                        checked={formData.computerLab === 'yes'}
                        onChange={handleInputChange}
                        className="w-4 h-4 mr-2 text-blue-600 border-gray-300 focus:ring-blue-500"
                        style={{ accentColor: ACCENT_COLOR }}
                      />
                      <span className="text-gray-900">Yes</span>
                    </label>
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="computerLab"
                        value="no"
                        checked={formData.computerLab === 'no'}
                        onChange={handleInputChange}
                        className="w-4 h-4 mr-2 text-blue-600 border-gray-300 focus:ring-blue-500"
                        style={{ accentColor: ACCENT_COLOR }}
                      />
                      <span className="text-gray-900">No</span>
                    </label>
                  </div>
                  {formData.computerLab === 'yes' && (
                    <div className="mt-3">
                      <label
                        htmlFor="computerCount"
                        className="block mb-2 text-sm font-medium text-gray-900"
                      >
                        How many computers does your school currently have?
                      </label>
                      <input
                        type="number"
                        id="computerCount"
                        name="computerCount"
                        value={formData.computerCount}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 text-gray-900 bg-white border border-gray-400 rounded-lg focus:ring-2 focus:outline-none focus:border-blue-500"
                        placeholder="Enter number of computers"
                      />
                    </div>
                  )}
                </div>

                {/* Areas of Need */}
                <div>
                  <label
                    htmlFor="areasOfNeed"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Which of the following areas of digitization does your
                    school need support in?{' '}
                    <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="areasOfNeed"
                    name="areasOfNeed"
                    value={formData.areasOfNeed}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 pr-10 text-gray-900 bg-white border border-gray-400 rounded-lg appearance-none cursor-pointer focus:ring-2 focus:outline-none focus:border-blue-500"
                    required
                  >
                    <option value="">Select Area of Need</option>
                    <optgroup label="ICT Services">
                      <option value="Smartbots">Smartbots</option>
                      <option value="AI Tutors">AI Tutors</option>
                      <option value="Digital Libraries">
                        Digital Libraries
                      </option>
                      <option value="E-Learning Platforms">
                        E-Learning Platforms
                      </option>
                    </optgroup>
                    <optgroup label="Other">
                      <option value="Stationery">Stationery</option>
                      <option value="Infrastructure">Infrastructure</option>
                      <option value="Fees Support">Fees Support</option>
                      <option value="Other">Other</option>
                    </optgroup>
                  </select>
                </div>

                {/* School Logo Upload */}
                <div>
                  <label
                    htmlFor="schoolLogo"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    School Logo (Optional)
                  </label>
                  <input
                    type="file"
                    id="schoolLogo"
                    name="schoolLogo"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="w-full px-4 py-3 text-gray-900 bg-white border border-gray-400 rounded-lg focus:ring-2 focus:outline-none focus:border-blue-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                  />
                  <p className="mt-1 text-xs text-gray-500">
                    Upload your school logo (PNG, JPG, max 5MB) - Optional for now
                  </p>
                </div>

                {/* School Image Upload */}
                <div>
                  <label
                    htmlFor="schoolImage"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    School Overview Image (Optional)
                  </label>
                  <input
                    type="file"
                    id="schoolImage"
                    name="schoolImage"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="w-full px-4 py-3 text-gray-900 bg-white border border-gray-400 rounded-lg focus:ring-2 focus:outline-none focus:border-blue-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100"
                  />
                  <p className="mt-1 text-xs text-gray-500">
                    Upload a photo/overview of your school (PNG, JPG, max 10MB) - Optional for now, will be displayed as background when viewing school profile
                  </p>
                </div>

                {/* Motivation */}
                <div>
                  <label
                    htmlFor="motivation"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Short Description / Motivation{' '}
                    <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="motivation"
                    name="motivation"
                    value={formData.motivation}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 text-gray-900 bg-white border border-gray-400 rounded-lg resize-none focus:ring-2 focus:outline-none focus:border-blue-500"
                    placeholder="Tell us briefly why your school should be considered for sponsorship"
                    required
                  />
                </div>

                {/* Consent */}
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
                    I consent to having my school's information shared with
                    potential sponsors.
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

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={loading}
                    className={`w-full py-3 font-bold text-white transition-all rounded-full cursor-pointer hover:opacity-90 flex justify-center items-center gap-2 ${
                      loading ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                    style={{ backgroundColor: ACCENT_COLOR }}
                  >
                    {loading && (
                      <svg
                        className="w-5 h-5 text-white animate-spin"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                        ></path>
                      </svg>
                    )}
                    {loading ? 'Submitting...' : 'Join CSR Connect'}
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

export default RegisterSchoolModal;

