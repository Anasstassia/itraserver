const express = require('express');
const mongoose = require('mongoose');
const authRouter = require('./authRouter');

const PORT = process.env.PORT || 5001;
const app = express();

app.use(express.json());
app.use('/auth', authRouter);

const start = async () => {
    try {
        await mongoose.connect(`mongodb+srv://qwerty:qwerty123@cluster0.46ir8ue.mongodb.net/auth?retryWrites=true&w=majority`);
        app.listen(PORT, () => console.log(`server started on port ${PORT}`));
    } catch (e) {
        console.log(e);
    }
}

start();







// const server = http.createServer((req, res) => {
//     console.log('Server request');
//     console.log(req.url, req.method);
//     res.setHeader('Content-Type', 'text/html');

//     res.write('Hello');
//     res.end();
// });

// server.listen(3000, 'localhost', (error) => {
//     error ? console.log(error) : console.log(`listening port ${PORT}`);
// })