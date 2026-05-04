'use client'

export function AmbientBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Primary blob — top left */}
      <div
        className="absolute rounded-full"
        style={{
          width: 700,
          height: 700,
          top: -250,
          left: -250,
          background: 'radial-gradient(circle, rgba(29,78,216,0.14) 0%, transparent 70%)',
          filter: 'blur(48px)',
          animation: 'blobDrift 18s ease-in-out infinite alternate',
        }}
      />
      {/* Secondary blob — bottom right */}
      <div
        className="absolute rounded-full"
        style={{
          width: 500,
          height: 500,
          bottom: -200,
          right: -150,
          background: 'radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 70%)',
          filter: 'blur(60px)',
          animation: 'blobDrift 22s ease-in-out infinite alternate-reverse',
          animationDelay: '-9s',
        }}
      />
      {/* Subtle mid blob */}
      <div
        className="absolute rounded-full"
        style={{
          width: 300,
          height: 300,
          top: '40%',
          left: '55%',
          background: 'radial-gradient(circle, rgba(59,130,246,0.05) 0%, transparent 70%)',
          filter: 'blur(40px)',
          animation: 'blobDrift 25s ease-in-out infinite alternate',
          animationDelay: '-5s',
        }}
      />
    </div>
  )
}
