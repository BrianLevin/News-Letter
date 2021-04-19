
const express = require("express");
const bodyParser = require ("body-parser");

const request = require("request");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function (req, res) {

    res.sendFile (__dirname  + "/signup.html");

});

app.post ("/", function (req,res){

    var firstName = req.body.fName;
    var lastName = req.body.lName;
    var email = req.body.email;

 var data=  {
members:  [
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
var jsonDAta = JSON.stringify(data);

});


app.listen(3000, function () {
    console.log("Server is running on port 3000!");
  });


  // API KEY



  //c92f3f4c13f9e37945b1d2112a4d6b15-us1

  // list id

  // 69c14344df
