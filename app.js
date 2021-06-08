

const express = require("express");

const bodyParser = require("body-parser");

const request = require("request");

const https = require("https");



const app = express();



app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended: true}));



app.get("/", function(req, res){

res.sendFile(__dirname + "/signup.html")

});



app.post("/", function(req, res){

const firstName = req.body.fName;

const lastName = req.body.lName;

const email = req.body.email;



const data = {

members:[

{

email_address: email,

status: "subscribed",

merge_fields: {

FNAME: firstName,

LNAME: lastName

}

}

]

}



const jsonData = JSON.stringify(data);



const url ="https://us1.api.mailchimp.com/3.0/lists/69c14344df";



const options = {

method: "POST",

auth: "Brian:2accfc82cdafa2bc780f2d928bbe8b97-us1"

}



const request = https.request(url, options, function(response){

    if (response.statusCode === 200) {

        res.sendFile( __dirname + "/success.html");

    } else {
res.redirect( "/failure");

    }

response.on("data", function(data){

console.log(JSON.parse(data));

});

});



request.write(jsonData);

request.end();



});
// route to the failure page  after failed sign in attempt
app.get("/failure", function(req,res){
// directed to the fail.html page
    res.sendFile( __dirname + "/failure.html");
});

app.listen(process.env.PORT || 3000, function(){

console.log("Server is running on port 3000!");

});




  // API KEY



  //c92f3f4c13f9e37945b1d2112a4d6b15-us1

  // list id

  // 69c14344df
