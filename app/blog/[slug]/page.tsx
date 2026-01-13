import { blogData } from "@/lib/blog-data";
import Navigation from "@/app/components/Navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, User, ArrowRight } from "lucide-react";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogData[slug];
  return { title: post ? `${post.title} | Mahbub's Blog` : "Post Not Found" };
}

export function generateStaticParams() {
  return Object.keys(blogData).map((slug) => ({ slug }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogData[slug];

  if (!post) return <div className="p-20 text-center">Post not found.</div>;

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <Navigation />

      {/* Header */}
      <header className="pt-32 pb-16 bg-gray-50/50 dark:bg-gray-900/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <Button asChild variant="ghost" className="mb-8 -ml-4">
            <Link href="/blog">
              <ArrowLeft className="mr-2 w-4 h-4" /> Back to Blog
            </Link>
          </Button>
          <div className="mb-6">
            <span className="text-xs font-black px-4 py-1.5 bg-blue-600 text-white rounded-full uppercase tracking-widest">
              {post.category}
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-8 tracking-tight leading-tight">
            {post.title}
          </h1>
          <div className="flex flex-wrap gap-6 text-gray-500 dark:text-gray-400 font-medium">
            <span className="flex items-center gap-2">
              <Calendar size={18} className="text-blue-600" /> {post.date}
            </span>
            <span className="flex items-center gap-2">
              <Clock size={18} className="text-blue-600" /> {post.readTime}
            </span>
            <span className="flex items-center gap-2">
              <User size={18} className="text-blue-600" /> By {post.author}
            </span>
          </div>
        </div>
      </header>

      {/* Featured Image Overlay */}
      <div className="container mx-auto px-4 max-w-5xl -mt-10">
        <div className="aspect-[21/9] rounded-3xl overflow-hidden shadow-2xl border border-gray-100 dark:border-gray-800">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Article Content */}
      <article className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <div
            className="prose prose-lg dark:prose-invert max-w-none 
            prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed
            prose-headings:text-gray-900 dark:prose-headings:text-white
            prose-strong:text-blue-600 dark:prose-strong:text-blue-400"
          >
            {post.content}
          </div>

          {/* Contact CTA */}

          {/* Enhanced Contact CTA with Theme-specific Backgrounds */}
          <div className="relative mt-20 p-10 rounded-[2.5rem] overflow-hidden group shadow-2xl">
         
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-900 dark:to-blue-950 -z-10 transition-colors duration-500" />

            {/* Decorative Radial Light (Visible mostly in Dark Mode) */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-500/10 dark:bg-blue-400/20 rounded-full blur-3xl group-hover:bg-blue-400/30 transition-all duration-700 -z-10" />
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-indigo-500/10 dark:bg-indigo-400/20 rounded-full blur-3xl group-hover:bg-indigo-400/30 transition-all duration-700 -z-10" />

            <div className="relative z-10 text-center">
              <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white tracking-tight">
                Have a technical challenge?
              </h3>
              <p className="text-gray-600 dark:text-blue-100/70 mb-8 max-w-md mx-auto text-lg leading-relaxed">
                I specialize in high-performance web applications and AI
                integrations. Let's build something extraordinary together.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 dark:bg-white dark:text-blue-600 dark:hover:bg-blue-50 text-white rounded-full px-12 h-14 font-bold shadow-lg shadow-blue-500/20 hover:scale-105 transition-all"
              >
                <Link href="/#contact" className="flex items-center gap-2">
                  Get in Touch <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900/50 border-t border-gray-100 dark:border-gray-800">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold mb-10 dark:text-white">
            Recommended Reading
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {post.relatedPosts.map((rel) => (
              <Link key={rel.slug} href={`/blog/${rel.slug}`} className="group">
                <Card className="h-full border-gray-200 dark:border-gray-800 dark:bg-gray-950 hover:border-blue-600 transition-all">
                  <CardHeader className="p-8">
                    <CardTitle className="text-2xl font-bold group-hover:text-blue-600 transition-colors dark:text-white">
                      {rel.title}
                    </CardTitle>
                    <CardDescription className="text-base mt-3 dark:text-gray-400 line-clamp-2">
                      {rel.excerpt}
                    </CardDescription>
                    <div className="mt-6 text-blue-600 font-bold flex items-center gap-1">
                      Read Post <ArrowRight size={16} />
                    </div>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
