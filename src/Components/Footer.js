import React from 'react';

const Footer = ({data}) => {
  if(data){
    var street = data.address.street;
    var city = data.address.city;
    var region = data.address.region;
    var zip = data.address.zip;
    var state = data.address.state;
    var email = data.address.email;
    var phone = data.address.phone;
    var site_link = data.site_links.map((item, index) => (
      <li key={index}>
        <a href={item.link} target="_blank" rel="noopener noreferrer">{item.name}</a>
      </li>
    ));
        var social_link = data.social_links.map((item, index) => (
          <li key={index}>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.name}
            </a>
          </li>
        ));
  }
  return (
    <footer>
      <div className="footer-main">
        <div className="row">
          <div className="col-four tab-full mob-full footer-info">
            <div className="footer-logo" />

            <p>
             {street}
              <br />
              {city}, {region} {zip} {state}
              <br />
              {email} &nbsp; {phone}
            </p>
          </div>

          <div className="col-two tab-1-3 mob-1-2 site-links">
            <h4>Site Links</h4>

            <ul>
             {site_link}
            </ul>
          </div>

          <div className="col-two tab-1-3 mob-1-2 social-links">
            <h4>Social</h4>

            <ul>
             {social_link} 
              
            </ul>
          </div>

          <div className="col-four tab-1-3 mob-full footer-subscribe">
            <h4>Subscribe</h4>

            <p>Keep yourself updated. Subscribe to our newsletter.</p>

            <div className="subscribe-form">
              <form id="mc-form" className="group" noValidate={true}>
                <input
                  readOnly
                  type="email"
                  value=""
                  name="dEmail"
                  className="email"
                  id="mc-email"
                  placeholder="type email &amp; hit enter"
                  required=""
                />

                <input type="submit" name="subscribe" />

                <label htmlFor="mc-email" className="subscribe-message" />
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="row">
          <div className="col-twelve">
            <div className="copyright">
              <span>Kolesnikov Yaroslav © Copyright Lhander 2019.</span>
              <span>
                Design by <a href="http://www.styleshout.com/">styleshout</a>
              </span>
            </div>

            {/* <div id="go-top" style={{ display: "block" }}>
              <a className="smoothscroll" title="Back to Top" href="#top">
                <i className="icon ion-android-arrow-up" />
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;