"use client";

import { useState } from "react";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import Navigation from "../components/Navigation";

// export const metadata = {
//   title: "Health & Wellness Blog | The Rehab Nest",
//   description:
//     "Expert insights on physiotherapy, wellness, injury prevention, and rehabilitation from The Rehab Nest healthcare professionals.",
// };

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const blogPosts = [
    {
      slug: "understanding-plantar-fasciitis",
      title: "Understanding Plantar Fasciitis: Causes, Symptoms, and Treatment",
      excerpt:
        "Learn about this common foot condition that affects millions of people and discover effective treatment options to alleviate pain and restore mobility.",
      category: "Foot Health",
      date: "2024-01-15",
      readTime: "5 min read",
      image:
        "https://images.pexels.com/photos/7659564/pexels-photo-7659564.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      slug: "preventative-measures-back-pain",
      title: "Preventative Measures for Back Pain: Tips from Our Physiotherapists",
      excerpt:
        "Discover practical strategies to prevent back pain, improve posture, and maintain a healthy spine through simple lifestyle modifications and exercises.",
      category: "Pain Management",
      date: "2024-01-10",
      readTime: "6 min read",
      image:
        "https://images.pexels.com/photos/7176325/pexels-photo-7176325.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      slug: "workplace-injury-conditions",
      title: "Common Workplace Injury Conditions and How to Prevent Them",
      excerpt:
        "Explore the most common workplace injuries, their causes, and evidence-based strategies to create a safer work environment and prevent injuries.",
      category: "Workplace Health",
      date: "2024-01-05",
      readTime: "7 min read",
      image:
        "https://images.pexels.com/photos/5473184/pexels-photo-5473184.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      slug: "ergonomics-injury-prevention",
      title: "Ergonomics and Injury Prevention: Setting Up Your Workspace",
      excerpt:
        "Learn how proper ergonomic setup can prevent repetitive strain injuries and improve productivity in your home or office workspace.",
      category: "Workplace Health",
      date: "2023-12-28",
      readTime: "5 min read",
      image:
        "https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      slug: "benefits-regular-massage",
      title: "The Benefits of Regular Massage Therapy for Overall Wellness",
      excerpt:
        "Discover how consistent massage therapy can improve your physical health, reduce stress, and enhance your overall quality of life.",
      category: "Wellness",
      date: "2023-12-20",
      readTime: "4 min read",
      image:
        "https://images.pexels.com/photos/3997386/pexels-photo-3997386.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      slug: "mental-health-physical-health",
      title: "The Connection Between Mental Health and Physical Health",
      excerpt:
        "Explore the intricate relationship between mind and body, and learn how addressing mental health can improve physical rehabilitation outcomes.",
      category: "Mental Health",
      date: "2023-12-15",
      readTime: "6 min read",
      image:
        "https://images.pexels.com/photos/7176026/pexels-photo-7176026.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  const categories = ["All", "Pain Management", "Foot Health", "Workplace Health", "Wellness", "Mental Health"];

  const filteredPosts =
    selectedCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  return (
    <div className="flex flex-col">
      <Navigation />
      <section className="bg-gradient-to-br from-emerald-50 via-white to-blue-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Health & Wellness Blog</h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
              Expert insights and practical advice from our healthcare professionals to help you on your wellness journey
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
                    ? "bg-emerald-600 text-white"
                    : "bg-slate-100 text-slate-700 hover:bg-emerald-600 hover:text-white"
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
                      <span className="text-xs font-semibold px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full">
                        {post.category}
                      </span>
                    </div>
                    <CardTitle className="text-xl hover:text-emerald-600 transition-colors">{post.title}</CardTitle>
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
                    <div className="mt-4 text-emerald-600 font-medium inline-flex items-center gap-1">
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
