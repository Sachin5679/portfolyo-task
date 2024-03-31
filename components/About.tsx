"use client"
import React from 'react';
import useUserData from '@/hooks/useUserData';

const About = () => {
  const { userData } = useUserData();
  return (
    <section id='about' className="mt-12 p-5 h-screen w-screen flex justify-between">
      <div className='w-1/2 flex items-center border-r border-blue-700 pr-8'>
        {userData && (
          <div>
            <p className="text-2xl text-wrap text-gray-600 mb-8 ml-8">
              {userData.about.description}
            </p>
          </div>
        )}
      </div>

      <div className="w-1/2 flex items-center justify-center">
        <h1 className="text-7xl font-bold text-blue-700">ABOUT</h1>
      </div>
    </section>
  );
};

export default About;
