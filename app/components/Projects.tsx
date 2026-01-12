"use client";

import { ExternalLink, Github } from "lucide-react";
import { useState } from "react";

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Web App",
    "MERN App",
    "WordPress",
    "NextJs",
    "Real Estate",
  ];

  const projects = [
    {
      title: "News Website - MERN Stack Application",
      category: "MERN App",
      description:
        "Bilingual news platform with dynamic frontend, admin dashboard, and secure backend API. Features content management for publishing and media uploads.",
      image: "/projects/topnews.png",
      tags: ["React", "Next.js", "Node.js", "MongoDB", "Cloudinary"],
      github: "#",
      demo: "https://www.topnews24.net/",
    },
    {
      title: "The Rehab Nest – Rehab & Wellness Clinic Website",
      category: "NextJs",
      description:
        "A fully responsive and SEO-optimized healthcare services website built for The Rehab Nest clinic in Scarborough, showcasing physiotherapy, massage therapy, chiropractic care, chiropody, acupuncture, and counselling services. The site features service details, therapist profiles, blog content, and appointment booking integration to provide a professional online presence and enhanced user experience.",
      image: "/projects/rehabnest.png",
      tags: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Responsive Web Design",
        "SEO Optimization",
        "Healthcare Website",
        "CMS Integration",
        "UI/UX Design",
      ],
      github: "https://github.com/yourusername/therehabnest", // replace with your actual repo
      demo: "https://www.therehabnest.com/",
    },
    {
      title: "5W Communications – Strategic PR & Communications Agency",
      category: "WordPress",
      description:
        "A professional communications and public relations agency specializing in storytelling, stakeholder relations, media and government relations, event management, and executive profiling. The site reflects a strategic services offering designed to elevate brands, foster meaningful connections, and deliver impactful communications solutions.",
      image: "/projects/5wc.png",
      tags: [
        "WordPress",
        "PHP",
        "HTML5",
        "CSS3",
        "JavaScript",
        "Responsive Design",
        "SEO Optimization",
        "CMS Development",
      ],
      github: "#", // replace with real repo if available
      demo: "https://5wcommunications.com/",
    },
    {
      title: "Mohammad Care Home – Therapy & Support Services Website",
      category: "WordPress",
      description:
        "A responsive healthcare services website developed for Mohammad Care Home, designed to showcase psychotherapy and mental health support offerings, appointment scheduling, and client resources. Built with modern web technologies for performance, accessibility, and SEO optimization.",
      image: "/projects/mch.png",
      tags: [
        "Next.js",
        "React",
        "Tailwind CSS",
        "Responsive Web Design",
        "SEO Optimization",
        "UI/UX",
        "Content Management",
        "Healthcare Website",
      ],
      github: "#",
      demo: "https://mohammadcarehome.com/",
    },

    {
      title: "Community Library Management System",
      category: "Library",
      description:
        "Library system automating borrowing processes with admin features for book inventory management (add, update, delete).",
      image:
        "https://images.pexels.com/photos/8438922/pexels-photo-8438922.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["React", "Node.js", "MongoDB", "Firebase", "Google Maps"],
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      title: "Tourism Management Application",
      category: "MERN App",
      description:
        "Travel recommendation system with personalized suggestions and Google Maps API integration for real-time destination insights.",
      image:
        "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["React", "Node.js", "Express", "MongoDB", "Google Maps"],
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      title: "BizNewsDive – Business & Tech News Site",
      category: "WordPress",
      description:
        "A dynamic news and insights website covering business, tech, economy, gadgets, travel, startups, and global trends. Built on WordPress with a focus on up-to-date content and responsive design to engage readers and support SEO. Powered by WordPress’s flexible CMS platform for scalable publishing.", // Powered by WordPress as seen in site footer :contentReference[oaicite:0]{index=0}
      image: "/projects/biznews.png",
      tags: ["WordPress", "News", "Business", "Tech", "SEO"],
      github: "https://github.com", // replace if you have a real repo
      demo: "https://biznewsdive.com",
    },
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  const visibleProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, 3);

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
          Featured Projects
        </h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mb-12"></div>

        <div className="flex flex-wrap gap-3 justify-center mb-12 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 p-6 rounded-2xl">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setShowAll(false);
              }}
              className={`px-6 py-2.5 rounded-full font-semibold text-sm tracking-wide transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-500/50 scale-105"
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:shadow-md hover:scale-103 border border-gray-200 dark:border-gray-600"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProjects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 dark:hover:bg-blue-500 text-white font-semibold rounded-lg transition-colors duration-300"
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      </div>
    </section>
  );
}
