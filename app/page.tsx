import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import RecentBlogs from './components/RecentBlogs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AgileDevFlow from './components/AgileDevFlow';

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <AgileDevFlow />
      <Testimonials />
      {/* <RecentBlogs /> */}
      <Contact />
      <Footer />
    </main>
  );
}
