/**
 * API client for communicating with the Portfolio AI backend.
 */

const API_URL = import.meta.env.VITE_API_URL;

export interface ChatRequest {
  question: string;
}

export interface ChatResponse {
  answer: string;
}

export async function wakeUpAPI(): Promise<void> {
  try {
    await fetch(`${API_URL}/health`);
  } catch {
    // The request is only used to wake up the Render instance.
    // If it fails, the normal chat request will still be attempted later.
  }
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

  if (response.status === 429) {
    throw new Error(
      "You've reached the limit of 20 questions per hour. Please try again later.",
    );
  }

  if (!response.ok) {
    throw new Error("Failed to get response from Portfolio AI.");
  }

  const data: ChatResponse = await response.json();

  return data.answer;
}
