
import React, { useState } from 'react';
import { Book } from 'lucide-react';
import FlashCard from '@/components/FlashCard';
import ProgressIndicator from '@/components/ProgressIndicator';
import { satsangDikshaShloks } from '@/data/shloks';

const Index = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleNext = () => {
    if (currentCardIndex < satsangDikshaShloks.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
      setIsFlipped(false);
    }
  };

  const handlePrevious = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1);
      setIsFlipped(false);
    }
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-saffron-50 to-yellow-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Book className="h-8 w-8 text-spiritual-deepBlue mr-3" />
            <h1 className="font-playfair text-3xl md:text-4xl font-bold text-spiritual-deepBlue">
              Satsang Diksha Shloks
            </h1>
          </div>
          <p className="text-muted-foreground max-w-md mx-auto">
            Sacred Sanskrit verses for spiritual contemplation and memorization
          </p>
        </div>

        {/* Progress Indicator */}
        <ProgressIndicator
          currentIndex={currentCardIndex}
          totalCards={satsangDikshaShloks.length}
        />

        {/* Flash Card */}
        <FlashCard
          shlok={satsangDikshaShloks[currentCardIndex]}
          onNext={handleNext}
          onPrevious={handlePrevious}
          currentIndex={currentCardIndex}
          totalCards={satsangDikshaShloks.length}
          isFlipped={isFlipped}
          onFlip={handleFlip}
        />

        {/* Instructions */}
        <div className="text-center mt-8 text-sm text-muted-foreground max-w-md mx-auto">
          <p>Click on the card to flip between Sanskrit text and meaning. Use the navigation buttons to move between different shloks.</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
