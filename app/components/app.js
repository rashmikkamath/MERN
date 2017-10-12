import React from "react";
import ReactDOM from "react-dom";
import Gallery from "./Gallery";

export default class App extends React.Component{

	
	render(){
		
		return( 
		<div>
		
		    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
		      <div className="container">
		        <a className="navbar-brand" href="#">Start Bootstrap</a>
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
		    	<Gallery/>


		    </div>
		   
		    <footer className="py-5 bg-dark fixed-bottom">
		      <div className="container">
		        <p className="m-0 text-center text-white">Copyright &copy; Your Website 2017</p>
		      </div>
		     
		    </footer>

		    
		</div>
	);

	}




}
