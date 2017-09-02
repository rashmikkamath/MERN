import React from "react";
import ReactDOM from "react-dom";

export default class App extends React.Component{

	render(){
		return( 
		<div>
		
		    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
		      <div className="container">
		        <a className="navbar-brand" href="#">
		          <img src="http://placehold.it/300x60?text=Logo" width="150" height="30" alt=""/>
		        </a>
		        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
		          <span className="navbar-toggler-icon"></span>
		        </button>
		        <div className="collapse navbar-collapse" id="navbarResponsive">
		          <ul className="navbar-nav ml-auto">
		            <li className="nav-item active">
		              <a className="nav-link" href="#">Home
		                <span className="sr-only">(current)</span>
		              </a>
		            </li>
		            <li className="nav-item">
		              <a className="nav-link" href="#">About</a>
		            </li>
		            <li className="nav-item">
		              <a className="nav-link" href="#">Services</a>
		            </li>
		            <li className="nav-item">
		              <a className="nav-link" href="#">Contact</a>
		            </li>
		          </ul>
		        </div>
		      </div>
		    </nav>

		    
		    <div className="container">
		      <h1 className="mt-5">Logo Nav by Start Bootstrap</h1>
		      <p>The logo in the navbar is now a default Bootstrap feature in Bootstrap 4! Make sure to set the width and height of the logo within the HTML. For best results, it's recommended that you use an SVG image as your logo.</p>
		    </div>
		    
		</div>
	);

	}




}
