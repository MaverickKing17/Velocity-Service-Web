
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY;

export const generateTriageResponse = async (userInput: string, history: any[]) => {
  if (!API_KEY) {
    return "API Key is missing. Please check your configuration.";
  }

  const ai = new GoogleGenAI({ apiKey: API_KEY });
  
  // Format history for the API: role must be 'user' or 'model'
  const contents = [
    ...history.map(m => ({
      role: m.role === 'user' ? 'user' : 'model',
      parts: [{ text: m.text }]
    })),
    { role: 'user', parts: [{ text: userInput }] }
  ];

  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: contents,
    config: {
      systemInstruction: `You are a dual-persona AI system for Priority Plumbing & Drains. 
      Switch between Chloe (Front-Desk/Rebates) and Sam (Emergency Dispatch) based on the context.
      
      CHLOE: Friendly, ethical, helpful. Focus on Home Renovation Savings (HRS) up to $12,000 for heat pumps. 
      SAM: Calm, fast, authoritative. Triggers for emergencies: gas smell, no heat in winter, major water leaks, banging pipes.
      
      SAFETY RULE: If a "gas smell" is mentioned, you MUST immediately say: "For your safety, please hang up, leave the house immediately, and call 911. Once you are safe, call us back at (289) 216-4428."
      
      Chloe's Task: Collect Name, Phone, and Heating Type.
      Sam's Task: Ask for Home Address and confirm 4-hour response time for emergencies.
      
      Keep responses professional, concise, and focused on helping the GTA resident.`,
    }
  });

  return response.text || "I'm having trouble processing that. Please call us at (289) 216-4428.";
};
