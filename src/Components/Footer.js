import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="footer-main">
        <div className="row">
          <div className="col-four tab-full mob-full footer-info">
            <div className="footer-logo" />

            <p>
              1600 Amphitheatre Parkway
              <br />
              Mountain View, CA 94043 US
              <br />
              info@lhander.com &nbsp; +123-456-789
            </p>
          </div>

          <div className="col-two tab-1-3 mob-1-2 site-links">
            <h4>Site Links</h4>

            <ul>
              <li>
                {" "}
                {/*  eslint-disable-next-line */}
                <a href="#">About Us</a>
              </li>
              <li>
                {/*  eslint-disable-next-line */}
                <a href="#">Blog</a>
              </li>
              <li>
                {/*  eslint-disable-next-line */}
                <a href="#faq">FAQ</a>
              </li>
              <li>
                {/*  eslint-disable-next-line */}
                <a href="#">Terms</a>
              </li>
              <li>
                {/*  eslint-disable-next-line */}
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>

          <div className="col-two tab-1-3 mob-1-2 social-links">
            <h4>Social</h4>

            <ul>
              <li>
                {/*  eslint-disable-next-line */}
                <a href="#">Twitter</a>
              </li>
              <li>
                {/*  eslint-disable-next-line */}
                <a href="#">Facebook</a>
              </li>
              <li>
                {/*  eslint-disable-next-line */}
                <a href="#">Dribbble</a>
              </li>
              <li>
                {/*  eslint-disable-next-line */}
                <a href="#">Google+</a>
              </li>
              <li>
                {/*  eslint-disable-next-line */}
                <a href="#">Skype</a>
              </li>
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
              <span>© Copyright Lhander 2016.</span>
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