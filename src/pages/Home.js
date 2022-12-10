import React from 'react'
import Hero from '../components/Hero';
import FeatureTiles from '../components/FeatureTiles';
import About from '../components/About';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';

const Home = () => {
  return (
   <>
   <Hero/>
   <FeatureTiles/>
   <About/>
   <Features/>
   <Testimonials/>
   <CTA/>
   </>
  )
}

export default Home