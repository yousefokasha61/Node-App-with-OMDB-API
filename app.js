var express = require("express");
var app = express();
var request = require("request");
app.set("view engine", "ejs");

app.get("/",(req, res)=>{
    res.render("search");
});

app.get("/results", (req, res)=>{
    var query = req.query.title;
    var url = "http://www.omdbapi.com/?apikey=thewdb&s=" + String(query);
    request(url, (err, response, body)=>{
        if(!err && response.statusCode == 200){
            var data = JSON.parse(body);
            res.render("home", {data: data});
        }
    });
});

app.listen(3000, ()=>{
    console.log("Server has Started");
});

