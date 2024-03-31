"use client"
import React from 'react';
import useUserData from '@/hooks/useUserData';
import Skills from './Skills';

const About = () => {
  const { userData } = useUserData();
  return (
    <section id='about' className="p-5 h-screen w-screen flex ">
      <div className='w-1/2 flex items-center justify-center mt-4'>
        {/* <h1 className='text-blue-700 text-7xl'>ABOUT</h1> */}
        {userData && (
          <div>
            <p className="text-3xl text-wrap text-gray-600 mt-8 mb-8 ml-8">
              {userData.about.description}
            </p>
          </div>
        )}
      </div>

      {/* <div className="w-1 bg-blue-700"></div> */}

      <div className="w-1/2 flex items-center justify-center">
        <Skills />
      </div>
    </section>
  );
};

export default About;
