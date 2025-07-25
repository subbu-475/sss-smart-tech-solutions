import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import CaseStudies from './components/CaseStudies';
import Testimonials from './components/Testimonials';
import TechStack from './components/TechStack';
import Contact from './components/Contact';
import Footer from './components/Footer';
import OurTestimonials from './components/OurTestimonial';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <CaseStudies />
      <Testimonials />
      <OurTestimonials />
      <TechStack />
      <Contact />
      <Footer />
      
    </div>
  );
}

export default App;