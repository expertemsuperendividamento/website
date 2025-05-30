import React from 'react';
import Header from '../components/landing/Header';
import HeroSection from '../components/landing/HeroSection';
import SocialProof from '../components/landing/SocialProof';
import AboutSection from '../components/landing/AboutSection';
import CoursesSection from '../components/landing/CoursesSection';
import FAQSection from '../components/landing/FAQSection';
import TestimonialsSection from '../components/landing/TestimonialsSection';
import Footer from '../components/landing/Footer';

const LandingPage = () => {
  return (
    <div className="font-sans antialiased text-gray-800">
      <Header />
      <HeroSection />
      <SocialProof />
      <AboutSection />
      <CoursesSection />
      <FAQSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default LandingPage;