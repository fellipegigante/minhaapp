
const express = require("express");

const app = express();

//app.get();

app.get('/',  (req, res) => {
    res.send('<h1 style="color:red;">HELLO WORLD</h1>')
})

app.get('/imghp', function (req, res) {
    res.send('TEST BROW')
})

app.listen(9090);
