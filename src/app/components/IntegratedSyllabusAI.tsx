import React from 'react';

const IntegratedSyllabusAI: React.FC = () => {
  return (
    <section className="py-16 bg-white md:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-12 md:flex-row">
          {/* Image with Floating Elements */}
          <div className="relative flex items-center justify-center w-full max-w-md md:w-1/2">
            <img
              src="/black-girl.png"
              alt="Njere Integrated Syllabus Management and AI Generator"
              className="w-full h-full object-cover rounded-full transition-transform duration-500 ease-in-out hover:scale-[1.02]"
            />

            <div className="absolute w-12 h-12 bg-orange-500 rounded-full top-10 left-10 opacity-60 animate-float-one"></div>
            <div className="absolute w-16 h-16 border-4 rounded-full bottom-10 right-10 border-cyan-500 opacity-60 animate-float-two"></div>
            <div className="absolute w-8 h-8 bg-red-400 rounded-full top-1/3 right-5 opacity-60 animate-float-three"></div>

            <div className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 transform transition-transform duration-500 ease-in-out hover:scale-110 z-20">
              <img src="/ai_chip_icon.png" alt="AI Chip" className="w-full" />
            </div>
          </div>

          {/* Text Content */}
          <div className="flex flex-col items-center w-full max-w-4xl space-y-4 text-center md:w-1/2 md:text-left md:items-start">
            <p className="flex items-center justify-center mb-2 text-sm font-semibold tracking-widest text-[#0296AD] uppercase">
              <span className="inline-block w-2 h-2 mr-2 bg-[#0296AD] rounded-full"></span>
              Smart Syllabus Tools
            </p>
            <h2 className="mb-4 text-3xl font-extrabold leading-snug text-gray-900 md:text-4xl">
              Integrated Syllabus <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0296AD] to-blue-600">
                AI Generator
              </span>
            </h2>
            <p className="max-w-3xl text-base text-gray-600">
              Njere integrates with educational boards to provide a{' '}
              <strong className="text-gray-800">
                fast and efficient syllabus management module
              </strong>
              . Use AI to quickly generate lesson plans, scheme books, and
              assessments.
            </p>
            <p className="max-w-3xl text-base text-gray-600">
              Teachers can save time on repetitive tasks, focus more on
              interactive learning, and leverage automated analytics to track
              student progress.
            </p>
            <ul className="max-w-3xl space-y-2 text-center md:text-left">
              {[
                'Syllabus Learning Activities',
                'Lesson Plan & Scheme Book Generation',
                'Question Bank & Assessments',
                'Class Reports',
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-center justify-center text-base text-gray-700 md:justify-start"
                >
                  <svg
                    className="flex-shrink-0 w-5 h-5 mr-2 text-green-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4"
                    />
                  </svg>
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
            <div className="flex justify-center md:justify-start">
              <button className="px-6 py-3 bg-[#0296AD] text-white font-bold rounded-full shadow-lg hover:bg-gray-700 transition duration-300 ease-in-out transform hover:-translate-y-1 cursor-pointer">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegratedSyllabusAI;
