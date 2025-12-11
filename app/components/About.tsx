'use client';

import { Award, Briefcase, GraduationCap } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: Briefcase,
      title: '3+ Years',
      description: 'Professional Experience',
    },
    {
      icon: Award,
      title: '50+ Projects',
      description: 'MERN Stack Applications',
    },
    {
      icon: GraduationCap,
      title: 'Level 3 Co-op',
      description: 'Software Engineering @ McMaster',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
          About Me
        </h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mb-12"></div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className='text-justify'>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              I'm a Level 3 Co-op Software Engineering student at McMaster University with a strong foundation 
              in full-stack development. My experience spans frontend and backend development using React, TypeScript, 
              Node.js, Express.js, and MongoDB, with expertise in building scalable MERN stack applications.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              I specialize in creating responsive web applications with modern technologies. I'm proficient in quality 
              assurance, API integration, and cloud platform deployment. I'm committed to writing clean code, following 
              best practices, and leveraging agile development methodologies.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Experienced with AWS, Azure, GCP cloud platforms, Docker containerization, and Git version control. 
              Strong problem-solving and collaborative skills with hands-on experience in development workflows.
            </p>
          </div>

          <div className="grid gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-6 bg-gray-50 dark:bg-gray-700 rounded-lg hover:shadow-lg transition-shadow"
              >
                <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
                  <item.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
