import { MongoClient } from "mongodb";

const Mongostr = "mongodb://127.0.0.1:27017/";

export async function dbconnection() {
    const client = new MongoClient(Mongostr)
    await client.connect()
    return client
}
 
export const client = await dbconnection();