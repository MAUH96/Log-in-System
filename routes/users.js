const express = require("express"); //initializes the framework
const router = express.Router();// express module bindid to the variab "app"
const bcrypt = require('bcryptjs');
// User Model Db
const User = require("../models/Users");
const passport = require('passport');

router.use(express.urlencoded({extended:true}))
router.use(express.static('public'));

//login page 
router.get("/login",(req,res) =>{
    res.render('login.ejs');
});

//register
router.get("/register",(req,res) =>{
    res.render('register.ejs');
});

//register form handler
router.post('/register', (req,res) =>{
    let errors = [];
   const {name,email,pass,pass2}=req.body;
        
   if(!name || !email || !pass || !pass2 ){
       errors.push ({msg: 'Please fill in all fields '});
   }

   if (pass!==pass2){
       errors.push({msg: 'Passwords do not match'});
   }
   if(pass.length<6){
       errors.push({msg: 'Password should be at least 6 characters'});

   }
    //this make sure that the error is displayed and also 
    // avoid fields to get erased if error happens 
   if(errors.length>0){
        res.render('register',{
            errors,
            name,
            email,
            pass,
            pass2
        });
   }else{

       User.findOne({email: email})
       .then(user => {
           if(user){
               errors.push({msg: "Email already registered"});
               res.render('register',{
                errors,
                name,
                email,
                pass,
                pass2
            });
            } else{
                
                const newUser = new User({
                    name,
                    email,
                    pass
                });

                //Hash Password
                bcrypt.genSalt(10,(err,salt)=> {
                    bcrypt.hash(newUser.pass,salt,(err,hash)=>{
                        if(err)throw err;
                        //seting password in the db to hashed 
                        newUser.pass=hash;
                        /** saving the user and redircting it to the next page 
                        *   once registered
                        * saving also creates db in cluster
                        */
                        newUser.save()
                            .then(user => {
                                req.flash('success_flash', 'You can log in now');
                                res.redirect("/users/login");
                            }
                            )
                            .catch(err => console.log(err));
                    })
                })


            }
       });
   }
});


router.post("/login",(req,res,next) => {
    passport.authenticate('local',{
        successRedirect:'/dashboard',
        failureRedirect:'/users/login',
        failureFlash:true
    })(req,res,next);

});

router.gety('/logout',(req,res)=>{
    req.logout();
    res.redirect('/');
});



    



module.exports=router;



