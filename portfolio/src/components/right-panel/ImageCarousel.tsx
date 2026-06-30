'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ImageIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ImageCarouselProps {
  images: string[];
  title: string;
}

export function ImageCarousel({ images, title }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  if (!images.length) {
    return (
      <div className="aspect-video rounded-2xl bg-gray-800/50 flex items-center justify-center border border-gray-700/50">
        <div className="flex flex-col items-center gap-2 text-gray-500">
          <ImageIcon className="w-12 h-12" />
          <span className="text-sm font-medium">No screenshots available</span>
        </div>
      </div>
    );
  }

  const goTo = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const goNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goPrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
      scale: 0.95,
    }),
  };

  return (
    <div className="relative group">
      <div className="relative aspect-video rounded-2xl overflow-hidden bg-gray-800/50 border border-gray-700/50">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
              scale: { duration: 0.2 },
            }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
              <div className="text-center p-8">
                <ImageIcon className="w-16 h-16 mx-auto mb-4 text-gray-600" />
                <p className="text-gray-500 font-medium">
                  {title} - Screenshot {currentIndex + 1}
                </p>
                <p className="text-gray-600 text-sm mt-1">
                  Image placeholder
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {images.length > 1 && (
          <>
            <button
              onClick={goPrev}
              className={cn(
                'absolute left-3 top-1/2 -translate-y-1/2',
                'w-10 h-10 rounded-full flex items-center justify-center',
                'bg-black/60 text-white backdrop-blur-sm',
                'opacity-0 group-hover:opacity-100 transition-opacity',
                'hover:bg-black/80 focus:outline-none focus:ring-2 focus:ring-white/30'
              )}
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={goNext}
              className={cn(
                'absolute right-3 top-1/2 -translate-y-1/2',
                'w-10 h-10 rounded-full flex items-center justify-center',
                'bg-black/60 text-white backdrop-blur-sm',
                'opacity-0 group-hover:opacity-100 transition-opacity',
                'hover:bg-black/80 focus:outline-none focus:ring-2 focus:ring-white/30'
              )}
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}
      </div>

      {images.length > 1 && (
        <div className="flex items-center justify-center gap-2 mt-4">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goTo(index)}
              className={cn(
                'w-2 h-2 rounded-full transition-all duration-300',
                index === currentIndex
                  ? 'bg-white w-6'
                  : 'bg-gray-600 hover:bg-gray-500'
              )}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
