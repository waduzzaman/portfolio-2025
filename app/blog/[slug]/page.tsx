import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, Clock, User, ArrowRight } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import React from 'react';
import Navigation from '@/app/components/Navigation';

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

export const metadata: Metadata = {
  title: 'Blog Post | Tech & Software Insights',
  description: 'Read our latest articles on software development, AI, cloud computing, cybersecurity, and emerging technologies.',
};

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

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

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
          <p className="text-xl leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
            Artificial Intelligence continues to evolve rapidly. In 2025, AI is transforming industries through generative models,
            automation, and advanced machine learning applications.
          </p>
          <h2 className="text-3xl font-bold mt-12 mb-4 text-gray-900 dark:text-white">Generative AI</h2>
          <p className="leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
            Generative AI tools are enabling developers and businesses to create realistic images, text, and code automatically,
            enhancing productivity and creativity.
          </p>
          <h2 className="text-3xl font-bold mt-12 mb-4 text-gray-900 dark:text-white">AI in Business Automation</h2>
          <p className="leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
            AI-powered automation is streamlining workflows in finance, healthcare, and IT operations, reducing manual work and
            improving decision-making.
          </p>
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 p-6 my-8">
            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Expert Tip</h3>
            <p className="text-gray-700 dark:text-gray-300">
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
          <p className="text-xl leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
            Leveraging cloud platforms effectively is key to modern IT success. Learn best practices to optimize performance, cost, and security.
          </p>
          <h2 className="text-3xl font-bold mt-12 mb-4 text-gray-900 dark:text-white">Cost Optimization</h2>
          <p className="leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
            Implementing auto-scaling and monitoring usage patterns can significantly reduce waste in cloud spending.
          </p>
          <h2 className="text-3xl font-bold mt-12 mb-4 text-gray-900 dark:text-white">Cloud Security</h2>
          <p className="leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
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
          <p className="text-xl leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
            As threats become more sophisticated, organizations must evolve their defense mechanisms to protect sensitive data and infrastructure.
          </p>
          <h2 className="text-3xl font-bold mt-12 mb-4 text-gray-900 dark:text-white">The Rise of AI-Driven Attacks</h2>
          <p className="leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
            Hackers are now using AI to automate phishing and identify system vulnerabilities faster than ever.
          </p>
          <h2 className="text-3xl font-bold mt-12 mb-4 text-gray-900 dark:text-white">Multi-Factor Authentication (MFA)</h2>
          <p className="leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
            Moving beyond SMS-based MFA to hardware keys and biometric verification is no longer optional.
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
          <p className="text-xl leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
            Choosing the right language can define your career path. Here are the languages dominating AI, Web, and Mobile development.
          </p>
          <h2 className="text-3xl font-bold mt-12 mb-4 text-gray-900 dark:text-white">Python: The AI King</h2>
          <p className="leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
            Python remains the top choice for machine learning and data science due to its massive library ecosystem.
          </p>
          <h2 className="text-3xl font-bold mt-12 mb-4 text-gray-900 dark:text-white">TypeScript & Rust</h2>
          <p className="leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
            TypeScript continues to lead web development, while Rust is becoming the standard for high-performance systems.
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
          <p className="text-xl leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
            Beyond cryptocurrency, blockchain technology is reshaping how we handle identity, ownership, and digital transactions.
          </p>
          <h2 className="text-3xl font-bold mt-12 mb-4 text-gray-900 dark:text-white">Decentralized Finance (DeFi)</h2>
          <p className="leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
            DeFi continues to provide transparent and accessible financial services without traditional intermediaries.
          </p>
        </>
      ),
      relatedPosts: [
        { slug: 'cybersecurity-2025-guide', title: 'Cybersecurity 2025 Guide', excerpt: 'Protecting your crypto and digital identity.' },
        { slug: 'latest-ai-trends-2025', title: 'AI Trends 2025', excerpt: 'Combining AI with blockchain.' },
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
          <p className="text-xl leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
            The Internet of Things (IoT) is no longer just about smart bulbs; it is about fully integrated systems in healthcare and industry.
          </p>
          <h2 className="text-3xl font-bold mt-12 mb-4 text-gray-900 dark:text-white">Edge Computing</h2>
          <p className="leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
            Processing data on the device rather than the cloud allows for faster response times in autonomous driving.
          </p>
        </>
      ),
      relatedPosts: [
        { slug: 'top-programming-languages-2025', title: 'Top Languages 2025', excerpt: 'C++ and Rust in the world of IoT.' },
        { slug: 'latest-ai-trends-2025', title: 'AI Trends 2025', excerpt: 'Adding intelligence to the edge.' },
      ],
    },
  };

  const post: Post | undefined = blogData[slug];
  if (!post) return <div className="min-h-screen flex items-center justify-center dark:bg-gray-900 dark:text-white">Post not found.</div>;

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 transition-colors duration-500">
      <Navigation />

      {/* Back Button Section - Visibility Fixed with Padding Top */}
      <section className="pt-32 pb-8 bg-gray-50/50 dark:bg-gray-800/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Button asChild variant="outline" className="group border-gray-200 dark:border-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all">
              <Link href="/blog">
                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                Back to Blog
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <article className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <span className="text-sm font-bold px-4 py-1.5 bg-blue-600 text-white rounded-full uppercase tracking-tighter">
              {post.category}
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-8 tracking-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-gray-500 dark:text-gray-400 mb-10 border-b border-gray-100 dark:border-gray-800 pb-8">
            <div className="flex items-center gap-2"><Calendar size={18} /><span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span></div>
            <div className="flex items-center gap-2"><Clock size={18} /><span>{post.readTime}</span></div>
            <div className="flex items-center gap-2"><User size={18} /><span>By {post.author}</span></div>
          </div>

          <div className="aspect-video overflow-hidden rounded-3xl mb-12 shadow-2xl border border-gray-100 dark:border-gray-800">
            <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            {post.content}
          </div>

          {/* Contact CTA */}
          <div className="mt-16 p-8 rounded-3xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700 text-center">
             <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Have a project in mind?</h3>
             <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8">
                <Link href="/#contact">Let's Talk <ArrowRight className="ml-2 w-5 h-5" /></Link>
             </Button>
          </div>
        </div>
      </article>

      {/* Related Posts Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-10">Recommended Reading</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {post.relatedPosts.map((related) => (
                <Link key={related.slug} href={`/blog/${related.slug}`} className="group">
                  <Card className="h-full border-gray-200 dark:border-gray-700 dark:bg-gray-900 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300 hover:shadow-xl">
                    <CardHeader>
                      <CardTitle className="text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {related.title}
                      </CardTitle>
                      <CardDescription className="dark:text-gray-400 mt-2 line-clamp-2">
                        {related.excerpt}
                      </CardDescription>
                      <div className="pt-4 flex items-center text-blue-600 dark:text-blue-400 font-bold text-sm">
                         Read More <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
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