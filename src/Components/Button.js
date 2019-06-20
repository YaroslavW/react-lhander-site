import React from 'react';

const Button = (props) => {
  return (
    <li className={props.classBlock}>
      {/* eslint-disable-next-line */}
      <a href={props.link} className="button round large" title="">
        <i className={props.classI} />
        {props.name}
      </a>
    </li>
  );
};

export default Button;