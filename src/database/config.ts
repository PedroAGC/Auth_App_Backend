import mongoose from 'mongoose';

const dbConnection = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('DB Online')
    } catch (error) {
        console.error('Error connecting bd');
    }
}

export default dbConnection;