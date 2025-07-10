
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Shlok } from '@/data/shloks';

interface FlashCardProps {
  shlok: Shlok;
  onNext: () => void;
  onPrevious: () => void;
  currentIndex: number;
  totalCards: number;
  isFlipped: boolean;
  onFlip: () => void;
}

const FlashCard: React.FC<FlashCardProps> = ({
  shlok,
  onNext,
  onPrevious,
  currentIndex,
  totalCards,
  isFlipped,
  onFlip
}) => {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="mb-4 text-center">
        <span className="text-sm text-muted-foreground">
          {currentIndex + 1} of {totalCards}
        </span>
      </div>
      
      <div className="perspective-1000 mb-6">
        <Card 
          className="relative w-full h-96 cursor-pointer transform-style-preserve-3d transition-transform duration-600 hover:shadow-lg"
          onClick={onFlip}
          style={{
            transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
          }}
        >
          {/* Front of card - Sanskrit */}
          <div className="absolute inset-0 w-full h-full backface-hidden bg-gradient-to-br from-saffron-50 to-saffron-100 p-6 flex flex-col justify-center items-center rounded-lg border border-saffron-200">
            <div className="text-center space-y-4">
              <h2 className="font-sanskrit text-2xl md:text-3xl text-spiritual-deepBlue leading-relaxed">
                {shlok.sanskrit}
              </h2>
              <p className="text-sm text-muted-foreground italic">
                {shlok.transliteration}
              </p>
              <p className="text-xs text-saffron-600 font-medium">
                Click to reveal meaning
              </p>
            </div>
          </div>

          {/* Back of card - Meaning */}
          <div 
            className="absolute inset-0 w-full h-full backface-hidden bg-gradient-to-br from-spiritual-deepBlue to-blue-800 p-6 flex flex-col justify-center items-center rounded-lg text-white"
            style={{ transform: 'rotateY(180deg)' }}
          >
            <div className="text-center space-y-4">
              <h3 className="text-lg font-playfair font-semibold text-spiritual-gold">
                Meaning
              </h3>
              <p className="text-base leading-relaxed">
                {shlok.meaning}
              </p>
              {shlok.context && (
                <div className="mt-4 pt-4 border-t border-blue-600">
                  <h4 className="text-sm font-semibold text-spiritual-gold mb-2">
                    Context
                  </h4>
                  <p className="text-sm text-blue-100 leading-relaxed">
                    {shlok.context}
                  </p>
                </div>
              )}
              <p className="text-xs text-blue-200 font-medium">
                Click to go back
              </p>
            </div>
          </div>
        </Card>
      </div>

      <div className="flex justify-between items-center">
        <Button
          onClick={onPrevious}
          disabled={currentIndex === 0}
          variant="outline"
          className="border-saffron-300 text-saffron-700 hover:bg-saffron-50"
        >
          Previous
        </Button>
        
        <Button
          onClick={onNext}
          disabled={currentIndex === totalCards - 1}
          className="bg-spiritual-deepBlue hover:bg-blue-800 text-white"
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default FlashCard;
