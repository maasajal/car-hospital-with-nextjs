import { MongoClient, ServerApiVersion } from "mongodb";
let client;
let db;
export const connectDB = async () => {
  if (db) return db;
  try {
    const uri = process.env.MONGODB_URI;
    if (!client) {
      client = new MongoClient(uri, {
        serverApi: {
          version: ServerApiVersion.v1,
          strict: true,
          deprecationErrors: true,
        },
      });
      await client.connect(); // Ensure the client is connected
    }
    db = client.db("carHospital");
    return db;
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
    throw error;
  }
};
