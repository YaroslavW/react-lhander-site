import React from 'react';

const Header = () => {
  return (
    <header>
      <div className="row">
        <div className="logo">
          <a href="index.html">Lhander</a>
        </div>
        <nav id="main-nav-wrap">
          <ul className="main-navigation">
            <li className="current">
              <a className="smoothscroll" href="#intro" title="">
                Home
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#process" title="">
                Process
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#features" title="">
                Features
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#pricing" title="">
                Pricing
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#faq" title="">
                FAQ
              </a>
            </li>
            {/*  eslint-disable-next-line */}
            <li className="highlight with-sep">
              {/*  eslint-disable-next-line */}
              <a href="#" title="">
                Sign Up
              </a>
            </li>
          </ul>
        </nav>
        {/*  eslint-disable-next-line */}
        <a className="menu-toggle" href="#">
          <span>Menu</span>
        </a>
      </div>
    </header>
  );
};

export default Header;