'use client';

import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Briefcase, Award, GraduationCap } from 'lucide-react';

const highlights = [
  { icon: Briefcase, title: '3+ Years', description: 'Professional Experience' },
  { icon: Award, title: '50+ Projects', description: 'MERN Stack Applications' },
  { icon: GraduationCap, title: 'Level 3 Co-op', description: 'Software Engineering @ McMaster' },
];

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl font-bold mb-8 text-center">About Me</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-6 text-justify">
          I'm a Level 3 Co-op Software Engineering student at McMaster University with a strong foundation in full-stack development.
          My experience spans frontend and backend development using React, TypeScript, Node.js, Express.js, and MongoDB.
        </p>
        <p className="text-gray-600 dark:text-gray-300 mb-6 text-justify">
          I specialize in creating responsive web applications with modern technologies. I'm proficient in quality assurance, API integration,
          and cloud platform deployment. I follow best practices and leverage agile methodologies.
        </p>
        <p className="text-gray-600 dark:text-gray-300 mb-12 text-justify">
          Experienced with AWS, Azure, GCP, Docker, and Git. Strong problem-solving and collaborative skills with hands-on experience
          in real-world development workflows.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((item, i) => (
            <div key={i} className="flex items-start space-x-4 p-6 bg-gray-50 dark:bg-gray-700 rounded-lg hover:shadow-lg transition-shadow">
              <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
                <item.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
