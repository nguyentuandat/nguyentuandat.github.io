import React, { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    // Simulate loading progress
    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.random() * 15;
        if (next >= 100) {
          clearInterval(timer);
          return 100;
        }
        return next;
      });
    }, 100);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      // Small delay before fading out
      setTimeout(() => {
        setOpacity(0);
        // Wait for fade out transition to finish before unmounting
        setTimeout(onComplete, 700);
      }, 500);
    }
  }, [progress, onComplete]);

  return (
    <div 
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0f111a] text-white transition-opacity duration-700 ease-in-out"
      style={{ opacity }}
    >
      <div className="w-full max-w-md px-8 relative">
        {/* Name Animation */}
        <div className="mb-2 overflow-hidden">
          <h1 
            className="text-4xl md:text-5xl font-bold tracking-tight text-center translate-y-0 transition-transform duration-700 ease-out"
            style={{ 
              transform: progress > 10 ? 'translateY(0)' : 'translateY(100%)',
              opacity: progress > 10 ? 1 : 0,
              lineHeight: '1.2'
            }}
          >
            Dat Nguyen
          </h1>
        </div>

        {/* Title Animation */}
        <div className="mb-12 overflow-hidden flex justify-center">
          <p 
            className="text-purple-400 font-medium tracking-widest uppercase text-sm md:text-base transition-all duration-700 delay-100 ease-out"
            style={{ 
              transform: progress > 20 ? 'translateY(0)' : 'translateY(100%)',
              opacity: progress > 20 ? 1 : 0
            }}
          >
            Software Engineer
          </p>
        </div>

        {/* Progress Bar Container */}
        <div className="relative h-1 w-full bg-gray-800 rounded-full overflow-hidden">
          {/* Progress Fill */}
          <div 
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-purple-600 to-blue-500 transition-all duration-200 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Percentage Counter */}
        <div className="mt-2 text-right">
          <span className="text-xs font-mono text-gray-500">
            {Math.min(100, Math.floor(progress)).toString().padStart(2, '0')}%
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
