import axios from "axios";

export const generateAnswer = async (input, setAnswer) => {
  try {
    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${
        import.meta.env.VITE_GOOGLE_API_KEY
      }`,
      {
        contents: [
          {
            parts: [{ text: input }],
          },
        ],
      }
    );
    setAnswer(response.data.candidates[0].content.parts[0].text);
  } catch (error) {
    console.error("Error generating answer:", error);
    throw error;
  }
};
