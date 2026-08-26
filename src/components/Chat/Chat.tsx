"use client";

import { useEffect, useState } from "react";

import { askPortfolioAI, wakeUpAPI } from "../../lib/api";

import ChatInput from "./ChatInput";
import ChatMessages, { Message } from "./ChatMessages";

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [backendError, setBackendError] = useState(false);
  const [isBackendReady, setIsBackendReady] = useState(false);

  useEffect(() => {
    async function wakeUp() {
      try {
        await wakeUpAPI();
        setIsBackendReady(true);
      } catch (error) {
        console.error("Failed to wake up API:", error);
        setBackendError(true);
      }
    }

    void wakeUp();
  }, []);

  async function handleSendMessage(question: string) {
    if (!question.trim() || isLoading) return;

    const userMessage: Message = {
      id: crypto.randomUUID(),
      role: "user",
      content: question,
    };

    setMessages((previous) => [...previous, userMessage]);

    setIsLoading(true);

    try {
      const answer = await askPortfolioAI(question);

      const assistantMessage: Message = {
        id: crypto.randomUUID(),
        role: "assistant",
        content: answer,
      };

      setMessages((previous) => [...previous, assistantMessage]);
    } catch (error) {
      console.error(error);

      const assistantMessage: Message = {
        id: crypto.randomUUID(),
        role: "assistant",
        content:
          error instanceof Error
            ? error.message
            : "Sorry, something went wrong while contacting the Portfolio AI.",
      };

      setMessages((previous) => [...previous, assistantMessage]);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="flex w-full flex-col items-center justify-center gap-6 px-4 py-8">
      <div
        className="flex h-[700px] w-full max-w-4xl flex-col overflow-hidden rounded-3xl border 
    border-zinc-800 bg-zinc-950 shadow-2xl"
      >
        {/* Header */}
        <div className="border-b border-zinc-800 px-6 py-5">
          <h2 className="text-lg font-semibold text-white">AI Assistant</h2>

          <p className="mt-1 text-sm text-zinc-400">
            Ask me anything about André, his projects, experience, skills or AI
            journey.
          </p>
          {!isBackendReady && !backendError && (
            <p className="mt-2 flex items-center gap-2 text-xs text-zinc-500">
              <span className="h-2 w-2 animate-pulse rounded-full bg-blue-500"></span>
              Waking up AI assistant... This may take up to a minute. ⚠️
            </p>
          )}

          {backendError && (
            <p className="mt-2 text-xs text-red-400">
              AI assistant is currently unavailable. Please try again later.
            </p>
          )}
        </div>

        {/* Messages */}
        <ChatMessages messages={messages} isLoading={isLoading} />

        {/* Input */}
        <div className="border-t border-zinc-800 p-4">
          <ChatInput
            onSendMessage={handleSendMessage}
            isLoading={isLoading}
            isBackendReady={isBackendReady}
          />
        </div>
      </div>
    </div>
  );
}
