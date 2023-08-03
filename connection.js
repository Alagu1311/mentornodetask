import { MongoClient } from "mongodb";

const Mongostr = "mongodb+srv://Alagu:Alagu1311@cluster0.zrgmeld.mongodb.net/";

export async function dbconnection() {
    const client = new MongoClient(Mongostr)
    await client.connect()
    return client
}
 
export const client = await dbconnection();