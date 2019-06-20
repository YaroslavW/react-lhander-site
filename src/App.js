import React from 'react';
import Header from './Components/Header';
import Intro from './Components/Intro';
import Process from './Components/Process';
import Features from './Components/Features';
import Pricing from './Components/Pricing';
import Testimonials from './Components/Testimonials';
import Faq from './Components/Faq';
import Cta from './Components/Cta';
import Footer from './Components/Footer';

const App = () => {
  return (
    <div>
      <Header />
      <Intro />
      <Process />
      <Features />
      <Pricing />
      <Testimonials />
      <Faq />
      <Cta />
      <Footer />
    </div>
  );
};

export default App;
