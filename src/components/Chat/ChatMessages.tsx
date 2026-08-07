"use client";

import { useEffect, useRef } from "react";

import ChatMessage from "./ChatMessage";

import TypingIndicator from "./TypingIndicator";

export type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

type ChatMessagesProps = {
  messages: Message[];
  isLoading: boolean;
};

export default function ChatMessages({
  messages,
  isLoading,
}: ChatMessagesProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    containerRef.current.scrollTo({
      top: containerRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages.length]);

  return (
    <div
      ref={containerRef}
      className="flex flex-1 flex-col gap-4 overflow-y-auto p-6 chat-scrollbar"
    >
      {messages.length === 0 && (
        <div className="flex h-full items-center justify-center text-center">
          <div>
            <h2 className="mb-2 text-xl font-semibold text-white">
              Portfolio AI
            </h2>

            <p className="text-zinc-400">
              Ask me anything about André, his projects, experience, skills, or
              AI journey.
            </p>
          </div>
        </div>
      )}

      {messages.map((message) => (
        <ChatMessage
          key={message.id}
          role={message.role}
          content={message.content}
        />
      ))}

      {isLoading && <TypingIndicator />}
    </div>
  );
}
