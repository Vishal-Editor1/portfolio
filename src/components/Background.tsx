export function Background() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-[#0a0f16]">
      {/* Large Abstract Shapes - Static, utilizing opacity instead of heavy blur filters where possible to save GPU */}
      {/* Top Left Orange Pill */}
      <div className="absolute -top-20 -left-20 w-[400px] h-[400px] bg-gradient-to-br from-orange-500/20 to-yellow-500/10 rounded-full blur-[60px] transform-gpu" />
      <div className="absolute top-10 -left-10 w-[300px] h-[150px] bg-gradient-to-r from-orange-500/20 to-yellow-400/10 rounded-full blur-[30px] rotate-[-20deg] transform-gpu" />

      {/* Top Right Yellow/Green Pill */}
      <div className="absolute top-10 -right-20 w-[300px] h-[600px] bg-gradient-to-b from-yellow-300/20 to-green-400/10 rounded-full blur-[60px] rotate-[30deg] transform-gpu" />
      <div className="absolute top-0 right-10 w-[200px] h-[400px] bg-gradient-to-b from-yellow-300/20 to-green-400/10 rounded-full blur-[40px] rotate-[30deg] transform-gpu" />

      {/* Bottom Left Cyan Pill */}
      <div className="absolute -bottom-20 -left-10 w-[400px] h-[200px] bg-gradient-to-r from-cyan-400/20 to-blue-500/10 rounded-full blur-[50px] rotate-[30deg] transform-gpu" />
      <div className="absolute -bottom-10 left-10 w-[300px] h-[100px] bg-gradient-to-r from-cyan-400/20 to-blue-500/10 rounded-full blur-[30px] rotate-[30deg] transform-gpu" />

      {/* Bottom Right Orange Ring & Blur */}
      <div className="absolute -bottom-40 -right-20 w-[500px] h-[500px] bg-gradient-to-tl from-orange-600/10 to-red-600/5 rounded-full blur-[80px] transform-gpu" />

      {/* Glowing Rings (Static) */}
      <div className="absolute top-[30%] left-[10%] w-16 h-16 rounded-full border-4 border-orange-500/20" />
      <div className="absolute bottom-[20%] right-[15%] w-12 h-12 rounded-full border-4 border-cyan-400/20" />
      <div className="absolute top-[60%] right-[5%] w-20 h-20 rounded-full border-4 border-emerald-400/20" />

      {/* Glowing Dots (Static) */}
      <div className="absolute top-[20%] left-[40%] w-3 h-3 bg-yellow-400/60 rounded-full" />
      <div className="absolute top-[15%] right-[30%] w-2 h-2 bg-orange-500/60 rounded-full" />
      <div className="absolute bottom-[30%] left-[20%] w-2 h-2 bg-cyan-400/60 rounded-full" />
      <div className="absolute top-[50%] right-[40%] w-3 h-3 bg-orange-400/60 rounded-full" />
      <div className="absolute bottom-[10%] right-[30%] w-2 h-2 bg-yellow-300/60 rounded-full" />

      {/* Slanted Lines (Static) */}
      <div className="absolute top-[40%] left-[5%] w-16 h-2 bg-cyan-400/30 rounded-full rotate-[-45deg]" />
      <div className="absolute top-[10%] right-[10%] w-20 h-2 bg-cyan-400/30 rounded-full rotate-[45deg]" />
      <div className="absolute bottom-[15%] left-[30%] w-12 h-2 bg-orange-400/30 rounded-full rotate-[45deg]" />
    </div>
  );
}
