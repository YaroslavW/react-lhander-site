import React, {Component} from 'react';
import $ from "jquery";
import Header from './Components/Header';
import Intro from './Components/Intro';
import Process from './Components/Process';
import Features from './Components/Features';
import Pricing from './Components/Pricing';
import Testimonials from './Components/Testimonials';
import Faq from './Components/Faq';
import Cta from './Components/Cta';
import Footer from './Components/Footer';

class App extends Component {
  state = {
    siteData: {}
  };
  getSiteData() {
    $.ajax({
      url: "http://localhost:3000/siteData.json",
      dataType: "json",
      cache: false,
      success: function(data) {
        this.setState({ siteData: data });
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount() {
    this.getSiteData();
  }

  render() {
    // console.log(this.state.siteData)
    return (
      <div>
        <Header />
        <Intro data={this.state.siteData.intro} />
        <Process data={this.state.siteData.process} />
        <Features data={this.state.siteData.features} />
        <Pricing data={this.state.siteData.pricing}/>
        <Testimonials />
        <Faq />
        <Cta />
        <Footer />
      </div>
    );
  }
};

export default App;
