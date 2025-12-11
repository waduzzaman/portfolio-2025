'use client';
import React from 'react';
import Link from 'next/link';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import { posts, BlogBlock } from '../posts';

export default function BlogDetail({ params }: { params: { slug: string } }) {
  const { slug } = params; // now works fine
  const blog = posts.find((post) => post.slug === slug);

  if (!blog) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-800 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Blog Post Not Found
          </h1>
          <Link href="/blog">
            <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-300">
              Back to Blog
            </button>
          </Link>
        </div>
      </div>
    );
  }

  // Render JSON blocks
  const renderBlock = (block: BlogBlock, index: number) => {
    switch (block.type) {
      case 'heading':
        if (block.level === 2)
          return (
            <h2 key={index} className="text-3xl font-bold mb-6">
              {block.content}
            </h2>
          );
        if (block.level === 3)
          return (
            <h3 key={index} className="text-2xl font-semibold mb-4">
              {block.content}
            </h3>
          );
        return (
          <h4 key={index} className="text-xl font-medium mb-3">
            {block.content}
          </h4>
        );

      case 'paragraph':
        return (
          <p key={index} className="mb-4 leading-relaxed">
            {block.content}
          </p>
        );

      case 'list':
        return (
          <ul key={index} className="list-disc list-inside mb-4 ml-4 space-y-1">
            {(block.content as string[]).map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        );

      case 'code':
        return (
          <pre
            key={index}
            className="bg-gray-100 dark:bg-gray-800 p-4 rounded mb-4 overflow-x-auto"
          >
            <code className="text-sm">{block.content}</code>
          </pre>
        );

      case 'image':
        return (
          <img
            key={index}
            src={block.content as string}
            alt={blog.title}
            className="my-6 rounded-xl w-full object-cover shadow-md"
          />
        );

      default:
        return null;
    }
  };

  return (
    <article className="py-20 bg-white dark:bg-gray-800 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link href="/blog">
          <button className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:gap-3 transition-all duration-300 mb-8 font-semibold">
            <ArrowLeft className="w-5 h-5" />
            Back to Blog
          </button>
        </Link>

        {/* Header */}
        <div className="mb-8">
          <div className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
            {blog.category}
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {blog.title}
          </h1>

          <div className="flex flex-col sm:flex-row gap-6 text-gray-600 dark:text-gray-400 mb-8">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-blue-600" />
              <span>
                {new Date(blog.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <User className="w-5 h-5 text-blue-600" />
              <span>By {blog.author}</span>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="mb-12 rounded-xl overflow-hidden shadow-lg">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-96 object-cover"
          />
        </div>

        {/* Render JSON content */}
        <div className="prose dark:prose-invert max-w-none mb-12">
          {blog.content.map((block, index) => renderBlock(block, index))}
        </div>

        {/* Divider */}
        <hr className="my-12 border-gray-300 dark:border-gray-700" />

        {/* Related Section */}
        <div className="bg-gray-50 dark:bg-gray-700 p-8 rounded-xl">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            More Articles
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Explore more articles on web development, React, and modern
            technologies.
          </p>

          <Link href="/blog">
            <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-300">
              View All Articles
            </button>
          </Link>
        </div>
      </div>
    </article>
  );
}
