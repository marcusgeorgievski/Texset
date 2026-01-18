// Animated colorful background blobs with floating animations
export function BackgroundBlobs() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      <div className="absolute -left-1/4 top-1/4 h-[300px] w-[300px] rounded-full bg-blue-500/15 blur-3xl animate-[float_15s_ease-in-out_infinite]" />
      <div className="absolute -left-1/3 bottom-1/3 h-[250px] w-[250px] rounded-full bg-purple-500/15 blur-3xl animate-[float-reverse_18s_ease-in-out_infinite]" />
      <div className="absolute -left-1/5 top-1/2 h-[270px] w-[270px] rounded-full bg-cyan-500/15 blur-3xl animate-[float-slow_20s_ease-in-out_infinite]" />
      <div className="absolute -right-1/4 top-1/2 h-[280px] w-[280px] rounded-full bg-pink-500/15 blur-3xl animate-[float_16s_ease-in-out_infinite]" />
      <div className="absolute -right-1/3 bottom-1/4 h-[320px] w-[320px] rounded-full bg-violet-500/15 blur-3xl animate-[float-reverse_19s_ease-in-out_infinite]" />
      <div className="absolute left-0 top-1/3 h-[200px] w-[200px] rounded-full bg-indigo-500/15 blur-3xl animate-[float-slow_17s_ease-in-out_infinite]" />
      <div className="absolute right-0 bottom-1/3 h-[220px] w-[220px] rounded-full bg-fuchsia-500/15 blur-3xl animate-[float_16s_ease-in-out_infinite]" />
    </div>
  );
}
