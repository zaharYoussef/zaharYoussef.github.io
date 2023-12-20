// pages/WorkExperience.js

import React from 'react';
import ExperienceEntry from '@/components/ExperienceEntry';

const WorkExperience = () => {
  const experiences = [
    {
      position: 'Software Engineer',
      company: 'TechCo Ltd.',
      startDate: 'Jan 2020',
      location: 'City, Country',
      description: 'Developed scalable web applications using React and Node.js.',
      skills: ['React', 'Node.js', 'JavaScript', 'HTML', 'CSS'],
    },
    {
      position: 'Frontend Developer',
      company: 'WebSolutions Inc.',
      startDate: 'May 2018',
      endDate: 'Nov 2019',
      location: 'Another City, Another Country',
      description: 'Designed and implemented user interfaces for various clients.',
      skills: ['React', 'JavaScript', 'HTML', 'CSS', 'UI/UX'],
    },
    {
        position: 'Frontend Developer',
        company: 'WebSolutions Inc.',
        startDate: 'May 2018',
        endDate: 'Nov 2019',
        location: 'Another City, Another Country',
        description: 'Designed and implemented user interfaces for various clients.',
        skills: ['React', 'JavaScript', 'HTML', 'CSS', 'UI/UX'],
      },
  ];

  return (
    <div>
      <h2>Work Experience</h2>
      {experiences.map((experience, index) => (
        <ExperienceEntry key={index} {...experience} />
      ))}
    </div>
  );
};

export default WorkExperience;
