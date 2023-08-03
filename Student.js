import { client } from "./connection.js"

export async function studetsdata() {
     return await client.db("studentlist").collection("studentlist").find().toArray()
}

export async function Mentordata() {
    return  await client.db("Mentorslist").collection("Mentorlist").find().toArray()
}
