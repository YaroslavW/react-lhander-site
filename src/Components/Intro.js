import React from 'react';

const Intro = ({data}) => {
  if(data){
    var supcaption = data.supcaption;
    var caption =data.caption;
    var btnCaption = data.btn_caption;
  }
  return (
    <section id="intro">
      <div className="shadow-overlay" />

      <div className="intro-content">
        <div className="row">
          <div className="col-twelve">
            <div className="video-link">
              <a href="#video-popup">
                <img src="images/play-button.png" alt="" />
              </a>
            </div>

            <h5>{supcaption}</h5>
            <h1>{caption}</h1>

            <a
              className="button stroke smoothscroll"
              href="#process"
              title=""
            >
              {btnCaption}
            </a>
          </div>
        </div>
      </div>

      {/* modal popup */}

      <div id="video-popup" className="popup-modal mfp-hide">
        <div className="fluid-video-wrapper">
          <iframe
            src="http://player.vimeo.com/video/14592941?title=0&amp;byline=0&amp;portrait=0&amp;color=faec09"
            width="500"
            height="281"
            frameBorder="0"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
            allowFullScreen
            title="titleFrame"
          />
        </div>
        {/*  eslint-disable-next-line */}
        <a className="close-popup">Close</a>
      </div>
    </section>
  );
};

export default Intro;