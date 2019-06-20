import React from 'react';
import Button from './Button';

const Faq = ({data}) => {
	if(data){
		var caption = data.caption;
		var supcaption = data.supcaption;
		var text = data.text;
		var question = data.items.map((item, index) => (
      <div className="bgrid" key={index}>
        <h3>{item.title}</h3>
        <p>
          {item.text}
        </p>
      </div>
    ));
	}
  return (
    <section id="faq">
      <div className="row section-intro">
        <div className="col-twelve with-bottom-line">
          <h5>{supcaption}</h5>
          <h1>{caption}</h1>

          <p className="lead">{text}</p>
        </div>
      </div>

      <div className="row faq-content">
        <div className="q-and-a block-1-2 block-tab-full group">
          {question}
        </div>
      </div>

      <div className="row section-ads">
        <div className="col-twelve">
          <div className="ad-content">
            <h2 className="h01">
              <a href="http://abcinblog.blogspot.com/">
                Styleshout Recommends Dreamhost.
              </a>
            </h2>

            <p className="lead">
              Looking for an awesome and reliable webhosting? Try
              <a href="http://abcinblog.blogspot.com/">
                <span>DreamHost</span>
              </a>
              . Get <span>$50 off</span> when you sign up with the promocode
              <span>styleshout</span>.
              {/* Simply type	the promocode in the box labeled “Promo Code” when placing your order. 				 */}
            </p>

            <ul class="stores" style={{ listStyleType: "none" }}>
              <Button
                classBlock="action"
								link="http://abcinblog.blogspot.com/"
								classI=""
								name="Sign Up Now"
              />
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;