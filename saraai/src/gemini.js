let apiKey="AIzaSyBMJghL4zW8EkPcq0gJH1gWEFMS4l9NCZw"

const {
    GoogleGenerativeAI,
    // HarmCategory,
    // HarmBlockThreshold,
  } = require("@google/generative-ai");
  
//   const apiKey = process.env.GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash-exp",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 20,
    responseMimeType: "text/plain",
  };
  
  async function run(prompt) {
    const chatSession = model.startChat({
      generationConfig,
      history: [
      ],
    });
  
    const result = await chatSession.sendMessage(prompt);
    return result.response.text();
  }
  
   export default run;