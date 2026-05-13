import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

const date = new Date();
const dayIndex = date.getDay(); 

app.listen(port, (req, res) => {
    console.log(`working${port}`);
})

app.get("/",(req,res)=>{
    res.render(__dirname + "/view/index.ejs", { DayNo: dayIndex})

})

// app.get("/",(req,res)=>{
//     res.sendFile(__dirname+"/index.html")
// })
// app.post("/submit-data",(req,res)=>{
// const user=req.body.user;
// res.render(__dirname+"/view/index.ejs",{name:user})

// })

