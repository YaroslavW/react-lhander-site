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
import Data from './siteData.json';

const App =()=> {
const data = Data;

    return (
      <div>
        <Header data={data.menu} />
        <Intro data={data.intro} />
        <Process data={data.process} />
        <Features data={data.features} />
        <Pricing data={data.pricing} />
        <Testimonials data={data.testimonials} />
        <Faq data={data.faq} />
        <Cta data={data.cta} />
        <Footer data={data.footer} />
      </div>
    );
};

export default App;
