import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, Clock, User, ArrowRight } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import React from 'react';
import Navigation from '@/app/components/Navigation';

// --- Types ---
type RelatedPost = {
  slug: string;
  title: string;
  excerpt: string;
};

type Post = {
  category: string;
  title: string;
  date: string;
  readTime: string;
  author: string;
  image: string;
  content: React.ReactNode;
  relatedPosts: RelatedPost[];
};

type BlogData = Record<string, Post>;

// --- Metadata ---
export const metadata: Metadata = {
  title: 'Blog Post | Tech & Software Insights',
  description:
    'Read our latest articles on software development, AI, cloud computing, cybersecurity, and emerging technologies.',
};

// --- Static Params for SSG ---
export function generateStaticParams() {
  return [
    { slug: 'latest-ai-trends-2025' },
    { slug: 'cloud-computing-best-practices' },
    { slug: 'cybersecurity-2025-guide' },
    { slug: 'top-programming-languages-2025' },
    { slug: 'blockchain-and-web3' },
    { slug: 'emerging-iot-technologies' },
  ];
}

// --- Component ---
export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  // --- Blog Data ---
 const blogData: BlogData = {
    'latest-ai-trends-2025': {
      category: 'AI & Machine Learning',
      title: 'Latest AI Trends in 2025: What to Expect',
      date: '2025-12-15',
      readTime: '6 min read',
      author: 'Mahbub',
      image: '/ai.png',
      content: (
        <>
          <p className="text-xl text-slate-600 leading-relaxed mb-6">
            Artificial Intelligence continues to evolve rapidly. In 2025, AI is transforming industries through generative models,
            automation, and advanced machine learning applications.
          </p>
          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-4">Generative AI</h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            Generative AI tools are enabling developers and businesses to create realistic images, text, and code automatically,
            enhancing productivity and creativity.
          </p>
          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-4">AI in Business Automation</h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            AI-powered automation is streamlining workflows in finance, healthcare, and IT operations, reducing manual work and
            improving decision-making.
          </p>
          <div className="bg-indigo-50 border-l-4 border-indigo-600 p-6 my-8">
            <h3 className="text-xl font-bold text-slate-900 mb-2">Expert Tip</h3>
            <p className="text-slate-700">
              Staying updated with AI research and industry applications is key for developers and tech professionals.
            </p>
          </div>
        </>
      ),
      relatedPosts: [
        { slug: 'cloud-computing-best-practices', title: 'Cloud Computing Best Practices', excerpt: 'Optimize performance and security.' },
        { slug: 'top-programming-languages-2025', title: 'Top Languages in 2025', excerpt: 'Languages driving the AI revolution.' },
      ],
    },

    'cloud-computing-best-practices': {
      category: 'Cloud & DevOps',
      title: 'Cloud Computing Best Practices for Modern Businesses',
      date: '2025-12-10',
      readTime: '5 min read',
      author: 'Mahbub',
      image: '/cloud.png',
      content: (
        <>
          <p className="text-xl text-slate-600 leading-relaxed mb-6">
            Leveraging cloud platforms effectively is key to modern IT success. Learn best practices to optimize performance, cost, and security.
          </p>
          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-4">Cost Optimization</h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            Implementing auto-scaling and monitoring usage patterns can significantly reduce waste in cloud spending.
          </p>
          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-4">Cloud Security</h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            Adopting a Zero Trust architecture ensures that every access request is verified, regardless of where it originates.
          </p>
        </>
      ),
      relatedPosts: [
        { slug: 'cybersecurity-2025-guide', title: 'Cybersecurity 2025 Guide', excerpt: 'Protect your assets in a cloud-first world.' },
        { slug: 'emerging-iot-technologies', title: 'Emerging IoT Tech', excerpt: 'How the cloud powers connected devices.' },
      ],
    },

    'cybersecurity-2025-guide': {
      category: 'Cybersecurity',
      title: 'Cybersecurity in 2025: Protecting Your Digital Assets',
      date: '2025-12-05',
      readTime: '7 min read',
      author: 'Mahbub',
      image: '/cybersecurity.png',
      content: (
        <>
          <p className="text-xl text-slate-600 leading-relaxed mb-6">
            As threats become more sophisticated, organizations must evolve their defense mechanisms to protect sensitive data and infrastructure.
          </p>
          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-4">The Rise of AI-Driven Attacks</h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            Hackers are now using AI to automate phishing and identify system vulnerabilities faster than ever.
          </p>
          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-4">Multi-Factor Authentication (MFA)</h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            Moving beyond SMS-based MFA to hardware keys and biometric verification is no longer optional for high-security environments.
          </p>
        </>
      ),
      relatedPosts: [
        { slug: 'blockchain-and-web3', title: 'Blockchain and Web3', excerpt: 'Security through decentralization.' },
        { slug: 'latest-ai-trends-2025', title: 'AI Trends 2025', excerpt: 'AI as a tool for both defense and attack.' },
      ],
    },

    'top-programming-languages-2025': {
      category: 'Programming',
      title: 'Top Programming Languages to Learn in 2025',
      date: '2025-11-28',
      readTime: '5 min read',
      author: 'Mahbub',
      image: '/programming-language.png',
      content: (
        <>
          <p className="text-xl text-slate-600 leading-relaxed mb-6">
            Choosing the right language can define your career path. Here are the languages dominating AI, Web, and Mobile development this year.
          </p>
          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-4">Python: The AI King</h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            Python remains the top choice for machine learning and data science due to its massive library ecosystem.
          </p>
          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-4">TypeScript & Rust</h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            TypeScript continues to lead web development, while Rust is becoming the standard for high-performance system programming.
          </p>
        </>
      ),
      relatedPosts: [
        { slug: 'cloud-computing-best-practices', title: 'Cloud Best Practices', excerpt: 'How code structure impacts cloud deployment.' },
        { slug: 'emerging-iot-technologies', title: 'Emerging IoT Tech', excerpt: 'Programming for smart hardware.' },
      ],
    },

    'blockchain-and-web3': {
      category: 'Blockchain & Web3',
      title: 'Blockchain and Web3: The Future of Decentralized Tech',
      date: '2025-11-20',
      readTime: '6 min read',
      author: 'Mahbub',
      image: '/blockchain.png',
      content: (
        <>
          <p className="text-xl text-slate-600 leading-relaxed mb-6">
            Beyond cryptocurrency, blockchain technology is reshaping how we handle identity, ownership, and digital transactions.
          </p>
          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-4">Decentralized Finance (DeFi)</h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            DeFi continues to provide transparent and accessible financial services without traditional intermediaries like banks.
          </p>
          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-4">The Growth of Web3 Apps</h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            Web3 applications are giving users control over their data, moving away from the centralized "Big Tech" model.
          </p>
        </>
      ),
      relatedPosts: [
        { slug: 'cybersecurity-2025-guide', title: 'Cybersecurity 2025 Guide', excerpt: 'Protecting your crypto and digital identity.' },
        { slug: 'latest-ai-trends-2025', title: 'AI Trends 2025', excerpt: 'Combining AI with blockchain for smarter contracts.' },
      ],
    },

    'emerging-iot-technologies': {
      category: 'IoT & Smart Tech',
      title: 'Emerging IoT Technologies: Smart Devices and Connected Worlds',
      date: '2025-11-15',
      readTime: '5 min read',
      author: 'Mahbub',
      image: '/iot.png',
      content: (
        <>
          <p className="text-xl text-slate-600 leading-relaxed mb-6">
            The Internet of Things (IoT) is no longer just about smart bulbs; it is about fully integrated systems in healthcare and industry.
          </p>
          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-4">Edge Computing</h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            Processing data on the device rather than the cloud allows for faster response times in critical fields like autonomous driving.
          </p>
          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-4">IoT in Healthcare</h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            Wearable sensors are providing real-time patient monitoring, drastically improving preventative care.
          </p>
        </>
      ),
      relatedPosts: [
        { slug: 'top-programming-languages-2025', title: 'Top Languages 2025', excerpt: 'C++ and Rust in the world of IoT.' },
        { slug: 'latest-ai-trends-2025', title: 'AI Trends 2025', excerpt: 'Adding intelligence to the edge.' },
      ],
    },
  };

  // --- Get current post ---
  const post: Post | undefined = blogData[slug];
  if (!post) return <p className="text-center py-20">Post not found.</p>;

  return (
    
    <div className="flex flex-col">
     
      {/* Back Button */}
      <section className="bg-gradient-to-br from-sky-50 via-white to-indigo-50 py-12">
        <div className="container mx-auto px-4">
          <Button asChild variant="ghost" className="mb-6">
            <Link href="/blog">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
          </Button>
        </div>
      </section>

      {/* Blog Content */}
      <article className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <span className="text-sm font-semibold px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full">
                {post.category}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">{post.title}</h1>

            <div className="flex flex-wrap items-center gap-6 text-slate-600 mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>{new Date(post.date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>{post.readTime}</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-5 h-5" />
                <span>{post.author}</span>
              </div>
            </div>

            <div className="aspect-video overflow-hidden rounded-2xl mb-12">
              <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
            </div>

            <div className="prose prose-lg max-w-none">{post.content}</div>

            <div className="mt-12 pt-8 border-t">
              <Button asChild size="lg" className="bg-indigo-600 hover:bg-indigo-700">
                <a href="/contact" target="_blank" rel="noopener noreferrer">
                  Contact Me
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Related Articles</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {post.relatedPosts.map((related: RelatedPost) => (
                <Link key={related.slug} href={`/blog/${related.slug}`}>
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="hover:text-indigo-600 transition-colors">{related.title}</CardTitle>
                      <CardDescription>{related.excerpt}</CardDescription>
                      <div className="mt-2 text-indigo-600 font-medium inline-flex items-center gap-1">
                        Read More Blogs
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </CardHeader>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
