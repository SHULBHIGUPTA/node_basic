const {MongoClient}  = require('mongodb');
const url = "mongodb://localhost:27017";
const database = 'demo_db';
const client = new MongoClient(url);

async function dbConnect() {
    let result = await client.connect();
    let db = result.db(database);
    return db.collection('product');
    // let response = await collection.find({}).toArray();
    // let response = await collection.find({name: 'g 40'}).toArray();
    // console.log(response)
}
module.exports = dbConnect;