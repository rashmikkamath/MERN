import React from "react";
import ReactDOM from "react-dom";
import Gallery from "./Gallery";
import Header from "./Header";
import Footer from "./Footer";

export default class App extends React.Component{

	
	render(){
		
		return( 
		<div>
			<Header/>
		    <div className="container">
		    	<Gallery/>
		    </div>
		    <Footer/>	    
		</div>
	);

	}


}
