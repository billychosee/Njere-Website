'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import {
  AcademicCapIcon,
  UserGroupIcon,
  ClipboardDocumentCheckIcon,
  ShieldCheckIcon,
  DocumentTextIcon,
  ComputerDesktopIcon,
  CurrencyDollarIcon,
  CogIcon,
  TruckIcon,
  ArrowRightIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';
import Footer from '../components/Footer';

const PRIMARY_COLOR = '#00204f'; // Njere Blue
const ACCENT_COLOR = '#04baab'; // Njere Teal

const modules = [
  {
    name: 'Academics',
    description: 'Comprehensive academic management system for tracking student progress, grades, and curriculum delivery.',
    icon: AcademicCapIcon,
    features: ['Grade Management', 'Curriculum Tracking', 'Student Progress Reports'],
    href: '/modules/academics'
  },
  {
    name: 'Alumni',
    description: 'Connect with former students and build lasting relationships through our alumni management platform.',
    icon: UserGroupIcon,
    features: ['Alumni Directory', 'Event Management', 'Donation Tracking'],
    href: '/modules/alumni'
  },
  {
    name: 'Attendance',
    description: 'Automated attendance tracking system with real-time monitoring and comprehensive reporting.',
    icon: ClipboardDocumentCheckIcon,
    features: ['Biometric Integration', 'Real-time Tracking', 'Custom Reports'],
    href: '/modules/attendance'
  },
  {
    name: 'Behaviour',
    description: 'Monitor and manage student behavior with incident tracking and positive reinforcement systems.',
    icon: ShieldCheckIcon,
    features: ['Incident Reports', 'Behavior Analytics', 'Parent Notifications'],
    href: '/modules/behaviour'
  },
  {
    name: 'Certificates',
    description: 'Generate and manage certificates for achievements, completion, and qualifications.',
    icon: DocumentTextIcon,
    features: ['Template Library', 'Bulk Generation', 'Digital Signatures'],
    href: '/modules/certificates'
  },
  {
    name: 'Communication',
    description: 'Unified communication platform connecting teachers, students, and parents seamlessly.',
    icon: ComputerDesktopIcon,
    features: ['SMS Integration', 'Email Campaigns', 'Parent Portal'],
    href: '/modules/communication'
  },
  {
    name: 'Downloads',
    description: 'Centralized resource library for educational materials, forms, and documents.',
    icon: DocumentTextIcon,
    features: ['Resource Library', 'Version Control', 'Access Permissions'],
    href: '/modules/downloads'
  },
  {
    name: 'Exams',
    description: 'Complete examination management from scheduling to results publication.',
    icon: AcademicCapIcon,
    features: ['Exam Scheduling', 'Question Banks', 'Result Processing'],
    href: '/modules/exams'
  },
  {
    name: 'Finance',
    description: 'Comprehensive financial management including fees, payments, and budgeting.',
    icon: CurrencyDollarIcon,
    features: ['Fee Management', 'Payment Processing', 'Financial Reports'],
    href: '/modules/finance'
  },
  {
    name: 'CMS',
    description: 'Content Management System for creating and managing website content and resources.',
    icon: CogIcon,
    features: ['Content Editor', 'Media Library', 'SEO Tools'],
    href: '/modules/cms'
  },
  {
    name: 'FrontOffice',
    description: 'Streamline administrative processes with automated visitor management and inquiries.',
    icon: UserGroupIcon,
    features: ['Visitor Management', 'Appointment Scheduling', 'Inquiry Tracking'],
    href: '/modules/frontoffice'
  },
  {
    name: 'Homework',
    description: 'Digital homework assignment and submission platform with grading capabilities.',
    icon: DocumentTextIcon,
    features: ['Assignment Creation', 'Online Submission', 'Automated Grading'],
    href: '/modules/homework'
  },
  {
    name: 'Hostel',
    description: 'Complete hostel management system for accommodation, meals, and resident welfare.',
    icon: UserGroupIcon,
    features: ['Room Allocation', 'Meal Management', 'Security Monitoring'],
    href: '/modules/hostel'
  },
  {
    name: 'HR',
    description: 'Human Resources management for staff recruitment, performance, and development.',
    icon: UserGroupIcon,
    features: ['Staff Management', 'Payroll Processing', 'Performance Reviews'],
    href: '/modules/hr'
  },
  {
    name: 'Inventory',
    description: 'Track and manage school inventory including equipment, supplies, and assets.',
    icon: CogIcon,
    features: ['Asset Tracking', 'Stock Management', 'Maintenance Scheduling'],
    href: '/modules/inventory'
  },
  {
    name: 'Lessons',
    description: 'Interactive lesson planning and delivery platform with multimedia support.',
    icon: AcademicCapIcon,
    features: ['Lesson Planning', 'Multimedia Content', 'Progress Tracking'],
    href: '/modules/lessons'
  },
  {
    name: 'Library',
    description: 'Digital library management with book tracking, reservations, and online resources.',
    icon: DocumentTextIcon,
    features: ['Book Catalog', 'Online Reservations', 'Digital Resources'],
    href: '/modules/library'
  },
  {
    name: 'Branches',
    description: 'Multi-branch management system for schools with multiple campuses.',
    icon: UserGroupIcon,
    features: ['Branch Management', 'Inter-branch Transfers', 'Unified Reporting'],
    href: '/modules/branches'
  },
  {
    name: 'Assessment',
    description: 'Advanced assessment tools for continuous evaluation and progress monitoring.',
    icon: ClipboardDocumentCheckIcon,
    features: ['Custom Assessments', 'Analytics Dashboard', 'Progress Reports'],
    href: '/modules/assessment'
  },
  {
    name: 'Reports',
    description: 'Comprehensive reporting system with customizable dashboards and analytics.',
    icon: DocumentTextIcon,
    features: ['Custom Reports', 'Data Visualization', 'Export Options'],
    href: '/modules/reports'
  },
  {
    name: 'Students',
    description: 'Complete student information system with profiles, enrollment, and academic records.',
    icon: UserGroupIcon,
    features: ['Student Profiles', 'Enrollment Management', 'Academic Records'],
    href: '/modules/students'
  },
  {
    name: 'Syllabus',
    description: 'Curriculum management and syllabus planning with learning objective tracking.',
    icon: AcademicCapIcon,
    features: ['Curriculum Planning', 'Learning Objectives', 'Progress Mapping'],
    href: '/modules/syllabus'
  },
  {
    name: 'Transport',
    description: 'School transport management with route planning, vehicle tracking, and safety monitoring.',
    icon: TruckIcon,
    features: ['Route Planning', 'GPS Tracking', 'Safety Monitoring'],
    href: '/modules/transport'
  }
];

const ModulesPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className="relative pt-40 pb-20 overflow-hidden text-white"
        style={{ backgroundColor: PRIMARY_COLOR }}
      >
        <div
          className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10 blur-3xl"
          style={{ backgroundColor: ACCENT_COLOR }}
        />
        <div
          className="absolute bottom-0 left-0 rounded-full w-96 h-96 opacity-10 blur-3xl"
          style={{ backgroundColor: ACCENT_COLOR }}
        />
        <div className="container relative z-10 px-4 mx-auto md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              className="mb-4 text-4xl font-extrabold md:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Our Modules
            </motion.h1>
            <motion.p
              className="mb-8 text-xl text-white/90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Comprehensive educational management solutions designed to streamline school operations and enhance learning experiences.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Modules Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 mx-auto md:px-6">
          <div className="grid grid-cols-1 gap-8 mx-auto max-w-7xl md:grid-cols-2 lg:grid-cols-3">
            {modules.map((module, index) => (
              <motion.div
                key={module.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="overflow-hidden transition-shadow bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div
                      className="flex items-center justify-center flex-shrink-0 w-12 h-12 mr-4 text-white rounded-xl"
                      style={{ backgroundColor: ACCENT_COLOR }}
                    >
                      <module.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{module.name}</h3>
                  </div>

                  <p className="mb-4 text-gray-600">{module.description}</p>

                  <div className="mb-6">
                    <h4 className="mb-2 font-semibold text-gray-900">Key Features:</h4>
                    <ul className="space-y-1">
                      {module.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircleIcon className="w-4 h-4 mr-2 text-green-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href={module.href}
                    className="flex items-center justify-center w-full py-3 font-medium text-white transition-all rounded-full cursor-pointer hover:opacity-90"
                    style={{ backgroundColor: PRIMARY_COLOR }}
                  >
                    View Details
                    <ArrowRightIcon className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 mx-auto md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2
                className="mb-6 text-3xl font-bold text-gray-900"
                style={{ color: PRIMARY_COLOR }}
              >
                Ready to Transform Your School?
              </h2>
              <p className="mb-8 text-lg text-gray-600">
                Experience the power of integrated educational management with our comprehensive module suite.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Link
                  href="/contact-us"
                  className="flex items-center justify-center px-8 py-4 font-bold text-white transition-all rounded-full cursor-pointer hover:opacity-90"
                  style={{ backgroundColor: PRIMARY_COLOR }}
                >
                  Get Started Today
                  <ArrowRightIcon className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  href="/about-us"
                  className="px-8 py-4 font-medium text-gray-900 transition-all border-2 border-gray-300 rounded-full cursor-pointer hover:border-gray-400"
                >
                  Learn More About Us
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="relative">
        <Footer />
      </div>
    </div>
  );
};

export default ModulesPage;