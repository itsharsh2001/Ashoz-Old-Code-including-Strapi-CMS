import express, { application } from "express";
import cors from 'cors';
import fs from 'fs';
import mongoose from 'mongoose';
import morgan from "morgan";
require('dotenv').config();

//create express app
const app = express();

//db
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("DB CONNECTED")).catch((err) => console.log('DB CONNECTION ERR => ', err))

//apply middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//route
fs.readdirSync('./routes').map((route) => app.use('/api', require(`./routes/${route}`)))

//port
const port = process.env.PORT;

app.listen(port, () => console.log(`Server is running on port ${port}`))