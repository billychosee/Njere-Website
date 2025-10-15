// components/DownloadAppSection.tsx

import React from 'react';

const DownloadAppSection: React.FC = () => {
  return (
    <section className="py-16 bg-white md:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center gap-12 lg:flex-row lg:justify-between lg:gap-16">
          {/* Mobile App Mockup */}
          <div className="flex items-center justify-center w-full lg:w-1/2">
            {/* Assuming '/mobile-app-screenshot.png' is the path to your mobile screenshot image */}
            <img
              src="/mobile-app-mockup.png"
              alt="Njere Mobile App Mockup"
              className="w-full max-w-md h-auto object-cover rounded-lg transition-transform duration-500 ease-in-out hover:scale-[1.02] mx-auto lg:mx-0"
            />
          </div>

          {/* Download App Text and Buttons */}
          <div className="w-full text-center lg:w-1/2 lg:text-left">
            <h2 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 md:text-4xl lg:text-5xl">
              Download Our App
            </h2>
            <p className="max-w-xl mx-auto mb-8 text-base text-gray-600 md:text-lg lg:mx-0">
              Available for students, parents, teachers, and management,
              bringing convenience and connectivity to your fingertips.
            </p>

            {/* App Store Buttons */}
            <div className="flex flex-col items-center space-y-3 lg:items-start lg:space-y-4">
              {/* Google Play Store Button */}
              <a
                href="https://play.google.com/store/search?q=njere+app&c=apps&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full max-w-[180px] sm:max-w-[200px] transition-transform duration-300 ease-in-out hover:scale-105"
              >
                <img
                  src="/google-play-badge.png"
                  alt="Download on Google Play"
                  className="w-full h-auto"
                />
              </a>

              {/* Apple App Store Button */}
              <a
                href="https://apps.apple.com/gh/app/njere/id6479717924"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full max-w-[180px] sm:max-w-[200px] transition-transform duration-300 ease-in-out hover:scale-105"
              >
                <img
                  src="/app-store-badge.png"
                  alt="Available on the App Store"
                  className="w-full h-auto"
                />
              </a>

              {/* Huawei AppGallery Button */}
              <a
                href="https://appgallery.huawei.com/search/njere?1760524775750"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full max-w-[180px] sm:max-w-[200px] transition-transform duration-300 ease-in-out hover:scale-105"
              >
                <img
                  src="/huawei-appgallery-badge.png"
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


