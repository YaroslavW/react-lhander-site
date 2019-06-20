import React from 'react';

const Cta = () => {
  return (
    <section id="cta">
      <div className="row cta-content">
        <div className="col-twelve">
          <h1 className="h01">
            Get started now. Try Lhander free for 30 days.
          </h1>

          <p className="lead">Download the app now. Available on the:</p>

          <ul className="stores">
            <li className="app-store">
              {/*  eslint-disable-next-line */}
              <a href="#" className="button round large" title="">
                <i className="icon ion-social-apple" />
                App Store
              </a>
            </li>
            <li className="play-store">
              {/*  eslint-disable-next-line */}
              <a href="#" className="button round large" title="">
                <i className="icon ion-social-android" />
                Play Store
              </a>
            </li>
            <li className="windows-store">
              {/*  eslint-disable-next-line */}
              <a href="#" className="button round large" title="">
                <i className="icon ion-social-windows" />
                Win Store
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Cta;