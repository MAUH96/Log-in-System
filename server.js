const express = require("express"); //initializes the framework
const app = express();// express module bindid to the variab "app0"
const mongoose = require("mongoose");
//flash messages are shown after a redirect
const flash = require('connect-flash');
// flash messages are stored in a session
const session = require('express-session');
//DB configuration
const db = require('./config/keys_dev').MongoURI;
//const bodyParser = require("body-parser"); // allow to gram value for <body> by their name property  
const expressLayouts = require("express-ejs-layouts");
//setting up passport for config
const passport = require('passport');
require('./config/passport')(passport);
//to access assets in public file
app.use(express.static('public'));


//connect to Mongo db
mongoose
  .connect(db, {useNewUrlParser:true }) // Let us remove that nasty deprecation warrning :)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

  app.use(express.urlencoded({extended:true})); // .urlEncoded is used for getting data from an html form 
  // extend: true allows to use nested code;
 
   
  //Exprsess Session
  app.use(session({
    secret:'secret',
    resave: true,
    saveUninitialized: true
  }));

  app.use(passport.initialize());
  app.use(passport.session());

  //use flash
  app.use(flash());

  //set global flash variables
  app.use((req,res,next) => {
    res.locals.success_flash=req.flash('success_flash');
    res.locals.error_flash=req.flash('error_flash');
    res.locals.error =req.flash('error');
    next();
  });

  //routes= little server packages 
  //index is the welcome page and users for loging
  app.use("/", require("./routes/index"));
  app.use("/users", require("./routes/users"));
  


  app.set('view engine', 'ejs');
  app.use(expressLayouts);

app.listen(5000, ()=>{
    console.log("server has started on port 5000");
});

