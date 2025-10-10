'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon } from '@heroicons/react/24/outline';

const PRIMARY_COLOR = '#00204f'; // Njere Blue
const ACCENT_COLOR = '#04baab'; // Njere Teal

interface RegisterSchoolModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const RegisterSchoolModal: React.FC<RegisterSchoolModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    schoolName: '',
    location: '',
    province: '',
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
  });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consent) {
      alert('Please consent to sharing your school\'s information.');
      return;
    }
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form or show success message
    onClose();
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
              <h2 className="text-2xl font-bold text-gray-900">Register Your School</h2>
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
                      style={{
                        boxShadow:
                          '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
                        transition: 'all 0.2s ease-in-out',
                      }}
                      placeholder="Enter your school name"
                      required
                    />
                  </div>
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
                    <option value="Eastern Cape" className="text-gray-900">
                      Eastern Cape
                    </option>
                    <option value="Free State" className="text-gray-900">
                      Free State
                    </option>
                    <option value="Gauteng" className="text-gray-900">
                      Gauteng
                    </option>
                    <option value="KwaZulu-Natal" className="text-gray-900">
                      KwaZulu-Natal
                    </option>
                    <option value="Limpopo" className="text-gray-900">
                      Limpopo
                    </option>
                    <option value="Mpumalanga" className="text-gray-900">
                      Mpumalanga
                    </option>
                    <option value="Northern Cape" className="text-gray-900">
                      Northern Cape
                    </option>
                    <option value="North West" className="text-gray-900">
                      North West
                    </option>
                    <option value="Western Cape" className="text-gray-900">
                      Western Cape
                    </option>
                  </select>
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
                      placeholder="Enter position (e.g., Principal, Teacher)"
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
                    htmlFor="schoolFees"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Average School Fees (per term) <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="schoolFees"
                    name="schoolFees"
                    value={formData.schoolFees}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 text-gray-900 bg-white border border-gray-400 rounded-lg focus:ring-2 focus:outline-none focus:border-blue-500"
                    style={{
                      boxShadow:
                        '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
                      transition: 'all 0.2s ease-in-out',
                    }}
                    placeholder="Enter average school fees per term"
                    required
                  />
                </div>

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
                        style={{
                          boxShadow:
                            '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
                          transition: 'all 0.2s ease-in-out',
                        }}
                        placeholder="Enter service provider name"
                      />
                    </div>
                  )}
                </div>

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
                        style={{
                          boxShadow:
                            '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
                          transition: 'all 0.2s ease-in-out',
                        }}
                        placeholder="Enter number of computers"
                      />
                    </div>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="areasOfNeed"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Which of the following areas of digitization does your school need support in? <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="areasOfNeed"
                    name="areasOfNeed"
                    value={formData.areasOfNeed}
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
                      Select Area of Need
                    </option>
                    <optgroup label="ICT Services">
                      <option value="Smartbots" className="text-gray-900">
                        Smartbots
                      </option>
                      <option value="AI Tutors" className="text-gray-900">
                        AI Tutors
                      </option>
                      <option value="Digital Libraries" className="text-gray-900">
                        Digital Libraries
                      </option>
                      <option value="E-Learning Platforms" className="text-gray-900">
                        E-Learning Platforms
                      </option>
                    </optgroup>
                    <optgroup label="Other">
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
                    </optgroup>
                  </select>
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
                    placeholder="Tell us briefly why your school should be considered for sponsorship"
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
                    I consent to having my school's information shared with potential sponsors.
                  </label>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full py-3 font-bold text-white transition-all rounded-lg cursor-pointer hover:opacity-90"
                    style={{ backgroundColor: ACCENT_COLOR }}
                  >
                    Join CSR Connect
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