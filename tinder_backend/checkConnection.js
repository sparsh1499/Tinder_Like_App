// const { MongoClient } = require('mongodb');
import {MongoClient} from "mongodb";

async function main() {
    const uri = "mongodb://admin:DV8vas1hZYVIu3BB@cluster0-shard-00-00.escn4.mongodb.net:27017,cluster0-shard-00-01.escn4.mongodb.net:27017,cluster0-shard-00-02.escn4.mongodb.net:27017/BLAZE?ssl=true&replicaSet=atlas-rm8asd-shard-0&authSource=admin&retryWrites=true&w=majority";
    const client = new MongoClient(uri);
    try {
        // Connect to the MongoDB cluster
        await client.connect();

        // Make the appropriate DB calls
        await listDatabases(client);

    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

async function listDatabases(client){
    let databasesList = await client.db().admin().listDatabases();
 
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};
main().catch(console.error);