// components/DownloadAppSection.tsx

import React from 'react';

const DownloadAppSection: React.FC = () => {
  return (
    <section className="py-16 bg-white md:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center gap-16 lg:flex-row lg:justify-between">
          {/* Left Column: Mobile App Mockup */}
          <div className="flex items-center justify-center w-full lg:w-1/2">
            {/* Assuming '/mobile-app-screenshot.png' is the path to your mobile screenshot image */}
            <img
              src="/mobile-app-mockup.png"
              alt="Njere Mobile App Mockup"
              className="w-full h-full object-cover rounded-lg transition-transform duration-500 ease-in-out hover:scale-[1.02]"
            />
          </div>

          {/* Right Column: Download App Text and Buttons */}
          <div className="w-full text-center lg:w-1/2 lg:text-left">
            <h2 className="mb-4 text-4xl font-extrabold leading-tight text-gray-900 md:text-5xl">
              Download Our App
            </h2>
            <p className="max-w-xl mx-auto mb-8 text-lg text-gray-600 lg:mx-0">
              Available for students, parents, teachers, and management,
              bringing convenience and connectivity to your fingertips.
            </p>

            {/* App Store Buttons */}
            <div className="flex flex-col items-center space-y-4 lg:items-start">
              {/* Google Play Store Button */}
              <a
                href="https://play.google.com/store/apps/details?id=your.app.id" // Replace with your actual Play Store link
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-4/5 md:w-auto max-w-[200px] transition-transform duration-300 ease-in-out hover:scale-105"
              >
                <img
                  src="/google-play-badge.png" // Make sure you have this SVG or PNG in your public folder
                  alt="Download on Google Play"
                  className="w-full h-auto"
                />
              </a>

              {/* Apple App Store Button */}
              <a
                href="https://apps.apple.com/us/app/your-app-name/idYOURAPPID" // Replace with your actual App Store link
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-4/5 md:w-auto max-w-[200px] transition-transform duration-300 ease-in-out hover:scale-105"
              >
                <img
                  src="/app-store-badge.png" // Make sure you have this SVG or PNG in your public folder
                  alt="Available on the App Store"
                  className="w-full h-auto"
                />
              </a>

              {/* Huawei AppGallery Button */}
              <a
                href="https://appgallery.huawei.com/app/your.app.id" // Replace with your actual AppGallery link
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-4/5 md:w-auto max-w-[200px] transition-transform duration-300 ease-in-out hover:scale-105"
              >
                <img
                  src="/huawei-appgallery-badge.png" // Make sure you have this SVG or PNG in your public folder
                  alt="Explore it on AppGallery"
                  className="w-full h-auto"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadAppSection;
