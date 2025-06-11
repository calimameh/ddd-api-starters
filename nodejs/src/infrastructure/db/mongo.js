const { MongoClient } = require('mongodb');
const config = require('../../config');

const client = new MongoClient(config.db.uri, { useUnifiedTopology: true });

let db;

async function getDb() {
  if (!db) {
    await client.connect();
    db = client.db(); // Use DB name from URI
  }
  return db;
}

module.exports = {
  insert: async (collection, item) => {
    const db = await getDb();
    await db.collection(collection).insertOne(item);
    return item;
  },

  findAll: async (collection) => {
    const db = await getDb();
    return await db.collection(collection).find({}).toArray();
  },

  findById: async (collection, id) => {
    const db = await getDb();
    return await db.collection(collection).findOne({ id });
  },

  update: async (collection, id, updates) => {
    const db = await getDb();
    const res = await db.collection(collection).findOneAndUpdate(
      { id },
      { $set: updates },
      { returnDocument: 'after' }
    );
    return res.value;
  },

  remove: async (collection, id) => {
    const db = await getDb();
    const res = await db.collection(collection).deleteOne({ id });
    return res.deletedCount > 0;
  }
};
