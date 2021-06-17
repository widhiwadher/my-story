const express = require("express")
const app = express();
const port = 8080;
const hbs = require("hbs");
const path = require("path");
const partialsPath = path.join(__dirname, '/views/partials');
const users = require("./users");

app.set('view engine', 'hbs');
hbs.registerPartials(partialsPath);

const json = require("./users.json")
console.log(json);

app.get("/", (req, res) => {
    res.render('index');
})

app.get("/login", (req, res) => {
    res.render('login');
})

app.get("/", (req, res) => {
    res.send("hello world- explore my thoughts");
})

 app.post ("/submit", (req,res) => {
    for (i = 0; i < json.length; i++) {
        var items = json[i];
       console.log(item);
    }   
 });



app.listen(port, (req, res) => {
    console.log("listening at 8080");
})


