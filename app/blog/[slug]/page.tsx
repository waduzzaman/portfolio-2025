import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, Clock, User, ArrowRight } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

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

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const blogData: Record<string, any> = {
    'latest-ai-trends-2025': {
      category: 'AI & Machine Learning',
      title: 'Latest AI Trends in 2025: What to Expect',
      date: '2025-12-15',
      readTime: '6 min read',
      author: 'Tech Insights Team',
      image: 'https://images.pexels.com/photos/5473184/pexels-photo-5473184.jpeg?auto=compress&cs=tinysrgb&w=1200',
      content: (
        <>
          <p className="text-xl text-slate-600 leading-relaxed mb-6">
            Artificial Intelligence continues to evolve rapidly. In 2025, AI is transforming industries through generative models, automation, and advanced machine learning applications.
          </p>
          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-4">Generative AI</h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            Generative AI tools are enabling developers and businesses to create realistic images, text, and code automatically, enhancing productivity and creativity.
          </p>
          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-4">AI in Business Automation</h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            AI-powered automation is streamlining workflows in finance, healthcare, and IT operations, reducing manual work and improving decision-making.
          </p>
          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-4">Ethics and AI Governance</h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            As AI adoption grows, ethical considerations and governance frameworks are critical to ensure safe and responsible deployment of intelligent systems.
          </p>
          <div className="bg-indigo-50 border-l-4 border-indigo-600 p-6 my-8">
            <h3 className="text-xl font-bold text-slate-900 mb-2">Expert Tip</h3>
            <p className="text-slate-700">
              Staying updated with AI research and industry applications is key for developers and tech professionals. Experiment with AI tools and integrate them into your workflows to remain competitive.
            </p>
          </div>
        </>
      ),
      relatedPosts: [
        { slug: 'cloud-computing-best-practices', title: 'Cloud Computing Best Practices for Modern Businesses', excerpt: 'Optimize performance, security, and cost in your cloud infrastructure' },
        { slug: 'cybersecurity-2025-guide', title: 'Cybersecurity in 2025: Protecting Your Digital Assets', excerpt: 'Emerging threats and essential defense strategies' },
      ],
    },
    'cloud-computing-best-practices': {
      category: 'Cloud & DevOps',
      title: 'Cloud Computing Best Practices for Modern Businesses',
      date: '2025-12-10',
      readTime: '5 min read',
      author: 'CloudTech Team',
      image: 'https://images.pexels.com/photos/7659564/pexels-photo-7659564.jpeg?auto=compress&cs=tinysrgb&w=1200',
      content: (
        <>
          <p className="text-xl text-slate-600 leading-relaxed mb-6">
            Leveraging cloud platforms effectively is key to modern IT success. Learn best practices to optimize performance, cost, and security.
          </p>
          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-4">Cloud Migration Strategies</h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            Plan migrations carefully with phased approaches, backup strategies, and monitoring to minimize downtime and errors.
          </p>
          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-4">Cost Optimization</h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            Regularly review resource usage and leverage auto-scaling, serverless functions, and reserved instances to control costs.
          </p>
          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-4">Security Best Practices</h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            Use multi-factor authentication, encryption, and network segmentation to safeguard data and applications in the cloud.
          </p>
        </>
      ),
      relatedPosts: [
        { slug: 'latest-ai-trends-2025', title: 'Latest AI Trends in 2025: What to Expect', excerpt: 'Explore the newest AI developments including generative AI, automation, and the impact on industries.' },
        { slug: 'top-programming-languages-2025', title: 'Top Programming Languages to Learn in 2025', excerpt: 'Discover the most in-demand programming languages and their applications in AI, web, and mobile.' },
      ],
    },
    'cybersecurity-2025-guide': {
      category: 'Cybersecurity',
      title: 'Cybersecurity in 2025: Protecting Your Digital Assets',
      date: '2025-12-05',
      readTime: '7 min read',
      author: 'Security Insights Team',
      image: 'https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=1200',
      content: (
        <>
          <p className="text-xl text-slate-600 leading-relaxed mb-6">
            Cyber threats continue to grow in complexity. Staying ahead requires updated knowledge and best practices.
          </p>
          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-4">Emerging Threats</h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            Ransomware, phishing, and AI-assisted attacks are on the rise, making cybersecurity a top priority.
          </p>
          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-4">Zero Trust Security</h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            Implement zero trust architecture to verify all access requests, reduce breach risks, and secure sensitive data.
          </p>
          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-4">AI in Cybersecurity</h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            AI helps detect anomalies, automate threat response, and identify vulnerabilities faster than traditional methods.
          </p>
        </>
      ),
      relatedPosts: [
        { slug: 'latest-ai-trends-2025', title: 'Latest AI Trends in 2025: What to Expect', excerpt: 'Explore the newest AI developments including generative AI, automation, and the impact on industries.' },
        { slug: 'cloud-computing-best-practices', title: 'Cloud Computing Best Practices for Modern Businesses', excerpt: 'Optimize performance, security, and cost in your cloud infrastructure' },
      ],
    },
    'top-programming-languages-2025': {
      category: 'Programming',
      title: 'Top Programming Languages to Learn in 2025',
      date: '2025-11-28',
      readTime: '5 min read',
      author: 'DevTech Team',
      image: 'https://images.pexels.com/photos/3997386/pexels-photo-3997386.jpeg?auto=compress&cs=tinysrgb&w=1200',
      content: (
        <>
          <p className="text-xl text-slate-600 leading-relaxed mb-6">
            Knowing which programming languages are trending is crucial for developers in 2025.
          </p>
          <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-6">
            <li>Python – AI, ML, web development</li>
            <li>JavaScript/TypeScript – frontend, backend, fullstack</li>
            <li>Rust – system programming, blockchain</li>
            <li>Go – cloud-native apps, microservices</li>
            <li>Solidity – smart contracts, Web3 development</li>
          </ul>
        </>
      ),
      relatedPosts: [
        { slug: 'cloud-computing-best-practices', title: 'Cloud Computing Best Practices for Modern Businesses', excerpt: 'Optimize performance, security, and cost in your cloud infrastructure' },
        { slug: 'blockchain-and-web3', title: 'Blockchain and Web3: The Future of Decentralized Technology', excerpt: 'Explore blockchain innovations and Web3 applications.' },
      ],
    },
    'blockchain-and-web3': {
      category: 'Blockchain & Web3',
      title: 'Blockchain and Web3: The Future of Decentralized Technology',
      date: '2025-11-20',
      readTime: '6 min read',
      author: 'Web3 Insights Team',
      image: 'https://images.pexels.com/photos/7176325/pexels-photo-7176325.jpeg?auto=compress&cs=tinysrgb&w=1200',
      content: (
        <>
          <p className="text-xl text-slate-600 leading-relaxed mb-6">
            Blockchain and Web3 are revolutionizing finance, gaming, and digital identity through decentralization.
          </p>
          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-4">DeFi & NFTs</h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            Decentralized finance and non-fungible tokens are reshaping digital assets and ownership models.
          </p>
          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-4">Smart Contracts</h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            Programmable contracts execute automatically on blockchain networks, enhancing transparency and trust.
          </p>
        </>
      ),
      relatedPosts: [
        { slug: 'top-programming-languages-2025', title: 'Top Programming Languages to Learn in 2025', excerpt: 'Discover in-demand programming languages for AI, web, and mobile.' },
        { slug: 'emerging-iot-technologies', title: 'Emerging IoT Technologies: Smart Devices and Connected Worlds', excerpt: 'Explore IoT innovations and connected smart devices.' },
      ],
    },
    'emerging-iot-technologies': {
      category: 'IoT & Smart Tech',
      title: 'Emerging IoT Technologies: Smart Devices and Connected Worlds',
      date: '2025-11-15',
      readTime: '5 min read',
      author: 'IoT Solutions Team',
      image: 'https://images.pexels.com/photos/7176026/pexels-photo-7176026.jpeg?auto=compress&cs=tinysrgb&w=1200',
      content: (
        <>
          <p className="text-xl text-slate-600 leading-relaxed mb-6">
            The Internet of Things is connecting devices and systems to improve efficiency, health, and convenience.
          </p>
          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-4">Smart Homes</h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            Connected home devices enhance convenience, security, and energy management.
          </p>
          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-4">Industrial IoT</h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            IoT in manufacturing optimizes production, predictive maintenance, and logistics.
          </p>
        </>
      ),
      relatedPosts: [
        { slug: 'blockchain-and-web3', title: 'Blockchain and Web3: The Future of Decentralized Technology', excerpt: 'Explore blockchain innovations and Web3 applications.' },
        { slug: 'top-programming-languages-2025', title: 'Top Programming Languages to Learn in 2025', excerpt: 'Discover in-demand programming languages for AI, web, and mobile.' },
      ],
    },
  };

  const post = blogData[params.slug];

  if (!post) return <p className="text-center py-20">Post not found.</p>;

  return (
    <div className="flex flex-col">
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
                <a href="https://yourportfolio.com/contact" target="_blank" rel="noopener noreferrer">
                  Contact Us
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </article>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Related Articles</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {post.relatedPosts.map((related) => (
                <Link key={related.slug} href={`/blog/${related.slug}`}>
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="hover:text-indigo-600 transition-colors">{related.title}</CardTitle>
                      <CardDescription>{related.excerpt}</CardDescription>
                      <div className="mt-2 text-indigo-600 font-medium inline-flex items-center gap-1">
                        Read More
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
