"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, ArrowRight, Search, Mail } from "lucide-react";
import Navigation from "../components/Navigation";
import { blogData } from "@/lib/blog-data";

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const blogPosts = useMemo(() => {
    return Object.entries(blogData).map(([slug, post]) => ({
      slug,
      ...post,
    }));
  }, []);

  const categories = ["All", "AI & Machine Learning", "Cloud & DevOps", "Cybersecurity", "Programming", "Blockchain & Web3", "IoT & Smart Tech"];

  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-950 transition-colors duration-500">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 overflow-hidden bg-gray-50 dark:bg-gray-900/50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tighter">
            Insights & <span className="text-blue-600">Innovations</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Exploring the frontier of software engineering, AI, and the future of the web.
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="sticky top-20 z-40 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border-y border-gray-100 dark:border-gray-800 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map(cat => (
              <button 
                key={cat} 
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${
                  selectedCategory === cat ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30" : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 container mx-auto px-4">
        {filteredPosts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                <Card className="h-full border-none bg-transparent shadow-none">
                  <div className="aspect-[16/10] overflow-hidden rounded-3xl mb-6 shadow-lg border border-gray-100 dark:border-gray-800">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <CardHeader className="p-0">
                    <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-3 block">{post.category}</span>
                    <CardTitle className="text-2xl font-bold group-hover:text-blue-600 transition-colors leading-tight dark:text-white">{post.title}</CardTitle>
                    <CardDescription className="text-base mt-4 line-clamp-3 text-gray-600 dark:text-gray-400 leading-relaxed">{post.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent className="p-0 mt-6 flex justify-between items-center text-xs font-bold text-gray-400 uppercase tracking-widest">
                    <div className="flex gap-4">
                      <span className="flex items-center gap-1.5"><Calendar size={14}/> {post.date}</span>
                      <span className="flex items-center gap-1.5"><Clock size={14}/> {post.readTime}</span>
                    </div>
                    <div className="text-blue-600 flex items-center gap-1">Read <ArrowRight size={14} /></div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20"><Search className="mx-auto text-gray-300 mb-4" size={48} /><h3 className="text-xl font-bold">No posts found</h3></div>
        )}
      </section>

      {/* Newsletter Section */}
      <section className="container mx-auto px-4 pb-20">
        <div className="bg-blue-600 dark:bg-blue-700 rounded-[3rem] p-12 text-center text-white shadow-2xl shadow-blue-500/20">
          <Mail className="mx-auto mb-6" size={40} />
          <h2 className="text-3xl font-bold mb-4">Stay Ahead of the Curve</h2>
          <p className="text-blue-100 mb-8 max-w-md mx-auto">Get monthly technical deep-dives and career insights delivered to your inbox.</p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input type="email" placeholder="email@example.com" className="flex-1 px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-blue-200 focus:outline-none focus:ring-2 focus:ring-white" />
            <button className="px-8 py-4 bg-white text-blue-600 font-bold rounded-full hover:bg-blue-50 transition-all">Subscribe Now</button>
          </div>
        </div>
      </section>
    </div>
  );
}