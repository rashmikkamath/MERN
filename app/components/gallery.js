import React from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';

let imageUrls =['../images/pic1.jpg',
				'../images/pic2.jpg',
				'../images/pic3.jpg'];

export default class Gallery extends React.Component {
	renderImage(imageUrl) {
    return (
      <div>
        Hi
      </div>
    );
  }

	
	
	render(){

		
		return(
			<div>
				 <h1 className="my-4 text-center text-lg-left">Thumbnail Gallery</h1>
				 	

      			<div className="row text-center text-lg-left">
      				<div className="col-lg-3 col-md-4 col-xs-6">
      					<a href="#" className="d-block mb-4 h-100">
      					
			            	
      					
			         	</a>
        			</div>
				</div>
			</div>




		);
	}

}
