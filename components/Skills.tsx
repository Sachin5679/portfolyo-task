"use client"
import React from 'react';
import useUserData from '@/hooks/useUserData';

const Skills = () => {
  const { userData } = useUserData();
  const skills = userData ? userData.skills : [];

  return (
    <section className="text-center mt-12">
      {/* <h2 className="text-2xl text-left font-bold text-blue-700 mb-4">Skills</h2> */}
      <div className='mt-2 grid grid-cols-5 gap-4'>
                {skills.map((skill: any) => (
                    <div key={skill.id} className="p-4 border bg-gray-200 rounded-md shadow-md">
                      <img width={50} src={skill.image.url} alt={skill.name} />
                    </div>
                ))}
      </div>
    </section>
  );
};

export default Skills;
