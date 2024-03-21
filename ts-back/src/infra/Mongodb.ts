import { MongoClient } from 'mongodb'
import dotenv from 'dotenv';

dotenv.config();

// Connection URL
if (!process.env.MONGODB_URI) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}
const url = process.env.MONGODB_URI;
const client = new MongoClient(url);

// Database Name
const dbName = 'db-contacts';

export default async function mongodb() {
  // Use connect method to connect to the server
  await client.connect();
//   console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('documents');
    // the following code examples can be pasted here...

  return 'Connected successfully to server';
}

mongodb()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
  




