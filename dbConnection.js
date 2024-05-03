
const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://maddilaharshith:%23123Harsha@cluster0.u4tbl5r.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri);

client.connect(err => {
    if (!err) {
        console.log('DB connected');
    } else {
        console.log(err);
    }
});

module.exports = client;