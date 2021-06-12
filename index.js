const express = require("express")
 const app = express();
 const port = 8080;
 const hbs = require("hbs");
 const path = require("path");
 const partialsPath = path.join(__dirname, '/views/partials');

 app.set ('view engine', 'hbs');
 hbs.registerPartials(partialsPath);

 app.get("/", (req,res) => {
    res.render('index');
 })

 app.get("/", (req,res)=> {
 res.send("hello world- explore my thoughts");
 })


 app.listen(port, (req,res) => {
     console.log("listening at 8080");
 })

