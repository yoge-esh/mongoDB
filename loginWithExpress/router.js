// const e = require ('express');
var express = require("express");
var router = express.Router();


const credential = {
    email: "admin@gmail.com", 
    password: "admin"
}
// login user 
router.post('/login', (req, res)=> {
    if (req.body.email == credential.email && req.body.password == credential.password) { 
        res.session.user = req.body.email;
        res.redirect('/route/welcome');
    } else {
        res.end('login failed');
    }
});

// route for dashboard/ welcome 
router.get('/welcome', (req, res)=> {
    if (req.session.user) {
        res.render('welcome', {
            user: req.session.user
        });
    } else {
        res.send('Unauthorized user');
    }
});

module.exports = router