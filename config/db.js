import mongoose from 'mongoose';


const MONGO_URI = 'your_mongodb_server_here'


const connectDB = async () => {
    try {mongoose.connect(MONGO_URI,{
	    useNewUrlParser: true,
	    useUnifiedTopology: true
        })
        console.log("Database in connected");
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
}

export default connectDB;


