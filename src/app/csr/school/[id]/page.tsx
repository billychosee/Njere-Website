'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { 
  MapPinIcon, 
  ComputerDesktopIcon, 
  BookOpenIcon, 
  BuildingOfficeIcon, 
  AcademicCapIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  UserGroupIcon,
  CurrencyDollarIcon,
  EnvelopeIcon,
  PhoneIcon
} from '@heroicons/react/24/outline';

// Define the primary and accent colors for a sleek, professional look
const PRIMARY_COLOR = '#00204f'; // Njere Blue
const ACCENT_COLOR = '#04baab'; // Njere Teal

// Sample school data (in a real app, this would come from an API)
const schoolData = {
  1: {
    name: 'Sunrise Primary School',
    location: 'Johannesburg, Gauteng',
    level: 'Primary',
    type: 'Rural',
    image: '/school1.jpg',
    about: 'Sunrise Primary is a community school serving 450 learners. Our focus is on literacy and digital skills, but we face resource shortages that affect delivery.',
    needs: {
      'ICT Equipment': 'Laptops, projectors, and tablets for digital learning',
      'Learning Resources': 'Textbooks for grades 1-7, reading materials',
      'Infrastructure': 'Classroom repairs, library renovation',
      'Fees Support': 'Scholarships for 20 vulnerable learners'
    },
    impact: 'Your support will help us improve digital learning access for over 450 learners and create a more engaging classroom environment.',
    sponsorshipOptions: [
      {
        name: 'ICT Pack',
        description: 'Sponsor laptops and Wi-Fi setup',
        amount: '$5,000',
        impact: 'Equip 3 classrooms with digital learning tools'
      },
      {
        name: 'Learning Pack',
        description: 'Fund textbooks for 100 learners',
        amount: '$2,500',
        impact: 'Provide essential learning materials for a full academic year'
      },
      {
        name: 'Infrastructure',
        description: 'Support classroom renovations',
        amount: '$10,000',
        impact: 'Renovate 2 classrooms and create a library space'
      }
    ],
    contact: {
      name: 'Mrs. Thandi Ndlovu',
      position: 'School Principal',
      email: 'principal@sunriseprimary.edu.za',
      phone: '+27 11 123 4567'
    }
  },
  2: {
    name: 'Mthatha High School',
    location: 'Mthatha, Eastern Cape',
    level: 'Secondary',
    type: 'Urban',
    image: '/school2.jpg',
    about: 'Mthatha High School is a public school with 800 students. We strive for academic excellence but lack adequate science and technology resources.',
    needs: {
      'Science Lab Equipment': 'Microscopes, lab tools, and chemicals',
      'Computer Lab': '30 computers for computer literacy classes',
      'Library Resources': 'Reference books and study materials',
      'Sports Equipment': 'Sports gear for physical education'
    },
    impact: 'Your support will enhance our science and technology programs, preparing students for higher education and future careers.',
    sponsorshipOptions: [
      {
        name: 'Science Lab Pack',
        description: 'Equip science laboratory',
        amount: '$7,500',
        impact: 'Provide hands-on science learning for 400 students'
      },
      {
        name: 'Computer Lab Pack',
        description: 'Fund 30 computers',
        amount: '$8,000',
        impact: 'Enable digital literacy classes for all students'
      },
      {
        name: 'Library Pack',
        description: 'Stock library with reference materials',
        amount: '$3,000',
        impact: 'Enhance research and study resources'
      }
    ],
    contact: {
      name: 'Mr. John Zulu',
      position: 'School Principal',
      email: 'principal@mthathahigh.edu.za',
      phone: '+27 47 123 4567'
    }
  },
  3: {
    name: 'Rural Hope Academy',
    location: 'Polokwane, Limpopo',
    level: 'Primary',
    type: 'Rural',
    image: '/school3.jpg',
    about: 'Rural Hope Academy serves 300 learners from surrounding farming communities. We are committed to providing quality education despite limited resources.',
    needs: {
      'Fees Support': 'Scholarships for 50 vulnerable learners',
      'Computer Lab': 'Basic computer setup for digital literacy',
      'Water System': 'Installation of water harvesting system',
      'Nutrition Program': 'Daily meals for underprivileged students'
    },
    impact: 'Your support will ensure that children from farming communities receive quality education and proper nutrition, breaking the cycle of poverty.',
    sponsorshipOptions: [
      {
        name: 'Fees Support Pack',
        description: 'Sponsor 10 students for a year',
        amount: '$1,500',
        impact: 'Provide education for 10 vulnerable learners'
      },
      {
        name: 'Computer Lab Pack',
        description: 'Basic computer setup',
        amount: '$4,000',
        impact: 'Introduce digital literacy to all students'
      },
      {
        name: 'Nutrition Pack',
        description: 'Daily meals for 50 students',
        amount: '$2,000',
        impact: 'Ensure proper nutrition for better learning outcomes'
      }
    ],
    contact: {
      name: 'Ms. Sarah Malan',
      position: 'School Principal',
      email: 'principal@ruralhope.edu.za',
      phone: '+27 15 123 4567'
    }
  }
};

const SchoolProfilePage = () => {
  const params = useParams();
  const schoolId = params.id as string;
  const [selectedSponsorship, setSelectedSponsorship] = useState<string | null>(null);
  
  // Convert string ID to number to match the keys in schoolData
  const schoolIdNum = parseInt(schoolId, 10);
  
  // Get school data based on ID
  const school = schoolData[schoolIdNum as keyof typeof schoolData];
  
  if (!school) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="text-center">
          <h1 className="mb-4 text-2xl font-bold text-gray-900">School Not Found</h1>
          <Link href="/csr" className="text-blue-600 hover:underline">
            Back to CSR Connect
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* School Header */}
      <section className="relative">
        <div className="relative h-64 md:h-80">
          <Image
            src={school.image}
            alt={school.name}
            fill
            style={{ objectFit: 'cover' }}
          />
          <div 
            className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"
          ></div>
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <div className="container mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="mb-2 text-3xl font-bold md:text-4xl">{school.name}</h1>
                <div className="flex flex-wrap items-center gap-4">
                  <div className="flex items-center">
                    <MapPinIcon className="w-5 h-5 mr-1" />
                    <span>{school.location}</span>
                  </div>
                  <div className="flex gap-2">
                    <span 
                      className="px-3 py-1 text-sm rounded-full"
                      style={{ backgroundColor: ACCENT_COLOR }}
                    >
                      {school.level}
                    </span>
                    <span 
                      className="px-3 py-1 text-sm rounded-full"
                      style={{ backgroundColor: PRIMARY_COLOR }}
                    >
                      {school.type}
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* About the School */}
      <section className="py-12 bg-gray-50">
        <div className="container px-4 mx-auto md:px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 
                className="mb-6 text-2xl font-bold text-gray-900"
                style={{ color: PRIMARY_COLOR }}
              >
                About the School
              </h2>
              <p className="text-lg text-gray-700">{school.about}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Areas of Need */}
      <section className="py-12 bg-white">
        <div className="container px-4 mx-auto md:px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 
                className="mb-6 text-2xl font-bold text-gray-900"
                style={{ color: PRIMARY_COLOR }}
              >
                Areas of Need
              </h2>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {Object.entries(school.needs).map(([need, description], index) => (
                  <div key={index} className="flex items-start p-4 rounded-lg bg-gray-50">
                    <div 
                      className="flex items-center justify-center flex-shrink-0 w-10 h-10 mr-4 text-white rounded-full"
                      style={{ backgroundColor: ACCENT_COLOR }}
                    >
                      {need.includes('ICT') || need.includes('Computer') ? (
                        <ComputerDesktopIcon className="w-5 h-5" />
                      ) : need.includes('Learning') || need.includes('Library') || need.includes('Science') ? (
                        <BookOpenIcon className="w-5 h-5" />
                      ) : need.includes('Infrastructure') || need.includes('Water') ? (
                        <BuildingOfficeIcon className="w-5 h-5" />
                      ) : need.includes('Fees') || need.includes('Nutrition') ? (
                        <CurrencyDollarIcon className="w-5 h-5" />
                      ) : (
                        <AcademicCapIcon className="w-5 h-5" />
                      )}
                    </div>
                    <div>
                      <h3 className="mb-1 font-semibold text-gray-900">{need}</h3>
                      <p className="text-gray-600">{description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Statement */}
      <section className="py-12 bg-gray-50">
        <div className="container px-4 mx-auto md:px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl"
              style={{ backgroundColor: PRIMARY_COLOR }}
            >
              <h2 className="mb-4 text-2xl font-bold text-white">Impact Statement</h2>
              <p className="text-lg text-white/90">{school.impact}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sponsorship Options */}
      <section className="py-12 bg-white">
        <div className="container px-4 mx-auto md:px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 
                className="mb-6 text-2xl font-bold text-gray-900"
                style={{ color: PRIMARY_COLOR }}
              >
                Sponsorship Options
              </h2>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                {school.sponsorshipOptions.map((option, index) => (
                  <div 
                    key={index} 
                    className={`p-6 border-2 rounded-xl cursor-pointer transition-all ${
                      selectedSponsorship === option.name 
                        ? 'border-blue-500 shadow-lg' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => setSelectedSponsorship(option.name)}
                  >
                    <h3 className="mb-2 text-xl font-bold text-gray-900">{option.name}</h3>
                    <p className="mb-4 text-gray-600">{option.description}</p>
                    <div className="mb-4">
                      <span 
                        className="text-2xl font-bold"
                        style={{ color: ACCENT_COLOR }}
                      >
                        {option.amount}
                      </span>
                    </div>
                    <p className="mb-4 text-sm text-gray-600">{option.impact}</p>
                    <button
                      className="w-full py-2 font-medium text-white rounded-lg cursor-pointer"
                      style={{ backgroundColor: PRIMARY_COLOR }}
                    >
                      Select This Option
                    </button>
                  </div>
                ))}
              </div>
              <div className="mt-6 text-center">
                <p className="mb-4 text-gray-600">Or contribute a custom amount</p>
                <button
                  className="px-6 py-2 font-medium text-white rounded-lg cursor-pointer"
                  style={{ backgroundColor: ACCENT_COLOR }}
                >
                  Custom Contribution
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="py-12 bg-gray-50">
        <div className="container px-4 mx-auto md:px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 
                className="mb-6 text-2xl font-bold text-gray-900"
                style={{ color: PRIMARY_COLOR }}
              >
                Ready to Make a Difference?
              </h2>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <button
                  className="flex items-center justify-center px-8 py-3 font-bold text-white transition-all rounded-lg cursor-pointer"
                  style={{ backgroundColor: PRIMARY_COLOR }}
                >
                  Sponsor this School
                  <ArrowRightIcon className="w-5 h-5 ml-2" />
                </button>
                <button
                  className="flex items-center justify-center px-8 py-3 font-medium text-white transition-all rounded-lg cursor-pointer"
                  style={{ backgroundColor: ACCENT_COLOR }}
                >
                  Contact the School
                  <EnvelopeIcon className="w-5 h-5 ml-2" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Transparency Section */}
      <section className="py-12 bg-white">
        <div className="container px-4 mx-auto md:px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="p-8 bg-gray-50 rounded-2xl"
            >
              <h2 
                className="mb-4 text-2xl font-bold text-gray-900"
                style={{ color: PRIMARY_COLOR }}
              >
                Transparency & Accountability
              </h2>
              <p className="mb-4 text-gray-700">
                All sponsorships are tracked through Njere CSR Connect to ensure accountability. Reports and updates will be shared with sponsors.
              </p>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                <div className="flex items-center">
                  <CheckCircleIcon className="w-5 h-5 mr-2 text-green-500" />
                  <span className="text-gray-700">Regular progress reports</span>
                </div>
                <div className="flex items-center">
                  <CheckCircleIcon className="w-5 h-5 mr-2 text-green-500" />
                  <span className="text-gray-700">Financial transparency</span>
                </div>
                <div className="flex items-center">
                  <CheckCircleIcon className="w-5 h-5 mr-2 text-green-500" />
                  <span className="text-gray-700">Impact measurement</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* School Contact Information */}
      <section className="py-12 bg-gray-50">
        <div className="container px-4 mx-auto md:px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="p-8 bg-white shadow-lg rounded-2xl"
            >
              <h2 
                className="mb-6 text-2xl font-bold text-gray-900"
                style={{ color: PRIMARY_COLOR }}
              >
                Contact Information
              </h2>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">School Representative</h3>
                  <p className="text-gray-700">{school.contact.name}</p>
                  <p className="text-gray-600">{school.contact.position}</p>
                </div>
                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">Contact Details</h3>
                  <div className="flex items-center mb-2 text-gray-700">
                    <EnvelopeIcon className="w-4 h-4 mr-2" />
                    <a href={`mailto:${school.contact.email}`} className="hover:underline">
                      {school.contact.email}
                    </a>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <PhoneIcon className="w-4 h-4 mr-2" />
                    <a href={`tel:${school.contact.phone}`} className="hover:underline">
                      {school.contact.phone}
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Back to CSR Connect */}
      <section className="py-12 bg-white">
        <div className="container px-4 mx-auto md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Link 
              href="/csr"
              className="inline-flex items-center font-medium text-blue-600 hover:underline"
            >
              <ArrowRightIcon className="w-5 h-5 mr-2 transform rotate-180" />
              Back to CSR Connect
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SchoolProfilePage;