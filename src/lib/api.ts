/**
 * API client for communicating with the Portfolio AI backend.
 */

const API_URL = "http://localhost:8000";

export interface ChatRequest {
  question: string;
}

export interface ChatResponse {
  answer: string;
}

export async function askPortfolioAI(question: string): Promise<string> {
  const response = await fetch(`${API_URL}/chat`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      question,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to get response from Portfolio AI.");
  }

  const data: ChatResponse = await response.json();

  return data.answer;
}
