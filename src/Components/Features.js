import React from 'react';

const Features = ({data}) => {
		if(data){
		var supcaption = data.supcaption;
		var caption = data.caption;
		var text = data.text;
		var item = data.items.map((block, index) => (
      <div className="bgrid feature" key={index}>
        <span className="icon">
          <i className={block.class_icon} />
        </span>
        <div className="service-content">
          <h3 className="h05">{block.caption}</h3>
          <p>
            {block.text}
          </p>
        </div>
      </div>
    ));
		}
  return (
	<section id="features">

		<div className="row section-intro">
   		<div className="col-twelve with-bottom-line">
   			<h5>{supcaption}</h5>
   			<h1>{caption}</h1>
   			<p className="lead">{text}</p>
   		</div>   		
   	</div>

   	<div className="row features-content">
   		<div className="features-list block-1-3 block-s-1-2 block-tab-full group">
					{item}
	    </div> 		
   	</div>
		 	
	</section> 
  );
};

export default Features;