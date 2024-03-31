import React from 'react';

const Services = () => {
  return (
    <section id='services' className="text-center mt-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Services</h2>
      <div className="grid grid-cols-3 gap-4">
        {/* Add your services here */}
        <div className="p-4 border border-gray-300 rounded-md shadow-md">
          {/* Service 1 */}
        </div>
        <div className="p-4 border border-gray-300 rounded-md shadow-md">
          {/* Service 2 */}
        </div>
        <div className="p-4 border border-gray-300 rounded-md shadow-md">
          {/* Service 3 */}
        </div>
        {/* Add more services as needed */}
      </div>
    </section>
  );
};

export default Services;
