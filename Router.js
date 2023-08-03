import express from 'express';
import { Mentordata, studetsdata } from './Student.js';
const router = express.Router()
        const studdata = studetsdata()
        const Mendata=Mentordata()


router.get("/studentlist", async (req, res) => {
    try {
      
        res.send(studdata)
    
    } catch (error) {
        console.log(error)
    
}
})

router.get("/Mentorlist", async (res) => {
    try {
       
        res.send(Mendata)
        
    } catch (error) {
        console.log(error)
        
    }
})

router.get("/studentmen", async (req, res) => {
    try {
        
       
       

        const stud1 = studdata.find((val) => val.Nameame == "Alagu")
        const men1 = Mendata.find((val) => val.Nameame == "Murali")
        const array = []
        array.push(men1,stud1)
        res.send(array)
        
        const stud2 = studdata.find((val) => val.Name == "Ajeeth")
        const men2 = Mendata.find((val) => val.Name == "Ramesh")
        const array1 = []
        array1.push(men2,stud2)
        res.send(array1)

        const stud3 = studdata.find((val) => val.Name == "Manoj")
        const Men3 = Mendata.find((val) => val.Name == "sriram")
        const array2 = []
        array2.push(Men3,stud3)
        res.send(array2)
        
    }
    catch (error) {
        
    }
})

router.get("/NotAssignMen", async (req, res) => {
     
    try {
        const studkeys = Object.keys(studdata)
     const studentdata = studkeys.filter((val) => val !== "Mentors")
    res.send(studentdata)
        
    } catch (error) {
        
    }
})
      
router.get("/partstud", async (req, res) => {
    try {
       
        const studentres = studdata.filter((val) => val.Name == "Manjoy")
        const studentres1 = studentres.find((val) => val.Mentor == "Rahul")
        const Array=[]
        Array.push(studentres1)
        res.send(Array)
    
   } catch (error) {
    
        
    }
    
    
    
 })


export const Mainrouter = router;