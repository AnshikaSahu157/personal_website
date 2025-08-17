export function FloatingElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-primary/20 to-brand-400/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-br from-brand-500/20 to-purple-400/20 rounded-full blur-xl animate-bounce slow"></div>
      <div className="absolute bottom-40 left-20 w-16 h-16 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 right-40 w-24 h-24 bg-gradient-to-br from-pink-400/20 to-rose-400/20 rounded-full blur-xl animate-bounce delay-500"></div>
      
      {/* Floating code elements */}
      <div className="absolute top-32 right-32 text-6xl opacity-10 dark:opacity-5 font-mono text-primary animate-float">
        &lt;/&gt;
      </div>
      <div className="absolute bottom-32 left-32 text-4xl opacity-10 dark:opacity-5 font-mono text-brand-600 animate-float delay-1000">
        { }
      </div>
      <div className="absolute top-60 left-1/4 text-5xl opacity-10 dark:opacity-5 font-mono text-purple-600 animate-float delay-500">
        λ
      </div>
    </div>
  );
}
