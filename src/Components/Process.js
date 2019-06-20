import React from 'react';

const Process = ({data}) => {
	if(data){
		var supcaption = data.supcaption;
		var caption = data.caption;
		var text = data.text;
		var left_item = data.items_left.map((item, index) => (
      <div className="item" data-item={item.data_item} key={index}>
        <h5>{item.caption}</h5>
        <p>{item.text}</p>
      </div>
    ));
			var right_item = data.items_right.map((item, index) => (
				<div className="item" data-item={item.data_item} key={index}>
					<h5>{item.caption}</h5>
					<p>{item.text}</p>
				</div>
			));
	}
  return (
   <section id="process">  

   	<div className="row section-intro">
   		<div className="col-twelve with-bottom-line">

   			<h5>{supcaption}</h5>
   			<h1>{caption}</h1>

   			<p className="lead">{text}</p>

   		</div>   		
   	</div>

   	<div className="row process-content">

   		<div className="left-side">

   			{/* <div className="item" data-item="1">

   				<h5>Sign Up</h5>

   				<p>Lorem ipsum Cupidatat nostrud non cupidatat ut dolor id eiusmod non minim aute consectetur incididunt tempor irure aute consequat quis voluptate.</p>
   					
   			</div>

   			<div className="item" data-item="2">

	   			<h5>Upload</h5>

	   			<p>Lorem ipsum Cupidatat nostrud non cupidatat ut dolor id eiusmod non minim aute consectetur incididunt tempor irure aute consequat quis voluptate.</p>
   					
   			</div> */}
					 {left_item}
   		</div> 
   		
   		<div className="right-side">
   				
   			{/* <div className="item" data-item="3">

   				<h5>Create</h5>

   				<p>Lorem ipsum Cupidatat nostrud non cupidatat ut dolor id eiusmod non minim aute consectetur incididunt tempor irure aute consequat quis voluptate.</p>
   					
   			</div>

   			<div className="item" data-item="4">

   				<h5>Publish</h5>

   				<p>Lorem ipsum Cupidatat nostrud non cupidatat ut dolor id eiusmod non minim aute consectetur incididunt tempor irure aute consequat quis voluptate.</p>
   					
				 </div> */}
				 {right_item}

   		</div>  

   		<div className="image-part"></div>  			

   	</div> 

   </section>
  );
};

export default Process;