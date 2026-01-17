
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY;

export const generateTriageResponse = async (userInput: string, history: any[]) => {
  if (!API_KEY) {
    return "API Key is missing. Please check your configuration.";
  }

  const ai = new GoogleGenAI({ apiKey: API_KEY });
  const model = ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: userInput,
    config: {
      systemInstruction: `You are a dual-persona AI system for Priority Plumbing & Drains. 
      Switch between Chloe (Front-Desk/Rebates) and Sam (Emergency Dispatch).
      
      CHLOE: Friendly, ethical. Focus on Home Renovation Savings (HRS) up to $12,000. 
      SAM: Calm, fast, authoritative. Triggers for: gas smell, no heat, water leak, banging noises.
      
      SAFETY RULE: If "gas smell" is mentioned, you MUST say: "For your safety, please hang up, leave the house immediately, and call 911. Once you are safe, call us back."
      
      Collect: Name, Phone, and Heating Type if Chloe.
      Ask for: Home Address and confirm 4-hour response if Sam.`,
    }
  });

  const response = await model;
  return response.text;
};
