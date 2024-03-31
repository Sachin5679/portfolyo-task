"use client"
import useUserData from '@/hooks/useUserData';
import React from 'react';

const Hero = () => {
  const { userData } = useUserData()
  const socialHandles = userData ? userData.social_handles : [];
  return (
    <section className="w-screen h-screen p-2">
      {userData && (
        <>
          <div className='flex items-center justify-center'>
            <div className='text-left pt-4 mr-4'>
              <h1 className="text-7xl font-bold text-blue-700 mb-4">{userData.about.name}</h1>
              <h2 className="text-4xl text-gray-600 mb-8">{userData.about.title}</h2>
              <p>{userData.about.subTitle}</p>
              <div className='flex mt-2'>
                {socialHandles.map((handle: any) => (
                    <div className='m-2 hover:outline hover:rounded-full hover:p-1 hover:shadow-2xl transition duration-300'>
                      <a key={handle._id} href={handle.url} target="_blank" rel="noopener noreferrer">
                        <img width={50} src={handle.image.url} alt={handle.platform} />
                      </a>
                    </div>
                ))}
              </div>

            </div>
            <div className='ml-4'>
              <img width={350} className='rounded-full' src={userData.about.avatar.url} alt={userData.about.alternateAvatars.url} />
            </div>
          </div>
        </>
      )}

    </section>
  );
};

export default Hero;
