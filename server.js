import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import fileUpload from 'express-fileupload';

//ROUTE 
import FileRoutes from './routes/FileRoutes.js';


const app = express();

dotenv.config();

//Connect to DB
connectDB();
app.use(fileUpload({
	limits: {
		filesize: 24*1024*1024},
abortOnLimit: true}));
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());


app.get("/", (req, res) => {
    res.status(200).json({ success: true, message: "File Sharing Api Using Node js" });
})

//Increase download limit



// ROUTING
app.use("/api", FileRoutes);

app.use('/b5dce0f0bb8b502a207ac809fc1a5', express.static('uploads'))


const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`Server is running on ${PORT} PORT`));
