const express = require('express');

const app = express();

app.listen(3001, () => {
    console.log("Listening on port 3000")
})

app.get('/', async (req,res) => {
    res.send("hello, friend!");
});