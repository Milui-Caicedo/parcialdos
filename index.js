const express = require('express');
const fs = require('fs');
const hbs = require('express-handlebars');
const app = express();
const bodyParser = require('body-parser');

app.use(express.static("public"));
app.engine('handlebars',hbs());
app.set('view-engine','handlebars');

var mike = 0;
var sully = 0;
var boo = 0;


app.get("/", function(req,resp){
    resp.render('home');

});

app.get("/mike", function(req,resp){
    resp.render('mike');
    mike+=1;
    console.log(mike);
});

app.get("/sully", function(req,resp){
    resp.render('mike');
    sully+=1;
    console.log(sully);
});

app.get("/boo", function(req,resp){
    resp.render('boo');
    boo+=1;
    console.log(boo);
});

app.listen(5500);