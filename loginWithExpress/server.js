const express = require('express');
const app = express();
const path = require('path');
const bodyparser = require('body-parser');
const session = require('express-session');
const { v4: uuidv4 } = require('uuid');

const router = require('./router');

const port = process.env.PORT || 3000;

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

// load static server files
app.use('/static', express.static(path.join(__dirname, '/public')));


app.use(session({
    secret: uuidv4(), // secret key
    resave: false,
    saveUninitialized: true
}));


app.use('/route',router);


// home route 
app.get('/', (req, res) => {
    res.render('base', { title: "Login system" });
});

app.listen(port, (req, res) => {
    console.log(`Server is running on port ${port}`);
});