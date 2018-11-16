const express = require('express');
const fs = require('fs');
const app = express();
const bodyParser = require('body-parser');

app.use(express.static("public"));
app.engine('handlebars',hbs());
app.set('view-engine','handlebars');


app.get("/", function(req,resp){
    resp.render('home');
});



app.listen(5500);