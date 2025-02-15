'use client';

import { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Card } from './card';

/**
 * CardCarousel component renders an array of cards in a swipeable carousel.
 * By default, it displays 1 card per slide on mobile devices and uses the provided
 * visibleCount on larger screens.
 *
 * @example
 * // In your page:
 * import { CardCarousel } from 'components/card-carousel';
 * 
 * const cardsData = [
 *   { title: "Title 1", text: "Description 1", linkText: "Learn More", href: "/link1" },
 *   { title: "Title 2", text: "Description 2", linkText: "Learn More", href: "/link2" },
 *   // more cards...
 * ];
 *
 * <CardCarousel cards={cardsData} visibleCount={3} />
 *
 * @param {Object} props - Component properties.
 * @param {Array<Object>} props.cards - Array of card data objects.
 * @param {number} [props.visibleCount=1] - Number of cards to show per slide on larger screens.
 * @returns {JSX.Element} A rendered swipeable carousel of cards.
 */
export function CardCarousel({ cards = [], visibleCount = 1 }) {
  // currentVisibleCount is forced to 1 on mobile (<640px), otherwise uses visibleCount prop.
  const [currentVisibleCount, setCurrentVisibleCount] = useState(visibleCount);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth < 640) {
        setCurrentVisibleCount(1);
      } else {
        setCurrentVisibleCount(visibleCount);
      }
    };

    updateVisibleCount();
    window.addEventListener('resize', updateVisibleCount);
    return () => window.removeEventListener('resize', updateVisibleCount);
  }, [visibleCount]);

  const totalSlides = Math.ceil(cards.length / currentVisibleCount);

  // Ensure currentSlide is valid if cards change
  useEffect(() => {
    if (currentSlide >= totalSlides) {
      setCurrentSlide(totalSlides - 1);
    }
  }, [totalSlides, currentSlide]);

  const handlers = useSwipeable({
    onSwipedLeft: () => nextSlide(),
    onSwipedRight: () => prevSlide(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1 < totalSlides ? prev + 1 : 0));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 >= 0 ? prev - 1 : totalSlides - 1));
  };

  return (
    <div className="relative py-16">
      {/* Carousel container with extra horizontal padding */}
      <div className="relative overflow-hidden px-12" {...handlers}>
        <div
          className="flex transition-transform duration-300"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 p-4"
              style={{ width: `${100 / currentVisibleCount}%` }}
            >
              <Card {...card} />
            </div>
          ))}
        </div>
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow p-2 ml-4 hover:bg-secondary transition"
        >
          <FontAwesomeIcon icon={faChevronLeft} size="lg" className="text-primary" />
        </button>
        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow p-2 mr-4 hover:bg-secondary transition"
        >
          <FontAwesomeIcon icon={faChevronRight} size="lg" className="text-primary" />
        </button>
      </div>
    </div>
  );
}
