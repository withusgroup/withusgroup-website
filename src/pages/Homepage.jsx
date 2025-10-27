import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Companies from '../components/Companies';
import ToolsOnline from '../components/ToolsOnline';
import Values from '../components/Values';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import { useAnimations } from '../hooks/useAnimations';

const Homepage = () => {
  useAnimations();

  return (
    <>
      <Header />
      <Hero />
      <About />
      <Companies />
      <ToolsOnline />
      <Values />
      <CTA />
      <Footer />
    </>
  );
};

export default Homepage;