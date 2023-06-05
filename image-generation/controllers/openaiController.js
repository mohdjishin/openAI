const openai = require('../config/openaiConf');


const generateImage = async (prompt) => {

const image= await openai.createImage({

prompt: prompt,
n:1,
size: '512x512',})

}

module.exports = { generateImage}