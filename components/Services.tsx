"use client"
import React from 'react';
import useUserData from '@/hooks/useUserData';

const Services = () => {
  const { userData } = useUserData();
  const services = userData ? userData.services : [];
  return (
    <section id='services' className="text-center mt-12">
      <h2 className="text-7xl font-black text-blue-800 mb-4">SERVICES</h2>
      <div className="grid grid-cols-3 gap-4">
        {services.map((service: any) => (
          <div key={service._id} className='p-4 border border-gray-300 rounded-md shadow-md'>
            <img className='h-3/4' src={service.image.url} alt="" />
            <div className='flex justify-between items-center mb-2'>
              <h1 className='text-2xl text-left font-bold text-blue-700'>{service.name}</h1>
              <h2 className='font-bold text-right bg-blue-700 text-white p-2 m-2 rounded-lg'>{service.charge}</h2>
            </div>
            <p className='text-left'>{service.desc}</p>
           </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
