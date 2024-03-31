"use client"
import React from 'react';
import useUserData from '@/hooks/useUserData';

const Services = () => {
  const { userData } = useUserData();
  const services = userData ? userData.services : [];
  return (
    <section id='services' className="text-center mt-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Services</h2>
      <div className="grid grid-cols-3 gap-4">
        {services.map((service: any) => (
          <div key={service._id} className='p-4 border border-gray-300 rounded-md shadow-md'>
              <img src={service.image.url} alt="" />
              <h1>{service.name}</h1>
              <p>{service.desc}</p>
              <h2>{service.charge}</h2>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
