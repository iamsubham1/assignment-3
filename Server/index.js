const express = require('express');
const app = express();
const port = 6060;
const connectToMongo = require('./db')

const server = async () => {

    app.use(express.json());


    app.use('/api/auth', require('./routes/authRoutes'));

    app.get('/health', (req, res) => {
        res.send("hello");

    })


    app.listen(port, () => {
        console.log(`server is running on port ${port}`)
    });

}


const initalizeApp = async () => {

    await connectToMongo();
    await server();

}



initalizeApp();