import React from 'react'
import Hero from '../components/Hero';
import FeatureTiles from '../components/FeatureTiles';
import About from '../components/About';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';

const Home = () => {
  return (
   <>
   <Hero/>
   <FeatureTiles/>
   <About/>
   <Features/>
   <Testimonials/>
   </>
  )
}

export default Home