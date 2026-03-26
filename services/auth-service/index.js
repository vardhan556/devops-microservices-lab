const express = require("express");
const app = express();
app.use(express.json());

app.get('/health', (req,res)=>{
    res.json({service: "auth-service", staus: "running" })
})

app.post('/login',(req,res)=>{
    res.json({message: "login successfull"})
})

app.listen(3001, ()=>{
    console.log("Auth service running on port 3001")
})