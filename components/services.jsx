'use client';

import { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faServer } from '@fortawesome/free-solid-svg-icons';
import { CardCarousel } from './card-carousel';
import servicesData from 'data/services'

/**
 * Services component displays testimonials in a swipeable carousel.
 * It now features an enhanced header with a decorative quote icon and tagline.
 *
 * @example
 * // In your page:
 * import { Services } from 'components/services';
 * import testimonialsData from 'data/services.json';
 *
 * <TestimonialsCarousel testimonials={testimonialsData} visibleCount={1} />
 *
 * @returns {JSX.Element} A rendered swipeable testimonials carousel.
 */
export function Services() {

  return (
    <section className="relative py-16 border-2 border-primary rounded-xl overflow-hidden my-5">
      {/* Enhanced Header with Decorative Icon */}
      <div className="relative mb-12 text-center">
        <div className="absolute inset-0 flex items-center justify-center">
          <FontAwesomeIcon icon={faServer} size="6x" className="text-primary opacity-10" />
        </div>
        <h2 className="relative z-10 text-4xl font-heading font-bold inline-block px-4 bg-opacity-70">
          Our Areas Of Service
        </h2>
        <p className="relative z-10 mt-4 text-lg text-primary-content">
          We offer a variety of services to suit your businesses needs.
        </p>
      </div>

      {/* Carousel container with extra horizontal padding */}
      <CardCarousel cards={servicesData} visibleCount={2} />
    </section>
  );
}
