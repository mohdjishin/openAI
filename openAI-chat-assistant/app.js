
const {generateMeta} = require('./controllers/openaiController');


const express = require('express');

app = express();


app.use(express.json());

app.get('/openai/generateMeta', generateMeta);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
}
);