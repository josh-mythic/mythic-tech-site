'use client';

import { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Card } from './card';

/**
 * CardCarousel component renders an array of cards in a swipeable carousel.
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
 * <CardCarousel cards={cardsData} visibleCount={1} />
 *
 * @param {Object} props - Component properties.
 * @param {Array<Object>} props.cards - Array of card data objects.
 * @param {number} [props.visibleCount=1] - Number of cards to show per slide.
 * @returns {JSX.Element} A rendered swipeable carousel of cards.
 */
export function CardCarousel({ cards = [], visibleCount = 1 }) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const totalSlides = Math.ceil(cards.length / visibleCount);
  
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
                style={{ width: `${100 / visibleCount}%` }}
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