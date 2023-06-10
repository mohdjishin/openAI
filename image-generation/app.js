
const { generateImage } = require('./controllers/openaiController');

const express = require('express');


// app setup
const app = express();

// middleware
app.use(express.json());



// routes
app.post('/openai/image', generateImage);


app.listen(3000, () => {
    console.log('listening on port 3000');
    });