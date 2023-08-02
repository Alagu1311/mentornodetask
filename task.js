import express from 'express';
import {client} from './connection.js';
const app = express()
const port = 8000;

 const students = await client.db("studentlist").collection("studentlist").find().toArray()
    const Mentors = await client.db("Mentorslist").collection("Mentorlist").find().toArray()
    
app.get("/Mentorslist", async (req, res) => {
    
    
    console.log(Mentors)
    if (Mentors) {
        return res.status(400).json({Data:Mentors})
    }
    else {
        console.error();
    }
})


app.get("/students", async (req, res) => {
    try {
       
        if (students.length == 0) {
            res.send(200).json({Message:"Internal server error"})
        }
        else {
            res.send(students)
        }


    } catch (error) {
        console.log(error)
        
    }
    
})


app.get("/studmen", async (req, res) => {

    try {
        
        const students = await client.db("studentlist").collection("studentlist").find().toArray()
        const Mentors = await client.db("Mentorslist").collection("Mentorlist").find().toArray()
      
        let mentordata = students;

        const stud1 = mentordata.find((val) => val.Nameame == "Alagu")
        const men1 = Mentors.find((val) => val.Nameame == "Murali")
        const array = []
        array.push(men1,stud1)
        res.send(array)
        
        const stud2 = mentordata.find((val) => val.Name == "Ajeeth")
        const men2 = Mentors.find((val) => val.Name == "Ramesh")
        const array1 = []
        array1.push(men2,stud2)
        res.send(array1)

        const stud3 = mentordata.find((val) => val.Name == "Manoj")
        const Men3 = Mentors.find((val) => val.Name == "sriram")
        const array2 = []
        array2.push(Men3,stud3)
        res.send(array2)
        
        
      

       
        
    } catch (error) {
        console.log(error)
    }
})

app.get("/NotAssignMen", async (req, res) => {
     
    
    const studentkey = Object.keys(students)
    const studentdata = studentkey.filter((val) => val !== "Mentors")
    res.send(studentdata)


})

app.get("/partstud", async (req, res) => {
    try {
       
        const studentres = students.filter((val) => val.Name == "Manjoy")
        const studentres1 = studentres.find((val) => val.Mentor == "Rahul")
        const Array=[]
        Array.push(studentres1)
        res.send(Array)
    
   } catch (error) {
    
        
   }
    
    
    
})

app.listen(port, () => console.log(`server runs in localhost ${port}`))


