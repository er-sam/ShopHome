 const express = require('express');
 const path = require('path');
 const app = express();
 const ejs = require('ejs');
//  const expresslayout = require('express-ejs-layouts');
const routes = require('../router/routes')
// .................................................


//  setting views engine 
// app.use(expresslayout)
app.set('views', path.join(__dirname, '../views'));
app.set('view engine','ejs');



// setting public folder 
app.use(express.static(path.join(__dirname,'../public')));
// app.use('/css',express.static(__dirname,'public/css'))


// Router
app.use(routes);




// port setting 
const PORT = 8000;
app.listen(PORT,()=>{
    console.log("Connection established at "+PORT);
})