import React from 'react';
import { FaSchool, FaUniversity, FaChalkboardTeacher } from 'react-icons/fa';
import { MdOutlineCastForEducation } from 'react-icons/md';

// Define the type for the institution data
interface Institution {
  title: string;
  description: string;
  color: string;
  icon: React.ReactNode;
}

// Define the component using React.FC (Function Component)
const ERPTargetInstitutions: React.FC = () => {
  const institutions: Institution[] = [
    {
      title: 'Schools',
      description:
        'Manage admissions, student records, attendance, grades, curriculum, and parent communication.',
      color: 'bg-teal-500',
      icon: <FaSchool className="w-8 h-8" />,
    },
    {
      title: 'Universities',
      description:
        'Streamline course registration, faculty management, financial aid, research administration, and alumni relations.',
      color: 'bg-indigo-500',
      icon: <FaUniversity className="w-8 h-8" />,
    },
    {
      title: 'Learning Institutions',
      description:
        'Optimize course delivery, track learner progress, manage assessments, and provide certificates.',
      color: 'bg-amber-500',
      icon: <MdOutlineCastForEducation className="w-8 h-8" />,
    },
    {
      title: 'Corporate Training Departments',
      description:
        'Deliver in-house training programs, track employee progress, and manage compliance certifications.',
      color: 'bg-rose-500',
      icon: <FaChalkboardTeacher className="w-8 h-8" />,
    },
  ];

  return (
    <section className="py-16 bg-[#00204f] md:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-xl mx-auto mb-16 text-center">
          <p className="flex items-center justify-center mb-2 text-sm font-semibold tracking-widest text-[#0296AD] uppercase">
            <span className="inline-block w-2 h-2 mr-2 bg-[#0296AD] rounded-full"></span>
            GLOBAL REACH
          </p>
          <h2 className="text-2xl font-extrabold leading-tight text-white md:text-5xl">
            A Versatile Solution <br className="hidden sm:inline" />
            for Every Institution
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Our powerful ERP is built to scale, adapting seamlessly to the
            unique needs of diverse educational and corporate environments.
          </p>
        </div>

        {/* Institutions Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {institutions.map((item) => (
            <div
              key={item.title}
              className="relative flex flex-col items-center p-8 overflow-hidden transition-all duration-700 ease-out bg-gray-800 border border-gray-700 shadow-xl group rounded-xl"
              style={{ perspective: '1000px' }}
            >
              <div
                className={`w-full h-full p-0 flex flex-col items-center text-center transition-transform duration-700 ease-in-out group-hover:rotate-x-3 group-hover:rotate-y-3 group-hover:scale-[1.03] group-hover:shadow-[0_20px_50px_rgba(2,_150,_173,_0.5)]`}
              >
                {/* Animated Accent Circle */}
                <div
                  className={`flex items-center justify-center w-16 h-16 rounded-full text-white mb-6 transform transition-all duration-700 ease-out ${item.color} group-hover:scale-110 group-hover:ring-4 ring-offset-4 ring-gray-900 ${item.color.replace(
                    'bg-',
                    'ring-',
                  )}`}
                >
                  {item.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-3 transition duration-500 ease-out group-hover:text-[#0296AD]">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-base text-gray-400">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ERPTargetInstitutions;
