
const { generateImage } = require('./controllers/openaiController');

const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r1.question('What would you like to generate an image of? ', generateImage)