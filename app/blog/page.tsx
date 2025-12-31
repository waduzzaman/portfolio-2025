import Blog from "../components/Blog";


export const metadata = {
  title: 'Blog - Web Development Articles',
  description: 'Read articles about web development, React, Next.js, JavaScript, and AI integration.',
};

export default function BlogPage() {
  return <Blog posts={[]} />;
}
