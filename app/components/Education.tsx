'use client';

import { GraduationCap, Calendar, MapPin } from 'lucide-react';

export default function Education() {
  const education = [
    {
      degree: 'Bachelor of Technology in Software Engineering',
      school: 'McMaster University',
      duration: 'Sep 2025 – Present',
      location: 'Hamilton, ON, Canada',
      description: 'Level 3 Co-op student with strong foundation in software engineering principles, full-stack development, and agile methodologies.',
      highlights: ['Software Engineering', 'Full-Stack Development', 'Cloud Platforms', 'Agile Development'],
    },
    {
      degree: 'Diploma in Web Development and Internet Applications',
      school: 'Algonquin College',
      duration: 'May 2023 – Dec 2024',
      location: 'Ottawa, ON, Canada',
      description: 'Intensive program focusing on modern web development frameworks, responsive design, and internet technologies.',
      highlights: ['Web Development', 'Responsive Design', 'Internet Applications', 'Database Design'],
    },
    {
      degree: 'Advanced Diploma in Software Engineering Technology',
      school: 'Centennial College',
      duration: 'Sep 2020 – Apr 2023',
      location: 'Toronto, ON, Canada',
      description: 'Comprehensive program covering software development, object-oriented programming, and system design principles.',
      highlights: ['OOP', 'System Design', 'Database Systems', 'Software Testing'],
    },
    {
      degree: 'MBA in Accounting & Information Systems',
      school: 'University of Dhaka, Bangladesh',
      duration: 'Sep 2007 – June 2010',
      location: 'Dhaka, Bangladesh',
      description: 'Advanced degree in business administration with focus on information systems management and organizational technology.',
      highlights: ['Information Systems', 'Business Analysis', 'Project Management', 'Data Management'],
    },
  ];

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
          Education
        </h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mb-12"></div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border-l-4 border-blue-600"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <GraduationCap className="w-6 h-6 text-blue-600" />
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {edu.degree}
                    </h3>
                  </div>
                  <p className="text-lg text-gray-700 dark:text-gray-300 font-semibold">
                    {edu.school}
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 mb-4 text-gray-600 dark:text-gray-400">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-blue-600" />
                  <span>{edu.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <span>{edu.location}</span>
                </div>
              </div>

              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                {edu.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {edu.highlights.map((highlight, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium rounded-lg border border-blue-200 dark:border-blue-700"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
