const express = require('express');
const app = express();
// importing file "conn.js" from db folder
require('./db/conn');

const port = process.env.PORT || 3000;



app.get('/', (req, res) =>{
    res.send('welcome to your project');
})

app.listen(port, (req, res) =>{
    console.log('server is running on port ' + port);
})
