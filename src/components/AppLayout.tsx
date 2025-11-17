import React from 'react';
import { LanguageProvider } from '../contexts/LanguageContext';
import { BackgroundEffects } from './BackgroundEffects';
import { Navigation } from './Navigation';
import { Hero } from './Hero';
import { Experience } from './Experience';
import { About } from './About';
import { Skills } from './Skills';
import { Services } from './Services';
import { Portfolio } from './Portfolio';
import { Testimonials } from './Testimonials';
import { Contact } from './Contact';
import { Footer } from './Footer';

const AppLayout: React.FC = () => {
  return (
    <LanguageProvider>
      <div className="antialiased bg-neutral-950 text-neutral-100 font-['Inter',ui-sans-serif,system-ui,-apple-system,'Segoe_UI','Roboto','Helvetica','Arial']">
        <BackgroundEffects />
        <Navigation />
        <main className="mx-auto max-w-7xl px-6">
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Services />
          <Portfolio />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default AppLayout;
