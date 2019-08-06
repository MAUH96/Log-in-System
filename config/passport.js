const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const passport = require('passport');

//user model module
const User = require('../models/Users');

module.exports= function(passport){
    passport.use(new LocalStrategy({
        usernameField:'email', passwordField: 'pass'},(email,pass,done)=>{
            User.findOne({email:email})
            .then(user =>{
                if(!user){
                    return done(null,false,{message:'Email not registered'});
                
                };
                /**
                 * bcrypt used again as pass is encrypted when stored 
                 * but is a string when submitted 
                 *
                 */
                bcrypt.compare(pass,user.pass,(err, isMatching) => {
                    if (err) throw err;
                    
                    if(isMatching){
                        return done(null, user);
                    }else{
                         return done(null,flase,{message: 'Incorrect password'});
                    }
                });
             })
            .catch(err=>console.log(err));
        })
        );

        /**
         * serializing: used for login sessions which are stored in a cookie 
         * serialzing --> turn user.id or other info into object 
         * deserialize--> turn object back to info during a login session 
         */
        passport.serializeUser((user, done) =>{
            done(null, user.id);
          });
          
          passport.deserializeUser((id, done)=> {
            User.findById(id, (err, user)=> {
              done(err, user);
            });
          });
    }