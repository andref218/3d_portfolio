"use client";

import { FormEvent, KeyboardEvent, useState } from "react";
import { SendHorizontal } from "lucide-react";

type ChatInputProps = {
  onSendMessage: (question: string) => void;
  isLoading: boolean;
};

export default function ChatInput({
  onSendMessage,
  isLoading,
}: ChatInputProps) {
  const [question, setQuestion] = useState("");

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const trimmedQuestion = question.trim();

    if (!trimmedQuestion || isLoading) return;

    onSendMessage(trimmedQuestion);

    setQuestion("");
  }

  function handleKeyDown(event: KeyboardEvent<HTMLTextAreaElement>) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();

      handleSubmit(event as unknown as FormEvent);
    }
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex items-center gap-3 rounded-2xl border border-zinc-800 bg-zinc-900 p-3"
      >
        <textarea
          rows={1}
          value={question}
          disabled={isLoading}
          placeholder="Ask me about André..."
          onChange={(e) => setQuestion(e.target.value)}
          onKeyDown={handleKeyDown}
          className="max-h-40 flex-1 resize-none bg-transparent text-sm text-white outline-none 
        placeholder:text-zinc-500 placeholder:whitespace-nowrap "
        />

        <button
          type="submit"
          disabled={isLoading || !question.trim()}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white transition hover:bg-blue-500 
        disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer"
        >
          <SendHorizontal size={18} />
        </button>
      </form>
      {isLoading && (
        <p className="mt-3 text-center text-xs text-zinc-500">
          AI responses may take a few seconds.
        </p>
      )}
    </>
  );
}
