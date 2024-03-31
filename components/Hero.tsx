"use client"
import { useState, useEffect } from 'react';
import useUserData from '@/hooks/useUserData';
import React from 'react';
import axios from 'axios';

const Hero = () => {
  const { userData } = useUserData()
  return (
    <section className="">
      {userData && (
        <>
        <div className='flex items-center'>
          <div className='text-left pt-4 mr-4'>
            <h1 className="text-7xl font-bold text-gray-900 mb-4">{userData.about.name}</h1>
            <h2 className="text-lg text-gray-600 mb-8">{userData.about.title}</h2>
            <p>{userData.about.subTitle}</p>
          </div>
          <div>
            <img width={200} className='rounded-full' src={userData.about.avatar.url} alt="User Avatar" />
          </div>
        </div>

          
        </>
      )}

    </section>
  );
};

export default Hero;
