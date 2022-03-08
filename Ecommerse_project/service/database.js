import {MongoClient} from 'mongodb';

// connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// database name
const dbName = 'eCommerceProject';
let db;
async function initConnection() {
    await client.connect();
    console.log('Connected successfully to server');
    db = client.db(dbName);
}

export const connection = initConnection;
export const database = db;