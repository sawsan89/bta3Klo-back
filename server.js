var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
const mongoose =require('mongoose');
const { MONGOURL } = require('./keys');

require('./models/user')
//mongoose.model('User')

const PORT = process.env.PORT || 8080
const {MONGOURI} = require('./keys')


mongoose.connect(MONGOURI,{
    useNewUrlParser:true,
    useUnifiedTopology: true

})
mongoose.connection.on('connected',()=>{
    console.log("conneted to mongo yeahh")
})
mongoose.connection.on('error',(err)=>{
    console.log("err connecting",err)
})

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


app.get('/', (req, res) => {
    res.send('Hello World!');
  });

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT} Visit https://localhost:${PORT}`)
})