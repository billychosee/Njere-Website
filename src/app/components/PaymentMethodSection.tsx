// components/PaymentMethodSection.tsx
import React from 'react';

const PaymentMethodSection = () => {

  return (
    <section className="relative py-24 overflow-hidden md:py-36 bg-gray-50">
      {/* Background Image Container (Darkened background of children using computers) */}
      <div
        className="absolute inset-0 bg-center bg-cover"
        // IMPORTANT: Replace this path with your dark background image
        style={{
          backgroundImage: "url('/payment-background-children.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Dark Overlay to make text pop */}
        <div className="absolute inset-0 bg-[#003769] opacity-60"></div>
      </div>

      {/* Content Container */}
      <div className="relative px-4 mx-auto text-center text-white max-w-7xl sm:px-6 lg:px-8">
        {/* Title Section */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-extrabold tracking-tight md:text-4xl">
  Effortless Payments, Anywhere, Anytime
</h2>
          <p className="mt-4 text-lg text-gray-200">
            Our integrated payment gateway ensures secure, seamless transactions for school fees, fines, and other financial operations. With support for multiple payment methods including mobile money, cards, and bank transfers, Njere makes it easy for parents and administrators to handle payments from anywhere in the world.
          </p>
        </div>

        {/* *** IMAGE INSIDE A WHITE CARD *** */}
        <div className="max-w-5xl mx-auto mt-12 sm:mt-16">
          {/* This DIV acts as the white card with shadow and rounded corners */}
          <div className="p-4 shadow-2xl rounded-xl sm:p-8">
            {/* The image (your payment graphic) is placed inside the white card */}
            <img
              src="/payments-proccess.jpg"
              alt="Njere Integrated Payment Process via Smapay"
              className="object-contain w-full h-auto rounded-xl"
            />
          </div>
        </div>
        {/* ********************************* */}
      </div>
    </section>
  );
};

export default PaymentMethodSection;