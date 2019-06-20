import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div class="footer-main">
        <div class="row">
          <div class="col-four tab-full mob-full footer-info">
            <div class="footer-logo" />

            <p>
              1600 Amphitheatre Parkway
              <br />
              Mountain View, CA 94043 US
              <br />
              info@lhander.com &nbsp; +123-456-789
            </p>
          </div>

          <div class="col-two tab-1-3 mob-1-2 site-links">
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
                <a href="#">FAQ</a>
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

          <div class="col-two tab-1-3 mob-1-2 social-links">
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

          <div class="col-four tab-1-3 mob-full footer-subscribe">
            <h4>Subscribe</h4>

            <p>Keep yourself updated. Subscribe to our newsletter.</p>

            <div class="subscribe-form">
              <form id="mc-form" class="group" novalidate="true">
                <input
                  type="email"
                  value=""
                  name="dEmail"
                  class="email"
                  id="mc-email"
                  placeholder="type email &amp; hit enter"
                  required=""
                />

                <input type="submit" name="subscribe" />

                <label for="mc-email" class="subscribe-message" />
              </form>
            </div>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="row">
          <div class="col-twelve">
            <div class="copyright">
              <span>© Copyright Lhander 2016.</span>
              <span>
                Design by <a href="http://www.styleshout.com/">styleshout</a>
              </span>
            </div>

            <div id="go-top" style={{display: 'block'}}>
              <a class="smoothscroll" title="Back to Top" href="#top">
                <i class="icon ion-android-arrow-up" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;