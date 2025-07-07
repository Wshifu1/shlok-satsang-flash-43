
import React from 'react';

interface ProgressIndicatorProps {
  currentIndex: number;
  totalCards: number;
}

const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({
  currentIndex,
  totalCards
}) => {
  const progress = ((currentIndex + 1) / totalCards) * 100;

  return (
    <div className="w-full max-w-2xl mx-auto mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-spiritual-deepBlue">
          Progress
        </span>
        <span className="text-sm text-muted-foreground">
          {Math.round(progress)}%
        </span>
      </div>
      <div className="w-full bg-saffron-100 rounded-full h-2">
        <div
          className="bg-gradient-to-r from-spiritual-gold to-saffron-500 h-2 rounded-full transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressIndicator;
