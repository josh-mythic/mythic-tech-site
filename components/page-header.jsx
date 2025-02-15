'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

/**
 * PageHeader component renders an engaging header section for a page.
 *
 * @example
 * <PageHeader
 *   title="Digital Marketing"
 *   tagline="Boost your online presence with data-driven strategies"
 *   backgroundImage="/images/digital-marketing-bg.jpg"
 * />
 *
 * @param {Object} props - Component properties.
 * @param {string} props.title - The main title for the page.
 * @param {string} props.tagline - A supporting tagline to display under the title.
 * @param {string} props.backgroundImage - The URL for the background image.
 * @returns {JSX.Element} A rendered page header component.
 */
export function PageHeader({ title, tagline, backgroundImage }) {
  return (
    <header className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden">
      {/* Background Image */}
      <Image
        src={backgroundImage}
        alt={title}
        fill
        className="object-cover"
      />
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/10"></div>
      {/* Animated Title and Tagline */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <motion.h1 
          className="text-5xl sm:text-6xl md:text-7xl font-heading font-bold text-white drop-shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {title}
        </motion.h1>
        {tagline && (
          <motion.p 
            className="mt-4 max-w-2xl text-lg sm:text-xl text-white drop-shadow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {tagline}
          </motion.p>
        )}
      </div>
    </header>
  );
}
