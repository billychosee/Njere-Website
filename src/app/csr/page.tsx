'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import {
  MapPinIcon,
  ComputerDesktopIcon,
  BookOpenIcon,
  BuildingOfficeIcon,
  AcademicCapIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  UserGroupIcon,
  ChartBarIcon,
  LightBulbIcon,
} from '@heroicons/react/24/outline';
import Footer from '../components/Footer'; 

// Define the primary and accent colors for a sleek, professional look
const PRIMARY_COLOR = '#00204f'; // Njere Blue
const ACCENT_COLOR = '#04baab'; // Njere Teal

const CSRPage = () => {
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
  });

  const [filterLocation, setFilterLocation] = useState('');
  const [filterNeed, setFilterNeed] = useState('');
  const [filterLevel, setFilterLevel] = useState('');

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form or show success message
  };

  // Sample data for schools
  const schools = [
    {
      id: 1,
      name: 'Sunrise Primary School',
      location: 'Johannesburg, Gauteng',
      level: 'Primary',
      needs: ['ICT Equipment', 'Textbooks'],
      image: '/black-girl.png',
      urgent: true,
    },
    {
      id: 2,
      name: 'Mthatha High School',
      location: 'Mthatha, Eastern Cape',
      level: 'Secondary',
      needs: ['Infrastructure', 'Stationery'],
      image: '/black-girl.png',
      urgent: false,
    },
    {
      id: 3,
      name: 'Rural Hope Academy',
      location: 'Polokwane, Limpopo',
      level: 'Primary',
      needs: ['Fees Support', 'Computer Lab'],
      image: '/black-girl.png',
      urgent: true,
    },
  ];

  // Filter schools based on selected filters
  const filteredSchools = schools.filter((school) => {
    return (
      (filterLocation === '' || school.location.includes(filterLocation)) &&
      (filterNeed === '' || school.needs.includes(filterNeed)) &&
      (filterLevel === '' || school.level === filterLevel)
    );
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className="relative pt-40 pb-20 overflow-hidden text-white"
        style={{
          backgroundColor: PRIMARY_COLOR,
        }}
      >
        {/* Background decoration */}
        <div
          className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10 blur-3xl"
          style={{ backgroundColor: ACCENT_COLOR }}
        ></div>
        <div
          className="absolute bottom-0 left-0 rounded-full w-96 h-96 opacity-10 blur-3xl"
          style={{ backgroundColor: ACCENT_COLOR }}
        ></div>

        <div className="container relative z-10 px-4 mx-auto md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              className="mb-4 text-4xl font-extrabold md:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Support Schools. Empower Futures.
            </motion.h1>
            <motion.p
              className="mb-8 text-xl text-white/90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Njere CSR Connect links schools in need with companies and
              organizations ready to sponsor education initiatives.
            </motion.p>
            <motion.div
              className="flex flex-col justify-center gap-4 sm:flex-row"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <button
                className="flex items-center justify-center px-8 py-4 font-bold text-blue-900 transition-all transform bg-white rounded-full shadow-lg cursor-pointer hover:bg-gray-100 hover:scale-105"
                onClick={() =>
                  document
                    .getElementById('school-signup')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
              >
                Register Your School
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </button>
              <button
                className="px-8 py-4 font-bold text-white transition-all border-2 border-white rounded-full cursor-pointer hover:bg-white hover:text-blue-900"
                onClick={() =>
                  document
                    .getElementById('browse-schools')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
              >
                Find a School to Sponsor
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* For Schools - Sign Up Form */}
      <section id="school-signup" className="py-20 bg-gray-50">
        <div className="container px-4 mx-auto md:px-6">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <h2
              className="text-base font-semibold tracking-wider uppercase"
              style={{ color: ACCENT_COLOR }}
            >
              For Schools
            </h2>
            <h2 className="mb-4 text-3xl font-extrabold text-gray-900 md:text-4xl">
              Join CSR Connect
            </h2>
            <p className="text-lg text-gray-600">
              Schools can register here to highlight their needs, from ICT
              equipment to learning resources.
            </p>
          </div>

          <motion.div
            className="max-w-3xl p-8 mx-auto bg-white shadow-xl rounded-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="schoolName"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    School Name
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
                    Location (City/Town)
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
                  Province
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
                    Contact Person Name
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
                    Position
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
                    Phone Number
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
                    Email Address
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
                  Average School Fees (per term)
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
                  Areas of Need
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
                  htmlFor="motivation"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Short Description / Motivation
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
          </motion.div>
        </div>
      </section>

      {/* For Companies - Browse Schools */}
      <section id="browse-schools" className="py-20 bg-white">
        <div className="container px-4 mx-auto md:px-6">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <h2
              className="text-base font-semibold tracking-wider uppercase"
              style={{ color: ACCENT_COLOR }}
            >
              For Companies
            </h2>
            <h2 className="mb-4 text-3xl font-extrabold text-gray-900 md:text-4xl">
              Browse Schools
            </h2>
            <p className="text-lg text-gray-600">
              Companies and organizations can explore registered schools and
              choose where to direct their support.
            </p>
          </div>

          {/* Filters */}
          <motion.div
            className="max-w-4xl p-6 mx-auto mb-8 bg-gray-50 rounded-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <div>
                <label
                  htmlFor="filterLocation"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Location
                </label>
                <input
                  type="text"
                  id="filterLocation"
                  placeholder="Enter location"
                  value={filterLocation}
                  onChange={(e) => setFilterLocation(e.target.value)}
                  className="w-full px-4 py-2 text-gray-900 bg-white border border-gray-400 rounded-lg focus:ring-2 focus:outline-none focus:border-blue-500"
                  style={{
                    boxShadow:
                      '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
                    transition: 'all 0.2s ease-in-out',
                  }}
                />
              </div>
              <div>
                <label
                  htmlFor="filterNeed"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Area of Need
                </label>
                <select
                  id="filterNeed"
                  value={filterNeed}
                  onChange={(e) => setFilterNeed(e.target.value)}
                  className="w-full px-4 py-2 pr-10 text-gray-900 bg-white border border-gray-400 rounded-lg appearance-none cursor-pointer focus:ring-2 focus:outline-none focus:border-blue-500"
                  style={{
                    boxShadow:
                      '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
                    transition: 'all 0.2s ease-in-out',
                    backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                    backgroundPosition: 'right 0.75rem center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '1.5em 1.5em',
                  }}
                >
                  <option value="" className="text-gray-900">
                    All Needs
                  </option>
                  <option value="ICT Equipment" className="text-gray-900">
                    ICT Equipment
                  </option>
                  <option value="Textbooks" className="text-gray-900">
                    Textbooks
                  </option>
                  <option value="Infrastructure" className="text-gray-900">
                    Infrastructure
                  </option>
                  <option value="Stationery" className="text-gray-900">
                    Stationery
                  </option>
                  <option value="Fees Support" className="text-gray-900">
                    Fees Support
                  </option>
                  <option value="Computer Lab" className="text-gray-900">
                    Computer Lab
                  </option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="filterLevel"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  School Level
                </label>
                <select
                  id="filterLevel"
                  value={filterLevel}
                  onChange={(e) => setFilterLevel(e.target.value)}
                  className="w-full px-4 py-2 pr-10 text-gray-900 bg-white border border-gray-400 rounded-lg appearance-none cursor-pointer focus:ring-2 focus:outline-none focus:border-blue-500"
                  style={{
                    boxShadow:
                      '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
                    transition: 'all 0.2s ease-in-out',
                    backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                    backgroundPosition: 'right 0.75rem center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '1.5em 1.5em',
                  }}
                >
                  <option value="" className="text-gray-900">
                    All Levels
                  </option>
                  <option value="Primary" className="text-gray-900">
                    Primary
                  </option>
                  <option value="Secondary" className="text-gray-900">
                    Secondary
                  </option>
                </select>
              </div>
            </div>
          </motion.div>

          {/* School Listings */}
          <div className="grid max-w-6xl grid-cols-1 gap-8 mx-auto md:grid-cols-2 lg:grid-cols-3">
            {filteredSchools.map((school, index) => (
              <motion.div
                key={school.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="overflow-hidden transition-shadow bg-white border border-gray-200 shadow-lg rounded-xl hover:shadow-xl"
              >
                <div className="relative h-48">
                  <Image
                    src={school.image}
                    alt={school.name}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                  {school.urgent && (
                    <div
                      className="absolute px-3 py-1 text-xs font-bold text-white rounded-full top-4 right-4"
                      style={{ backgroundColor: ACCENT_COLOR }}
                    >
                      Urgent Need
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-bold text-gray-900">
                    {school.name}
                  </h3>
                  <div className="flex items-center mb-4 text-gray-600">
                    <MapPinIcon className="w-4 h-4 mr-1" />
                    <span className="text-sm">{school.location}</span>
                  </div>
                  <div className="mb-4">
                    <p className="mb-2 text-sm font-medium text-gray-700">
                      Needs:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {school.needs.map((need, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 text-xs rounded-full"
                          style={{
                            backgroundColor: '#f0f9ff',
                            color: PRIMARY_COLOR,
                          }}
                        >
                          {need}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Link
                    href={`/csr/school/${school.id}`}
                    className="flex items-center justify-center w-full py-2 font-medium text-white rounded-lg cursor-pointer"
                    style={{ backgroundColor: PRIMARY_COLOR }}
                  >
                    View Full Profile
                    <ArrowRightIcon className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Schools Section */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 mx-auto md:px-6">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <h2
              className="text-base font-semibold tracking-wider uppercase"
              style={{ color: ACCENT_COLOR }}
            >
              Featured Schools
            </h2>
            <h2 className="mb-4 text-3xl font-extrabold text-gray-900 md:text-4xl">
              Schools with Urgent Needs
            </h2>
          </div>

          <div className="grid max-w-6xl grid-cols-1 gap-8 mx-auto md:grid-cols-3">
            {schools
              .filter((school) => school.urgent)
              .map((school, index) => (
                <motion.div
                  key={school.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="overflow-hidden bg-white border border-gray-200 shadow-lg rounded-xl"
                >
                  <div className="relative h-48">
                    <Image
                      src={school.image}
                      alt={school.name}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                    <div
                      className="absolute px-3 py-1 text-xs font-bold text-white rounded-full top-4 right-4"
                      style={{ backgroundColor: ACCENT_COLOR }}
                    >
                      Urgent Need
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="mb-2 text-xl font-bold text-gray-900">
                      {school.name}
                    </h3>
                    <div className="flex items-center mb-4 text-gray-600">
                      <MapPinIcon className="w-4 h-4 mr-1" />
                      <span className="text-sm">{school.location}</span>
                    </div>
                    <p className="mb-4 text-gray-600">
                      This school urgently needs support for{' '}
                      {school.needs.join(' and ')} to continue providing quality
                      education to their students.
                    </p>
                    <Link
                      href={`/csr/school/${school.id}`}
                      className="flex items-center justify-center w-full py-2 font-medium text-white rounded-lg cursor-pointer"
                      style={{ backgroundColor: PRIMARY_COLOR }}
                    >
                      View Full Profile
                      <ArrowRightIcon className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 mx-auto md:px-6">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <h2
              className="text-base font-semibold tracking-wider uppercase"
              style={{ color: ACCENT_COLOR }}
            >
              Why Join Njere CSR Connect?
            </h2>
            <h2 className="mb-4 text-3xl font-extrabold text-gray-900 md:text-4xl">
              Value Proposition
            </h2>
          </div>

          <div className="grid max-w-6xl grid-cols-1 gap-8 mx-auto md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="p-8 bg-gray-50 rounded-xl"
            >
              <div className="flex items-center mb-4">
                <div
                  className="flex items-center justify-center w-12 h-12 mr-4 text-white rounded-full"
                  style={{ backgroundColor: PRIMARY_COLOR }}
                >
                  <AcademicCapIcon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  For Schools
                </h3>
              </div>
              <p className="mb-4 text-gray-600">
                Access potential sponsors and resources to improve education
                delivery.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircleIcon className="w-5 h-5 mr-2 mt-0.5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">
                    Connect with corporate sponsors
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="w-5 h-5 mr-2 mt-0.5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">
                    Get resources for ICT equipment
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="w-5 h-5 mr-2 mt-0.5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">
                    Receive learning materials
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="w-5 h-5 mr-2 mt-0.5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Improve infrastructure</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="p-8 bg-gray-50 rounded-xl"
            >
              <div className="flex items-center mb-4">
                <div
                  className="flex items-center justify-center w-12 h-12 mr-4 text-white rounded-full"
                  style={{ backgroundColor: PRIMARY_COLOR }}
                >
                  <UserGroupIcon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  For Companies
                </h3>
              </div>
              <p className="mb-4 text-gray-600">
                Align your CSR with real needs, track your impact, and showcase
                your contribution to education.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircleIcon className="w-5 h-5 mr-2 mt-0.5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">
                    Targeted impact on education
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="w-5 h-5 mr-2 mt-0.5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Track your contribution</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="w-5 h-5 mr-2 mt-0.5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">
                    Showcase your CSR initiatives
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="w-5 h-5 mr-2 mt-0.5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">
                    Build meaningful partnerships
                  </span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section
        className="py-20 text-center text-white"
        style={{
          background: 'linear-gradient(135deg, #00204f 0%, #04baab 100%)',
        }}
      >
        <div className="container px-4 mx-auto md:px-6">
          <motion.h2
            className="mb-6 text-4xl font-extrabold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Together, we can transform education.
          </motion.h2>
          <motion.p
            className="max-w-2xl mx-auto mb-10 text-lg text-white/90"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Join Njere CSR Connect today to make a meaningful impact on
            education in South Africa.
          </motion.p>
          <motion.div
            className="flex flex-col justify-center gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <button
              className="flex items-center justify-center px-8 py-4 font-bold text-blue-900 transition-transform bg-white rounded-full shadow-lg cursor-pointer hover:bg-gray-100 hover:scale-105"
              onClick={() =>
                document
                  .getElementById('school-signup')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              Register Your School
              <ArrowRightIcon className="w-5 h-5 ml-2" />
            </button>
            <button
              className="px-8 py-4 font-bold text-white transition-all border-2 border-white rounded-full cursor-pointer hover:bg-white hover:text-blue-900"
              onClick={() =>
                document
                  .getElementById('browse-schools')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              Sponsor a School
            </button>
          </motion.div>
        </div>
      </section>

      {/* Footer Section */}
      <Footer/>
    </div>
  );
};

export default CSRPage;
