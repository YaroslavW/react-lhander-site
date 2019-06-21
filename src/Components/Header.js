import React from "react";

const Header = ({ data }) => {
  
  if(data){
        var nav = data.item.map((val, index) => (
      <li className={val.classLi} key={index}>
        <a className="smoothscroll" href={val.link} title="">
          {val.title}
        </a>
      </li>
        ));
  }
  return (
    <header>
      <div className="row">
        <div className="logo">
          <a href="index.html">Lhander</a>
        </div>
        <nav id="main-nav-wrap">
          <ul className="main-navigation">
            {nav}
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
