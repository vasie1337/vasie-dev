'use client';

export default function LiveWallpaper({ className }: { className?: string }) {
  return (
    <div
      className={className || ''}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(ellipse at center, #1a1a2e 0%, #16213e 30%, #0f0f23 60%, #000000 100%)',
        overflow: 'hidden',
        zIndex: 1
      }}
    >
      {/* Dark curved shapes - recreating the Apple background structure */}
      <div
        className="animate-dark-curve-1"
        style={{
          position: 'absolute',
          top: '-20%',
          left: '-10%',
          width: '60%',
          height: '80%',
          background: 'radial-gradient(ellipse at 60% 40%, #000000 20%, #1a1a2e 60%, transparent 80%)',
          borderRadius: '40% 60% 30% 70% / 60% 40% 70% 30%',
          transform: 'rotate(-25deg)',
          filter: 'blur(2px)'
        }}
      />

      <div
        className="animate-dark-curve-2"
        style={{
          position: 'absolute',
          top: '40%',
          right: '-15%',
          width: '70%',
          height: '90%',
          background: 'radial-gradient(ellipse at 30% 60%, #000000 15%, #16213e 50%, transparent 75%)',
          borderRadius: '70% 30% 60% 40% / 50% 50% 30% 70%',
          transform: 'rotate(35deg)',
          filter: 'blur(1.5px)'
        }}
      />

      {/* Primary iridescent flow - Purple to Blue */}
      <div
        className="animate-iridescent-flow-1"
        style={{
          position: 'absolute',
          top: '-30%',
          left: '15%',
          width: '70%',
          height: '120%',
          background: `
            linear-gradient(135deg,
              rgba(168, 85, 247, 0.9) 0%,
              rgba(147, 51, 234, 0.8) 20%,
              rgba(99, 102, 241, 0.7) 40%,
              rgba(59, 130, 246, 0.8) 60%,
              rgba(14, 165, 233, 0.6) 80%,
              transparent 100%)
          `,
          borderRadius: '45% 55% 70% 30% / 60% 40% 80% 20%',
          filter: 'blur(3px)',
          transform: 'rotate(-15deg) skewY(-5deg)',
          clipPath: 'polygon(20% 0%, 100% 0%, 80% 100%, 0% 100%)',
          mixBlendMode: 'screen'
        }}
      />

      {/* Secondary flow - Cyan to Purple */}
      <div
        className="animate-iridescent-flow-2"
        style={{
          position: 'absolute',
          top: '20%',
          right: '10%',
          width: '60%',
          height: '100%',
          background: `
            linear-gradient(-45deg,
              rgba(6, 182, 212, 0.8) 0%,
              rgba(14, 165, 233, 0.7) 25%,
              rgba(99, 102, 241, 0.8) 50%,
              rgba(147, 51, 234, 0.6) 75%,
              rgba(168, 85, 247, 0.5) 90%,
              transparent 100%)
          `,
          borderRadius: '60% 40% 50% 50% / 40% 60% 30% 70%',
          filter: 'blur(2.5px)',
          transform: 'rotate(25deg) skewX(-10deg)',
          clipPath: 'polygon(0% 0%, 90% 0%, 100% 100%, 10% 100%)',
          mixBlendMode: 'screen'
        }}
      />

      {/* Pink/Magenta accent flow */}
      <div
        className="animate-iridescent-flow-3"
        style={{
          position: 'absolute',
          top: '60%',
          left: '-5%',
          width: '50%',
          height: '80%',
          background: `
            linear-gradient(75deg,
              rgba(236, 72, 153, 0.7) 0%,
              rgba(219, 39, 119, 0.8) 30%,
              rgba(190, 24, 93, 0.6) 60%,
              rgba(147, 51, 234, 0.5) 85%,
              transparent 100%)
          `,
          borderRadius: '30% 70% 80% 20% / 50% 50% 70% 30%',
          filter: 'blur(2px)',
          transform: 'rotate(-35deg) skewY(12deg)',
          clipPath: 'polygon(15% 0%, 100% 0%, 85% 100%, 0% 100%)',
          mixBlendMode: 'screen'
        }}
      />

      {/* Orange/Red accent - bottom right */}
      <div
        className="animate-iridescent-flow-4"
        style={{
          position: 'absolute',
          bottom: '-10%',
          right: '-10%',
          width: '45%',
          height: '60%',
          background: `
            linear-gradient(45deg,
              rgba(251, 146, 60, 0.6) 0%,
              rgba(249, 115, 22, 0.7) 40%,
              rgba(234, 88, 12, 0.5) 70%,
              rgba(219, 39, 119, 0.4) 90%,
              transparent 100%)
          `,
          borderRadius: '70% 30% 40% 60% / 40% 60% 50% 50%',
          filter: 'blur(3px)',
          transform: 'rotate(45deg) skewX(-15deg)',
          mixBlendMode: 'screen'
        }}
      />

      {/* Curved metallic highlights */}
      <div
        className="animate-metallic-curve-1"
        style={{
          position: 'absolute',
          top: '10%',
          left: '30%',
          width: '40%',
          height: '15%',
          background: `
            linear-gradient(90deg,
              transparent 0%,
              rgba(255, 255, 255, 0.1) 20%,
              rgba(168, 85, 247, 0.3) 50%,
              rgba(255, 255, 255, 0.08) 80%,
              transparent 100%)
          `,
          borderRadius: '50px',
          filter: 'blur(1px)',
          transform: 'rotate(-20deg)',
          mixBlendMode: 'overlay'
        }}
      />

      <div
        className="animate-metallic-curve-2"
        style={{
          position: 'absolute',
          bottom: '25%',
          right: '20%',
          width: '35%',
          height: '12%',
          background: `
            linear-gradient(45deg,
              transparent 0%,
              rgba(6, 182, 212, 0.4) 30%,
              rgba(255, 255, 255, 0.12) 60%,
              rgba(236, 72, 153, 0.3) 90%,
              transparent 100%)
          `,
          borderRadius: '50px',
          filter: 'blur(0.8px)',
          transform: 'rotate(35deg)',
          mixBlendMode: 'overlay'
        }}
      />

      {/* Subtle particle streams */}
      <div
        className="animate-particle-beam-1"
        style={{
          position: 'absolute',
          top: '5%',
          left: '50%',
          width: '1px',
          height: '40%',
          background: 'linear-gradient(to bottom, rgba(168, 85, 247, 0.8) 0%, transparent 100%)',
          borderRadius: '10px',
          filter: 'blur(0.5px)',
          transform: 'rotate(-12deg)',
          boxShadow: '0 0 8px rgba(168, 85, 247, 0.4)'
        }}
      />

      <div
        className="animate-particle-beam-2"
        style={{
          position: 'absolute',
          top: '30%',
          right: '25%',
          width: '1.5px',
          height: '35%',
          background: 'linear-gradient(to bottom, rgba(6, 182, 212, 0.7) 0%, transparent 100%)',
          borderRadius: '10px',
          filter: 'blur(0.3px)',
          transform: 'rotate(25deg)',
          boxShadow: '0 0 6px rgba(6, 182, 212, 0.3)'
        }}
      />

      {/* Ambient glow matching the reference */}
      <div
        className="animate-ambient-glow-apple"
        style={{
          position: 'absolute',
          top: '30%',
          left: '40%',
          width: '60%',
          height: '60%',
          background: `
            radial-gradient(ellipse at center,
              rgba(168, 85, 247, 0.08) 0%,
              rgba(99, 102, 241, 0.06) 30%,
              rgba(6, 182, 212, 0.04) 60%,
              transparent 100%)
          `,
          filter: 'blur(60px)',
          transform: 'rotate(-10deg)'
        }}
      />

      {/* Fine texture overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            repeating-linear-gradient(
              90deg,
              transparent,
              transparent 2px,
              rgba(255, 255, 255, 0.003) 2px,
              rgba(255, 255, 255, 0.003) 4px
            )
          `,
          opacity: 0.7,
          mixBlendMode: 'overlay'
        }}
      />
    </div>
  );
}