
export type BlogBlock =
  | { type: 'heading'; content: string; level: 2 | 3 | 4 }
  | { type: 'paragraph'; content: string }
  | { type: 'list'; content: string[] }
  | { type: 'code'; content: string; language: string }
  | { type: 'image'; content: string };

export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  category: string;
  author: string;
  date: string;
  image: string;
  excerpt: string;
  content: BlogBlock[];
}

export const posts: BlogPost[] = [

  {
    id: 1,
    title: "Getting Started with Next.js 14: Modern Web Development",
    slug: "getting-started-nextjs-14",
    category: "Web Development",
    author: "MD Mahbub E Waduzzaman",
    date: "2024-12-08",
    image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800",
    excerpt: "Learn how to build modern web applications using Next.js 14 with the App Router, Server Components, and more advanced features.",
    content: [
      { type: "heading", content: "Introduction", level: 2 },
      { type: "paragraph", content: "Next.js 14 brings powerful new features to React development. In this guide, we explore the App Router, Server Components, API routes, and deployment strategies." },
      { type: "heading", content: "What's New in Next.js 14", level: 3 },
      { type: "list", content: [
        "Improved App Router with faster navigation",
        "Enhanced Server Components for better performance",
        "Streaming and Suspense handling improvements",
        "Advanced error handling and debugging tools"
      ]},
      { type: "heading", content: "Getting Started", level: 3 },
      { type: "code", content: "npx create-next-app@latest my-app", language: "bash" },
      { type: "heading", content: "App Router Structure", level: 3 },
      { type: "paragraph", content: "The App Router uses file-based routing inside the app/ directory, simplifying route management." },
      { type: "heading", content: "Server Components", level: 3 },
      { type: "paragraph", content: "Server Components allow rendering parts of your app on the server, reducing bundle size and improving load speed." },
      { type: "heading", content: "Deployment", level: 3 },
      { type: "code", content: "vercel deploy", language: "bash" },
      { type: "heading", content: "Conclusion", level: 3 },
      { type: "paragraph", content: "Next.js 14 offers a modern framework with performance, flexibility, and improved developer experience. Perfect for your next web project." },
    ]
  },
  {
    id: 2,
    title: "Mastering React Hooks: A Complete Guide",
    slug: "mastering-react-hooks",
    category: "React",
    author: "MD Mahbub E Waduzzaman",
    date: "2024-12-05",
    image: "https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=800",
    excerpt: "Deep dive into React Hooks - useState, useEffect, useContext, and custom hooks. Learn best practices and patterns for clean code.",
    content: [
      { type: "heading", content: "Introduction", level: 2 },
      { type: "paragraph", content: "React Hooks let you add state and lifecycle features to functional components without writing classes." },
      { type: "heading", content: "useState Hook", level: 3 },
      { type: "code", content: "const [count, setCount] = useState(0);", language: "ts" },
      { type: "heading", content: "useEffect Hook", level: 3 },
      { type: "paragraph", content: "useEffect handles side effects like API calls, subscriptions, and DOM updates." },
      { type: "code", content: "useEffect(() => { fetchData(); }, []);", language: "ts" },
      { type: "heading", content: "useContext Hook", level: 3 },
      { type: "code", content: "const value = useContext(MyContext);", language: "ts" },
      { type: "heading", content: "Custom Hooks", level: 3 },
      { type: "code", content: "function useCounter(initialValue = 0) { const [count, setCount] = useState(initialValue); const increment = () => setCount(c => c + 1); return { count, increment }; }", language: "ts" },
      { type: "heading", content: "Best Practices", level: 3 },
      { type: "list", content: [
        "Call hooks only at the top level",
        "Use hooks only inside React components",
        "Enable ESLint plugin for hooks"
      ]}
    ]
  },
  {
    id: 3,
    title: "AI-Powered Web Applications: Integrating OpenAI APIs",
    slug: "ai-powered-web-apps",
    category: "AI/ML",
    author: "MD Mahbub E Waduzzaman",
    date: "2024-12-01",
    image: "https://images.pexels.com/photos/3945691/pexels-photo-3945691.jpeg?auto=compress&cs=tinysrgb&w=800",
    excerpt: "Build intelligent applications by integrating OpenAI APIs. Learn about prompt engineering, API integration, and best practices.",
    content: [
      { type: "heading", content: "Introduction", level: 2 },
      { type: "paragraph", content: "AI is transforming web apps. Learn how to integrate OpenAI APIs efficiently and securely." },
      { type: "heading", content: "Getting Started", level: 3 },
      { type: "list", content: [
        "Sign up for OpenAI",
        "Generate an API key",
        "Install the SDK: npm install openai"
      ]},
      { type: "heading", content: "Prompt Engineering", level: 3 },
      { type: "paragraph", content: "Effective prompts ensure better AI responses. Provide clear context, specify output format, and give examples if needed." },
      { type: "heading", content: "API Integration", level: 3 },
      { type: "code", content: "import OpenAI from 'openai';\nconst openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });\nconst response = await openai.chat.completions.create({ model: 'gpt-4', messages: [{ role: 'user', content: 'Hello AI!' }] });", language: "ts" },
      { type: "heading", content: "Best Practices", level: 3 },
      { type: "list", content: [
        "Keep API key secure",
        "Implement rate limiting",
        "Handle errors gracefully"
      ]}
    ]
  },
  {
    id: 4,
    title: "TypeScript Essentials: From Beginner to Pro",
    slug: "typescript-essentials",
    category: "Web Development",
    author: "MD Mahbub E Waduzzaman",
    date: "2024-11-28",
    image: "https://images.pexels.com/photos/540518/pexels-photo-540518.jpeg?auto=compress&cs=tinysrgb&w=800",
    excerpt: "Master TypeScript with this comprehensive guide. Learn types, interfaces, generics, and advanced patterns for scalable applications.",
    content: [
      { type: "heading", content: "Introduction", level: 2 },
      { type: "paragraph", content: "TypeScript adds strong typing to JavaScript, improving code reliability and scalability." },
      { type: "heading", content: "Basic Types", level: 3 },
      { type: "list", content: [
        "string, number, boolean",
        "arrays and tuples",
        "enums and literal types"
      ]},
      { type: "heading", content: "Interfaces", level: 3 },
      { type: "code", content: "interface User {\n  id: number;\n  name: string;\n  email?: string;\n}", language: "ts" },
      { type: "heading", content: "Generics", level: 3 },
      { type: "code", content: "function identity<T>(arg: T): T { return arg; }", language: "ts" },
      { type: "heading", content: "Best Practices", level: 3 },
      { type: "list", content: [
        "Type function parameters",
        "Use readonly and optional modifiers",
        "Enable strict mode"
      ]}
    ]
  },
  {
    id: 5,
    title: "Building REST APIs with Node.js and Express",
    slug: "rest-apis-node-express",
    category: "Backend",
    author: "MD Mahbub E Waduzzaman",
    date: "2024-11-25",
    image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800",
    excerpt: "Learn how to build robust RESTful APIs using Node.js and Express with proper routing, middleware, and error handling.",
    content: [
      { type: "heading", content: "Introduction", level: 2 },
      { type: "paragraph", content: "Node.js and Express provide a fast and flexible backend solution for web apps." },
      { type: "heading", content: "Setup", level: 3 },
      { type: "code", content: "npm install express", language: "bash" },
      { type: "heading", content: "Creating Routes", level: 3 },
      { type: "code", content: "app.get('/users/:id', (req, res) => { res.send('User ID: ' + req.params.id); });", language: "ts" },
      { type: "heading", content: "Middleware", level: 3 },
      { type: "paragraph", content: "Middleware handles logging, authentication, and errors." },
      { type: "heading", content: "Error Handling", level: 3 },
      { type: "code", content: "app.use((err, req, res, next) => { console.error(err.stack); res.status(500).send('Something broke!'); });", language: "ts" },
      { type: "heading", content: "Best Practices", level: 3 },
      { type: "list", content: [
        "Use proper HTTP codes",
        "Validate user input",
        "Handle errors gracefully"
      ]}
    ]
  },
  {
    id: 6,
    title: "Introduction to MongoDB: NoSQL Database Basics",
    slug: "mongodb-basics",
    category: "Database",
    author: "MD Mahbub E Waduzzaman",
    date: "2024-11-22",
    image: "https://images.pexels.com/photos/270360/pexels-photo-270360.jpeg?auto=compress&cs=tinysrgb&w=800",
    excerpt: "Explore MongoDB, a leading NoSQL database. Learn collections, documents, queries, and CRUD operations for modern apps.",
    content: [
      { type: "heading", content: "Introduction", level: 2 },
      { type: "paragraph", content: "MongoDB is a document-based NoSQL database with flexible schema design." },
      { type: "heading", content: "Collections & Documents", level: 3 },
      { type: "paragraph", content: "Collections contain JSON-like documents. Documents can have nested structures." },
      { type: "code", content: '{ "name": "Alice", "email": "alice@example.com" }', language: "json" },
      { type: "heading", content: "CRUD Operations", level: 3 },
      { type: "code", content: "db.users.insertOne({ name: 'Alice' });\ndb.users.find({ name: 'Alice' });", language: "ts" },
      { type: "heading", content: "Best Practices", level: 3 },
      { type: "list", content: [
        "Index frequently queried fields",
        "Avoid deeply nested documents",
        "Use aggregation pipelines"
      ]}
    ]
  },
  {
    id: 7,
    title: "Next.js SEO Optimization Techniques",
    slug: "nextjs-seo-optimization",
    category: "Web Development",
    author: "MD Mahbub E Waduzzaman",
    date: "2024-11-18",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
    excerpt: "Boost your Next.js website traffic with SEO techniques including metadata, sitemap, dynamic routing, and structured data.",
    content: [
      { type: "heading", content: "Introduction", level: 2 },
      { type: "paragraph", content: "Search Engine Optimization (SEO) is key for driving traffic. Next.js offers many built-in SEO features." },
      { type: "heading", content: "Metadata", level: 3 },
      { type: "code", content: "import Head from 'next/head';\n<Head>\n  <title>My Blog</title>\n  <meta name='description' content='Next.js SEO tips' />\n</Head>", language: "tsx" },
      { type: "heading", content: "Sitemap & Robots", level: 3 },
      { type: "list", content: [
        "Generate sitemap.xml",
        "Configure robots.txt for search engines"
      ]},
      { type: "heading", content: "Structured Data", level: 3 },
      { type: "code", content: '{ "@context": "https://schema.org", "@type": "BlogPosting", "headline": "Next.js SEO Tips" }', language: "json" },
      { type: "heading", content: "Best Practices", level: 3 },
      { type: "list", content: [
        "Use descriptive URLs",
        "Optimize images",
        "Add social media meta tags"
      ]}
    ]
  },
  {
    id: 8,
    title: "Mastering Git and GitHub: Version Control Best Practices",
    slug: "git-github-mastering",
    category: "Tools",
    author: "MD Mahbub E Waduzzaman",
    date: "2024-11-15",
    image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800",
    excerpt: "Learn version control with Git and GitHub. Understand commits, branching, merging, pull requests, and collaboration workflows.",
    content: [
      { type: "heading", content: "Introduction", level: 2 },
      { type: "paragraph", content: "Git and GitHub are essential for version control and collaboration." },
      { type: "heading", content: "Git Basics", level: 3 },
      { type: "code", content: "git init\ngit add .\ngit commit -m 'Initial commit'", language: "bash" },
      { type: "heading", content: "Branching & Merging", level: 3 },
      { type: "list", content: [
        "Create branches: git branch feature",
        "Merge branches: git merge feature"
      ]},
      { type: "heading", content: "GitHub Collaboration", level: 3 },
      { type: "list", content: [
        "Fork repositories",
        "Open Pull Requests",
        "Use GitHub Actions for CI/CD"
      ]},
      { type: "heading", content: "Best Practices", level: 3 },
      { type: "list", content: [
        "Write clear commit messages",
        "Keep branches focused",
        "Perform code reviews"
      ]}
    ]
  },
  {
    id: 9,
    title: "CSS Grid vs Flexbox: Layout Techniques Explained",
    slug: "css-grid-vs-flexbox",
    category: "Frontend",
    author: "MD Mahbub E Waduzzaman",
    date: "2024-11-12",
    image: "https://images.pexels.com/photos/450035/pexels-photo-450035.jpeg?auto=compress&cs=tinysrgb&w=800",
    excerpt: "Understand CSS Grid and Flexbox. Learn how to create responsive layouts, align items, and choose the best layout method.",
    content: [
      { type: "heading", content: "Introduction", level: 2 },
      { type: "paragraph", content: "CSS Grid and Flexbox are essential for modern responsive layouts." },
      { type: "heading", content: "Flexbox", level: 3 },
      { type: "code", content: ".container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}", language: "css" },
      { type: "heading", content: "CSS Grid", level: 3 },
      { type: "code", content: ".container {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 20px;\n}", language: "css" },
      { type: "heading", content: "Best Practices", level: 3 },
      { type: "list", content: [
        "Flexbox: simpler layouts",
        "Grid: complex page structures",
        "Combine both for responsiveness"
      ]}
    ]
  },
  {
    id: 10,
    title: "Serverless Architecture with Vercel and AWS Lambda",
    slug: "serverless-vercel-aws",
    category: "Cloud",
    author: "MD Mahbub E Waduzzaman",
    date: "2024-11-08",
    image: "https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=800",
    excerpt: "Explore serverless architecture using Vercel and AWS Lambda. Deploy scalable applications without managing servers.",
    content: [
      { type: "heading", content: "Introduction", level: 2 },
      { type: "paragraph", content: "Serverless architecture lets developers focus on code without worrying about server infrastructure." },
      { type: "heading", content: "Vercel Serverless Functions", level: 3 },
      { type: "code", content: "export default function handler(req, res) {\n  res.status(200).json({ message: 'Hello from Vercel' });\n}", language: "ts" },
      { type: "heading", content: "AWS Lambda", level: 3 },
      { type: "paragraph", content: "AWS Lambda runs your code on demand. Integrate it with API Gateway for HTTP access." },
      { type: "heading", content: "Benefits", level: 3 },
      { type: "list", content: [
        "No server management",
        "Automatic scaling",
        "Pay per execution"
      ]},
      { type: "heading", content: "Best Practices", level: 3 },
      { type: "list", content: [
        "Keep functions small and focused",
        "Handle errors gracefully",
        "Secure API endpoints"
      ]}
    ]
  }
];
