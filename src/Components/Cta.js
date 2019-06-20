import React from 'react';
import Button from './Button';

const Cta = ({data}) => {
  if(data){
    var caption = data.caption;
    var text = data.text;
    var item = data.buttons.map((val, index) => (
      <Button
        classBlock={val.blockName}
        link="http://abcinblog.blogspot.com/"
        classI={val.icon}
        name={val.title}
      />
    ));
  }
  return (
    <section id="cta">
      <div className="row cta-content">
        <div className="col-twelve">
          <h1 className="h01">
            {caption}
          </h1>

          <p className="lead">{text}</p>

          <ul className="stores">

          {item}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Cta;