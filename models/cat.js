let client = require('../dbConnection');

let collection = client.db().collection('Cat');
const {ObjectId } = require('mongodb');

async function postCat(cat, callback){
    try {
        await collection.insertOne(cat);    
        callback(null, 'success');
    } catch(e) {
        callback(e, null);
    }
}
async function getAllCats(callback){
    const cursor = collection.find();
    callback(null, await cursor.toArray());
}


async function removeCat(id, callback){
    await collection.deleteOne({ _id: (new ObjectId(id))});
    callback(null, true);
}

module.exports = {postCat, getAllCats, removeCat};