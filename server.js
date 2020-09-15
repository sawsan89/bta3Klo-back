const express = require('express');
const app = express();
const mongoose =require('mongoose');
const PORT = process.env.PORT || 8080
const { MONGOURI } = require('./keys');


const bodyParser = require('body-parser');
const cors = require('cors');



require('./models/user')
app.use(express.json())
app.use(require('./routes/auth'))


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