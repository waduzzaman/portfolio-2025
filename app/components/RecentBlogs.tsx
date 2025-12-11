'use client';

import { Calendar, User, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function RecentBlogs() {
  const recentBlogs = [
    {
      id: 1,
      title: 'Getting Started with Next.js 14: Modern Web Development',
      slug: 'getting-started-nextjs-14',
      category: 'Web Development',
      author: 'MD Mahbub E Waduzzaman',
      date: '2024-12-08',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
      excerpt: 'Learn how to build modern web applications using Next.js 14 with the App Router, Server Components, and more advanced features.',
    },
    {
      id: 2,
      title: 'Mastering React Hooks: A Complete Guide',
      slug: 'mastering-react-hooks',
      category: 'React',
      author: 'MD Mahbub E Waduzzaman',
      date: '2024-12-05',
      image: 'https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=800',
      excerpt: 'Deep dive into React Hooks - useState, useEffect, useContext, and custom hooks. Learn best practices and patterns for clean code.',
    },
    {
      id: 3,
      title: 'AI-Powered Web Applications: Integrating OpenAI APIs',
      slug: 'ai-powered-web-apps',
      category: 'AI/ML',
      author: 'Your Name',
      date: '2024-12-01',
      image: 'https://images.pexels.com/photos/3945691/pexels-photo-3945691.jpeg?auto=compress&cs=tinysrgb&w=800',
      excerpt: 'Build intelligent applications by integrating OpenAI APIs. Learn about prompt engineering, API integration, and best practices.',
    },
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
          Recent Blog Posts
        </h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mb-12"></div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {recentBlogs.map((blog) => (
            <Link key={blog.id} href={`/blog/${blog.slug}`}>
              <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full cursor-pointer">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {blog.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2">
                    {blog.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2 text-sm">
                    {blog.excerpt}
                  </p>
                  
                  <div className="flex flex-col gap-2 mb-4 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(blog.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>{blog.author}</span>
                    </div>
                  </div>

                  <div className="flex items-center text-blue-600 dark:text-blue-400 hover:gap-2 transition-all duration-300 font-semibold">
                    Read More <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link href="/blog">
            <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 dark:hover:bg-blue-500 text-white font-semibold rounded-lg transition-colors duration-300">
              View All Blog Posts
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
