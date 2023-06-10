const openai = require('../config/openaiConf');


const generateImage = async (req, res) => {
    console.log(req.body);

    const prompt = req.body;

    const image = await openai.createImage({

        prompt: prompt,
        n: 1,
        size: '512x512',
    })

res.json({
    url: image.data[0].url
})

    
}

module.exports = { generateImage }