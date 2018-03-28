const express = require('express');
const app = express();
const path = require("path");
const axios = require('axios');

const PORT = process.env.PORT || 3000;

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.get('/', function (req, res) {
    res.render("index", { title: 'Hey Hey Hey!', message: 'Yo Yo'});
});

app.get('/axios', function (req, res) {
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(function (response) {
            res.render("blog", { article: response.data});
        })
        .catch(function (error) {
            console.log(error);
        });
});

app.listen(PORT, () => console.log('Example app listening on port ' + PORT + '!'));