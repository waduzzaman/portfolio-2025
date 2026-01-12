"use client";

import { useState } from "react";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import Navigation from "../components/Navigation";

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const blogPosts = [
    {
      slug: "latest-ai-trends-2025",
      title: "Latest AI Trends in 2025: What to Expect",
      excerpt:
        "Explore the newest developments in artificial intelligence, including generative AI, AI-powered automation, and the impact on various industries.",
      category: "AI & Machine Learning",
      date: "2025-12-15",
      readTime: "6 min read",
      image:
        "/ai.png",
    },
    {
      slug: "cloud-computing-best-practices",
      title: "Cloud Computing Best Practices for Modern Businesses",
      excerpt:
        "Learn about effective strategies for leveraging cloud platforms, optimizing performance, ensuring security, and reducing costs in your IT infrastructure.",
      category: "Cloud & DevOps",
      date: "2025-12-10",
      readTime: "5 min read",
      image:
        "/cloud.png",
    },
    {
      slug: "cybersecurity-2025-guide",
      title: "Cybersecurity in 2025: Protecting Your Digital Assets",
      excerpt:
        "Understand the emerging cybersecurity threats, essential protective measures, and the tools every organization should implement to stay secure.",
      category: "Cybersecurity",
      date: "2025-12-05",
      readTime: "7 min read",
      image:
        "/cybersecurity.png",
    },
    {
      slug: "top-programming-languages-2025",
      title: "Top Programming Languages to Learn in 2025",
      excerpt:
        "Discover the most in-demand programming languages, their applications in AI, web, and mobile development, and why they matter for your career.",
      category: "Programming",
      date: "2025-11-28",
      readTime: "5 min read",
      image:
        "/programming-language.png",
    },
    {
      slug: "blockchain-and-web3",
      title: "Blockchain and Web3: The Future of Decentralized Technology",
      excerpt:
        "Explore blockchain innovations, Web3 applications, NFTs, and how decentralization is transforming finance, gaming, and digital identity.",
      category: "Blockchain & Web3",
      date: "2025-11-20",
      readTime: "6 min read",
      image:
        "/blockchain.png",
    },
    {
      slug: "emerging-iot-technologies",
      title: "Emerging IoT Technologies: Smart Devices and Connected Worlds",
      excerpt:
        "Learn how Internet of Things devices are shaping smart homes, healthcare, and industry, along with the key challenges and opportunities for developers.",
      category: "IoT & Smart Tech",
      date: "2025-11-15",
      readTime: "5 min read",
      image:
        "/iot.png",
    },
  ];

  const categories = [
    "All",
    "AI & Machine Learning",
    "Cloud & DevOps",
    "Cybersecurity",
    "Programming",
    "Blockchain & Web3",
    "IoT & Smart Tech",
  ];

  const filteredPosts =
    selectedCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  return (
    <div className="flex flex-col">
      <Navigation />
      <section className="bg-gradient-to-br from-sky-50 via-white to-indigo-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Tech & Software Blog</h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
              Stay updated with the latest trends, insights, and expert advice in software development, AI, cybersecurity, and emerging technologies.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? "bg-indigo-600 text-white"
                    : "bg-slate-100 text-slate-700 hover:bg-indigo-600 hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <Card className="h-full hover:shadow-xl transition-shadow overflow-hidden">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-semibold px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full">
                        {post.category}
                      </span>
                    </div>
                    <CardTitle className="text-xl hover:text-indigo-600 transition-colors">{post.title}</CardTitle>
                    <CardDescription className="text-base mt-2">{post.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-slate-500">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>
                          {new Date(post.date).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <div className="mt-4 text-indigo-600 font-medium inline-flex items-center gap-1">
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
