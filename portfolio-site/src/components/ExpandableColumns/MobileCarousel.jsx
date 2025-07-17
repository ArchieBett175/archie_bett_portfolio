import React, { useState } from "react";
import MobileCarouselItem from "./MobileCarouselItem";

const MobileCarousel = ({ isVisible, items }) => {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const nextCard = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrent((prev) => (prev + 1) % items.length);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const prevCard = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrent((prev) => (prev - 1 + items.length) % items.length);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const goToCard = (index) => {
    if (isTransitioning || index === current) return;
    setIsTransitioning(true);
    setCurrent(index);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  return (
    <div
      className={`w-full max-w-md mx-auto ${
        isVisible ? "opacity-100 relative" : "opacity-0 absolute top-0 -z-10"
      }`}
      onTouchStart={(e) => {
        setTouchStart(e.touches[0].clientX);
      }}
      onTouchMove={(e) => {
        setTouchEnd(e.touches[0].clientX);
      }}
      onTouchEnd={() => {
        if (!touchStart || !touchEnd) return;
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > 50;
        const isRightSwipe = distance < -50;

        if (isLeftSwipe) nextCard();
        if (isRightSwipe) prevCard();

        setTouchStart(null);
        setTouchEnd(null);
      }}
    >
      {/* Main carousel container */}
      <div className="overflow-hidden relative rounded-lg">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {items.map((item, index) => (
            <div key={item.id} className="w-full flex-shrink-0">
              <MobileCarouselItem column={item} isActive={index === current} />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation arrows */}
      {items.length > 1 && (
        <>
          <button
            onClick={prevCard}
            disabled={isTransitioning}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors disabled:opacity-50"
            aria-label="Previous slide"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={nextCard}
            disabled={isTransitioning}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors disabled:opacity-50"
            aria-label="Next slide"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </>
      )}

      {/* Dots indicator */}
      {items.length > 1 && (
        <div className="flex justify-center mt-4 space-x-2">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => goToCard(index)}
              disabled={isTransitioning}
              className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                index === current
                  ? "bg-blue-500"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Slide counter */}
      {items.length > 1 && (
        <div className="text-center mt-2 text-sm text-gray-500"></div>
      )}
    </div>
  );
};

export default MobileCarousel;
