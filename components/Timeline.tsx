import React from 'react';

const Timeline = () => {
  return (
    <section className="text-center mt-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Timeline</h2>
      {/* Divided into Education and Experience */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Education</h3>
          {/* Add education timeline here */}
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Experience</h3>
          {/* Add experience timeline here */}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
