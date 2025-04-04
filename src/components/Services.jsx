import React from 'react';

const Services = () => {
  return (
    <div className="flex items-center justify-center ">
      <div className=" mt-24 border-4 border-green-800 rounded-lg p-6 max-w-4xl w-full min-h-scree bg-blue-900 bg-opacity-10">
        <h1 className="text-3xl font-bold mb-4 text-orange-600">Our Services</h1>
        <p className="text-lg text-gray-700">
          KSR ELECTRICALS offers a wide range of services, including:
        </p>
        <ul className="list-disc list-inside text-lg text-gray-700">
          <li>Overhead Line Erection</li>
          <li>HT and LT Cable Laying</li>
          <li>Panel Erection</li>
          <li>Switchyard Erection</li>
          <li>Turnkey Projects for Power Transmission and Distribution</li>
        </ul>
        <p className="text-lg text-gray-700 mt-4">
          Our team of experts ensures timely execution, reliability, and client satisfaction 
          in every project we undertake.
        </p>
      </div>
    </div>
  );
};

export default Services;
