const express = require("express"); //initializes the framework
const router = express.Router();// express module bindid to the variab "app0"
const {ensureAuthenticated} = require ('../config/authentication');
router.use(express.static('public'));

router.get("/", (req,res)=>{
    res.render('index.ejs');
      
    //when our first page "/" is loaded
    // a response will be given 
    //req--> package of informations  
});

router.get("/dashboard",ensureAuthenticated, (req,res) => {
    res.render('dashboard');
});

module.exports=router;