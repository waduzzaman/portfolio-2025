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
    "Android App",
    "SaaS",
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
      title: "AK Marketings – Business Expansion & Digital Services",
      category: "NextJs",
      description:
        "A responsive corporate website built for AK Marketings, a business expansion and digital services provider based in Canada. The platform showcases cross-border market entry support, marketing services (including digital marketing, SEO, brand development, and web design & development), client testimonials, and company information. Designed with modern UI/UX, SEO structure, and mobile-first responsiveness.",
      image: "/projects/ak-marketings.png",
      tags: [
        "Next.js",
        "React",
        "Tailwind CSS",
        "Responsive Web Design",
        "SEO Optimization",
        "Business Services Website",
        "UI/UX",
        "Content Strategy",
      ],
      github: "#", // replace with your actual repo
      demo: "https://www.akmarketings.com/",
    },

    {
      title: "My Canada Journey – Immigration & Settlement Guide",
      category: "NextJs",
      description:
        "A fully responsive and content-rich informational website built to provide newcomers and aspiring immigrants with practical guidance, tips, and insights about living in Canada. Features structured content around immigration pathways, settlement resources, cultural adaptation, community highlights, and support services. Designed with a modern UI, performance-focused architecture, and SEO-optimized structure.",
      image: "/projects/canada-info.png",
      tags: [
        "Next.js",
        "React",
        "Tailwind CSS",
        "Responsive Web Design",
        "SEO Optimization",
        "Content Strategy",
        "UI/UX",
        "Performance Optimization",
      ],
      github: "#", // replace with your actual repo link
      demo: "https://www.mycanadajourney.ca/",
    },

    {
      title: "Halal Checker – Android App",
      category: "Android App",
      description:
        "A native Android application that helps users instantly verify whether food products are Halal by scanning barcodes or searching product names. The app integrates the Open Food Facts public API to fetch ingredient data and applies Halal compliance logic to highlight permissible, doubtful, and non-Halal ingredients. Built with Java following clean architecture principles, focusing on performance, usability, and real-world consumer needs.",
      image: "/projects/halal-checker.jpeg",
      tags: [
        "Android",
        "Java",
        "Open Food Facts API",
        "REST API Integration",
        "Barcode Scanning",
        "JSON Parsing",
        "Mobile UI/UX",
        "Material Design",
        "Clean Architecture",
      ],
      github: "#", // replace with actual repo
      demo: "#", // optional
    },

    {
      title: "SkillMentor – Android Learning & Self-Improvement App",
      category: "Android App",
      description:
        "A native Android application designed to provide users with structured learning and self-improvement tools covering soft skills, professional development, mental health, daily routines, productivity techniques, and motivational content. Built with Java/Kotlin and optimized for intuitive mobile user experience and personal growth workflows.",
      image: "/projects/code-mentor.jpeg",
      tags: [
        "Android",
        "Java",
        "Kotlin",
        "Mobile UI/UX",
        "Material Design",
        "Self-Improvement",
        "Learning App",
        "REST API",
        "Performance Optimization",
        "Education App",
      ],
      github: "#", // replace with your actual repo
      demo: "https://play.google.com/store/apps/details?id=com.mahbub.skillmentor",
    },

    {
      title: "Zakat Calculator – Java Application",
      category: "Android App",
      description:
        "A Java-based Zakat Calculator designed to help users calculate Zakat according to Islamic financial principles. Users can input assets like cash, savings, gold, silver, and investments, along with liabilities. The app computes Zakat eligibility (Nisab) and payable amount using precise calculation logic. Built entirely with Java, emphasizing correctness, maintainability, and user-friendly console interactions.",
      image: "/projects/zakat-calculator.jpeg",
      tags: [
        "Java",
        "OOP",
        "Islamic Finance",
        "Zakat Calculator",
        "Financial Calculations",
        "Data Validation",
        "Clean Code",
        "Console Application",
        "Problem Solving",
      ],
      github: "#", // replace with your actual repo
      demo: "", // optional CLI demo link
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
      image: "/projects/library.png",
      tags: ["React", "Node.js", "MongoDB", "Firebase", "Google Maps"],
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      title: "Tuxedo Musalla Prayer Times",
      category: "NextJs",
      description:
        "A responsive prayer times web application that displays accurate Salah (Islamic prayer) timings for Tuxedo Musalla based on the user’s location and daily solar calculations. Built with modern web technologies and optimized for performance, accessibility, and mobile-friendly design.",
      image: "/projects/salah-time.png",
      tags: [
        "Next.js",
        "React",
        "Tailwind CSS",
        "Responsive Design",
        "API Integration",
        "Location Services",
        "Prayer Times",
        "Utility App",
        "SEO Optimization",
      ],
      github: "https://github.com/yourusername/tuxedo-musalla-prayer-times", // replace with actual repo
      demo: "https://tuxedo-musalla-prayer-times.vercel.app/",
    },

    {
      title: "Tourism Management Application",
      category: "MERN App",
      description:
        "Travel recommendation system with personalized suggestions and Google Maps API integration for real-time destination insights.",
      image: "/projects/travel.png",
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
    {
      title: "Bangla Rannaghor – Bengali Recipe & Cooking Website",
      category: "NextJs",
      description:
        "A responsive Bengali cuisine recipe website showcasing a wide variety of traditional and modern recipes with rich visuals and easy-to-follow cooking instructions. Built with Next.js and modern frontend technologies to deliver a fast, SEO-optimized experience for food enthusiasts and home cooks.",
      image:
        "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: [
        "Next.js",
        "React",
        "Tailwind CSS",
        "Responsive Web Design",
        "Recipe Website",
        "SEO Optimization",
        "UI/UX",
        "Content-Rich Site",
      ],
      github: "#", // replace with your actual repo
      demo: "https://bangla-rannaghor.vercel.app/",
    },

    {
  title: 'ATS Resume Builder – Next.js SaaS Application',
  category: 'SaaS',
  description: 'A full-stack ATS-optimized resume builder web app that enables users to create professional, recruiter-friendly resumes tailored for applicant tracking systems. Built with Next.js, featuring intuitive form workflows, dynamic resume previews, user authentication, and integrated payment processing for premium features. Designed for performance, usability, and conversion-focused UX.',
  image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
  tags: [
    'Next.js',
    'React',
    'Tailwind CSS',
    'Responsive Web Design',
    'SaaS',
    'User Auth',
    'Payment Integration',
    'ATS Optimization',
    'SEO Optimization',
    'UI/UX Design'
  ],
  github: 'https://github.com/yourusername/ats-resume-builder', // replace with your actual repository
  demo: 'https://ats-resume-gamma.vercel.app/',
}

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
