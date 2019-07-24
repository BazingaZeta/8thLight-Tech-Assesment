var express = require("express");  //requesting Express, node js framework
var app = express();

//set port

var port = process.env.PORT || 8080

app.use(express.static(__dirname)); //allows us to serve static files

//routes

app.get("/", function(req, res) {
	res.render("index");

})

app.listen(port, function() {
	console.log("app running");
})