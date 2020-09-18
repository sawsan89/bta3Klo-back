const mongoose = require("mongoose");
const url =
    "mongodb+srv://smunawer:smunawer@bta3kolo.vymhw.gcp.mongodb.net/bta3kolo?retryWrites=true&w=majority";
const { MongoClient } = require("mongodb");
const dotenv = require('dotenv');

dotenv.config();
const uri = process.env.MONGO || url;
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => {
    console.log("We are connected");
});
module.exports = db;