var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
var port =  8080;

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


app.get('/', (req, res) => {
    res.send('Hello World!');
  });

app.listen(port, () => {
    console.log(`Server is running on ${port} Visit https://localhost:${port}`)
})