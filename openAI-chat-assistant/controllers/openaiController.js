const openai = require('../config/openaiConfig');


const generateMeta = async (title) => {


    const description = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{
            role: "user",
            content: `Act as a Software Developer "${title}"`
        }],
        maxTokens: 60,
    })


    console.log(description.data.choices[0].content);
}
module.exports = { generateMeta }