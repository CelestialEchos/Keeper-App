import "./config.js";
import express from "express";
// import cors from "cors";
import bodyParser from "body-parser";
import noteRouter from './routes/note.router.js'

const app = express();

// app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());
app.use("/api/v1/notes", noteRouter);

app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port:${process.env.PORT}`);
})