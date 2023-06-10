const openai = require('../config/openaiConfig');


const generateMeta = async (req,res) => {
    console.log("api hitted for generate meta")
title = req.body.title;

    const description = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{
            role: "user",
            content: `Act as a Software Developer "${title}"`
        }],
        maxTokens: 60,
    })


res.json(description.data.choices[0].text);
}
module.exports = { generateMeta }