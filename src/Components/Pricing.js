import React from 'react';

const Pricing = () => {
  return (
    <section id="pricing">
      <div className="row section-intro">
        <div className="col-twelve with-bottom-line">
          <h5>Our Pricing</h5>
          <h1>Pick the best plan for you.</h1>

          <p className="lead">
            Lorem ipsum Do commodo in proident enim in dolor cupidatat
            adipisicing dolore officia nisi aliqua incididunt Ut veniam lorem
            ipsum Consectetur ut in in eu do.
          </p>
        </div>
      </div>

      <div className="row pricing-content">
        <div className="pricing-tables block-1-4 group">
          
          <div className="bgrid">
            <div className="price-block">
              <div className="top-part">
                <h3 className="plan-title">Starter</h3>
                <p className="plan-price">
                  <sup>$</sup>4.99
                </p>
                <p className="price-month">Per month</p>
                <p className="price-meta">Billed Annually.</p>
              </div>

              <div className="bottom-part">
                <ul className="features">
                  <li>
                    <strong>3GB</strong> Storage
                  </li>
                  <li>
                    <strong>10GB</strong> Bandwidth
                  </li>
                  <li>
                    <strong>5</strong> Databases
                  </li>
                  <li>
                    <strong>30</strong> Email Accounts
                  </li>
                </ul>
                {/*  eslint-disable-next-line */}
                <a className="button large" href="#">
                  Get Started
                </a>
              </div>
            </div>
          </div>

          <div className="bgrid">
            <div className="price-block primary">
              <div className="top-part" data-info="recommended">
                <h3 className="plan-title">Standard</h3>
                <p className="plan-price">
                  <sup>$</sup>9.99
                </p>
                <p className="price-month">Per month</p>
                <p className="price-meta">Billed Annually.</p>
              </div>

              <div className="bottom-part">
                <ul className="features">
                  <li>
                    <strong>5GB</strong> Storage
                  </li>
                  <li>
                    <strong>15GB</strong> Bandwidth
                  </li>
                  <li>
                    <strong>7</strong> Databases
                  </li>
                  <li>
                    <strong>40</strong> Email Accounts
                  </li>
                </ul>
                {/*  eslint-disable-next-line */}
                <a className="button large" href="">
                  Get Started
                </a>
              </div>
            </div>
          </div>

          <div className="bgrid">
            <div className="price-block">
              <div className="top-part">
                <h3 className="plan-title">Premium</h3>
                <p className="plan-price">
                  <sup>$</sup>19.99
                </p>
                <p className="price-month">Per month</p>
                <p className="price-meta">Billed Annually.</p>
              </div>

              <div className="bottom-part">
                <ul className="features">
                  <li>
                    <strong>10GB</strong> Storage
                  </li>
                  <li>
                    <strong>30GB</strong> Bandwidth
                  </li>
                  <li>
                    <strong>15</strong> Databases
                  </li>
                  <li>
                    <strong>60</strong> Email Accounts
                  </li>
                </ul>
                {/*  eslint-disable-next-line */}
                <a className="button large" href="">
                  Get Started
                </a>
              </div>
            </div>
          </div>

          <div className="bgrid">
            <div className="price-block">
              <div className="top-part">
                <h3 className="plan-title">Ultimate</h3>
                <p className="plan-price">
                  <sup>$</sup>29.99
                </p>
                <p className="price-month">Per month</p>
                <p className="price-meta">Billed Annually.</p>
              </div>

              <div className="bottom-part">
                <ul className="features">
                  <li>
                    <strong>20GB</strong> Storage
                  </li>
                  <li>
                    <strong>40GB</strong> Bandwidth
                  </li>
                  <li>
                    <strong>25</strong> Databases
                  </li>
                  <li>
                    <strong>100</strong> Email Accounts
                  </li>
                </ul>
                {/*  eslint-disable-next-line */}
                <a className="button large" href="">
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;