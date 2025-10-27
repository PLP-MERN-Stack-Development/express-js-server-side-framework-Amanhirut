import mongoose from 'mongoose';

//require('dotenv').config();

export const connectDB = async()=>{
    try {
       await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
       });
       console.log('Mongdb connected ...')
    } catch (error) {
        console.error(error.message)
        process.exit(1)
    }
}
