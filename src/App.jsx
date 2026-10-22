import { useEffect } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Expertise from './components/Expertise.jsx';
import Services from './components/Services.jsx';
import Approach from './components/Approach.jsx';
import Commitments from './components/Commitments.jsx';
import Reader from './components/Reader.jsx';
import Cta from './components/Cta.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

// Reveals each [data-reveal] element once when it enters the viewport. Content is never left hidden:
// without IntersectionObserver everything is shown, and a late check catches anything already on screen.
function useReveal() {
  useEffect(() => {
    const targets = document.querySelectorAll('[data-reveal]');
    if (!('IntersectionObserver' in window)) {
      targets.forEach((el) => el.classList.add('is-in'));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add('is-in');
        io.unobserve(entry.target);
      }
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    targets.forEach((el) => io.observe(el));
    const late = setTimeout(() => {
      targets.forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < innerHeight && r.bottom > 0) el.classList.add('is-in');
      });
    }, 2500);
    return () => { io.disconnect(); clearTimeout(late); };
  }, []);
}

export default function App() {
  useReveal();
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Expertise />
        <Services />
        <Approach />
        <Commitments />
        <Reader />
        <Cta />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
