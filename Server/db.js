const mongoose = require('mongoose');
const MONGODB_URI = "mongodb+srv://das1998lipun:K34cazoAgeUisKqB@cluster0.d2kqijb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";


const connectToMongo = async () => {
    try {
        await mongoose.connect(MONGODB_URI);
        console.log("connected to db");
    } catch (error) {
        console.log(error);
        process.exit();
    }
}

module.exports = connectToMongo;