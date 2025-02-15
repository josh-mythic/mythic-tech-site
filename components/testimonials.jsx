'use client';

import { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { CardCarousel } from './card-carousel';
import testimonialsData from 'data/testimonials'

/**
 * TestimonialsCarousel component displays testimonials in a swipeable carousel.
 * It now features an enhanced header with a decorative quote icon and tagline.
 *
 * @example
 * // In your page:
 * import { TestimonialsCarousel } from 'components/TestimonialsCarousel';
 * import testimonialsData from 'data/testimonials.json';
 *
 * <TestimonialsCarousel testimonials={testimonialsData} visibleCount={1} />
 *
 * @returns {JSX.Element} A rendered swipeable testimonials carousel.
 */
export function Testimonials() {

  return (
    <section className="relative py-16 border-2 border-primary rounded-xl overflow-hidden my-5">
      {/* Enhanced Header with Decorative Icon */}
      <div className="relative mb-12 text-center">
        <div className="absolute inset-0 flex items-center justify-center">
          <FontAwesomeIcon icon={faQuoteLeft} size="6x" className="text-primary opacity-10" />
        </div>
        <h2 className="relative z-10 text-4xl font-heading font-bold inline-block px-4 bg-opacity-70">
          What Our Clients Say
        </h2>
        <p className="relative z-10 mt-4 text-lg text-primary-content">
          Our clients love our work. Here’s what they have to say about us.
        </p>
      </div>

      {/* Carousel container with extra horizontal padding */}
      <CardCarousel cards={testimonialsData} visibleCount={2} />
    </section>
  );
}
