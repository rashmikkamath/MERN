var fs = require('fs');
var express = require('express');
var path= require('path');

//var indexRoutes= require('./routes/index');
var app = express();
//View Engine
/*app.set('view engine','html');
app.engine('html',function(path,options,callback){
	fs.readFile(path,'utf-8',callback);
});*/

//middleware//
app.use(express.static(path.join(__dirname,'../app')));

//Routes
//app.use('/',indexRoutes);

//Error handling for other type of requests

app.use(function(err,req,res,next){
	res.status(err.status || 500);
});

var port=8000;
app.listen(port,function(){
	console.log("running ay localhost + "+port);
})

//Serve app on port

module.exports=app;



