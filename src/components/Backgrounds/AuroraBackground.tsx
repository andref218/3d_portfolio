export default function AuroraBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden aurora-mask">
      {/* Left */}
      <div className="absolute -left-40 top-40 h-[500px] w-[500px] rounded-full bg-violet-500/20 blur-[140px] animate-aurora-slow z-50" />

      {/* Bottom Left */}
      <div className="absolute left-10 bottom-20 h-[350px] w-[350px] rounded-full bg-cyan-400/15 blur-[120px] animate-aurora-medium z-50" />

      {/* Right */}
      <div className="absolute -right-40 bottom-24 h-[500px] w-[500px] rounded-full bg-fuchsia-500/20 blur-[140px] animate-aurora-fast z-50" />
    </div>
  );
}
