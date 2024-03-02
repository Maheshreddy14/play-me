import { join } from 'path'; 
import express from 'express';
import { SocketIO } from 'socket.io';

const PORT=3000;
const app=express();

app.set("view engine","pug")
app.set("views",join(__dirname,"views"))
app.use(express.static(join(__dirname,"static")))
app.get("/",(req,res)=>res.render("home"))

const handlelistening=()=>{
    console.log(`server running: http://localhost:${PORT}`)
}

const server=app.listen(PORT,handlelistening)

const io=SocketIO(server)