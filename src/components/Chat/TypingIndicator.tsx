export default function TypingIndicator() {
  return (
    <div className="flex justify-start">
      <div className="rounded-2xl border border-zinc-800 bg-zinc-900 px-5 py-4 shadow-sm">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 animate-bounce rounded-full bg-zinc-400 [animation-delay:-0.3s]" />

          <span className="h-2 w-2 animate-bounce rounded-full bg-zinc-400 [animation-delay:-0.15s]" />

          <span className="h-2 w-2 animate-bounce rounded-full bg-zinc-400" />
        </div>
      </div>
    </div>
  );
}
