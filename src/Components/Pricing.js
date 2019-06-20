import React from 'react';

const Pricing = ({data}) => {
  		if(data){
        var supcaption = data.supcaption;
        var caption = data.caption;
        var text = data.text;
        var item = data.items.map((block, index) => (
          <div className="bgrid" key={index}>
            <div className={block.class}>
              <div className="top-part" data-info="recommended">
                <h3 className="plan-title">{block.title}</h3>
                <p className="plan-price">
                  <sup>$</sup>4.99
                </p>
                <p className="price-month">{block.month}</p>
                <p className="price-meta">{block.meta}</p>
              </div>

              <div className="bottom-part">
                <ul className="features">
                  {block.features.map((item, index) => (
                    <li key={index}>
                      <strong>{item.value}</strong> {item.name}
                    </li>
                  ))}
                </ul>
                {/*  eslint-disable-next-line */}
                <a className="button large" href="#">
                  Get Started
                </a>
              </div>
            </div>
          </div>
        ));
      }
  return (
    <section id="pricing">
      <div className="row section-intro">
        <div className="col-twelve with-bottom-line">
          <h5>{supcaption}</h5>
          <h1>{caption}</h1>

          <p className="lead">
            {text}
          </p>
        </div>
      </div>

      <div className="row pricing-content">
        <div className="pricing-tables block-1-4 group">
          {item}
        </div>
      </div>
    </section>
  );
};

export default Pricing;