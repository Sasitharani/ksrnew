import React from 'react';

const About = () => {
  return (
    <div className="flex items-center justify-center ">
            <div className=" mt-24 border-4 border-green-800 rounded-lg p-6 max-w-4xl w-full  bg-blue-900 bg-opacity-10">
        <h1 className="text-3xl font-bold mb-4 text-orange-600">About Us</h1>
        <p className="text-lg text-gray-700">
          KSR ELECTRICALS has been a trusted name in the energy industry for years. 
          We are a TNEB Class 1 contractor specializing in power transmission, distribution, 
          cabling, and electrification. Our commitment to quality, safety, and client satisfaction 
          has made us a leader in the field. With a focus on innovation and sustainability, 
          we deliver turnkey solutions for projects of all sizes.
        </p>
      </div>
    </div>
  );
};

export default About;
