import Image from 'next/image';
import Link from 'next/link';

/**
 * RichContentSection component displays a combination of header, paragraphs, an image (aligned left or right), and a call-to-action button.
 *
 * @example
 * // Usage:
 * import { RichContentSection } from 'components/rich-content-section';
 * <RichContentSection
 *   header="Innovative Mobile Solutions"
 *   paragraphs={[
 *     "We create mobile applications that not only look stunning but also perform seamlessly.",
 *     "Our mobile solutions are tailored to meet your business needs."
 *   ]}
 *   imageSrc="/images/mobile-applications.jpg"
 *   imageAlt="Mobile Applications"
 *   imagePosition="left"
 *   buttonText="Learn More"
 *   buttonLink="/services/mobile-applications"
 * />
 *
 * @param {Object} props - Component properties.
 * @param {string} props.header - The section header.
 * @param {Array<string>} props.paragraphs - An array of paragraph texts.
 * @param {string} props.imageSrc - The source URL for the image.
 * @param {string} props.imageAlt - The alt text for the image.
 * @param {('left'|'right')} [props.imagePosition='left'] - Determines the image position relative to the text.
 * @param {string} props.buttonText - The call-to-action button text.
 * @param {string} props.buttonLink - The URL for the call-to-action button.
 * @returns {JSX.Element} A rendered rich content section.
 */
export function RichContentSection({
  header,
  paragraphs,
  imageSrc,
  imageAlt,
  imagePosition = 'left',
  buttonText,
  buttonLink,
}) {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-8">
        {imagePosition === 'left' && (
          <div className="w-full lg:w-1/2">
            <Image 
              src={imageSrc}
              alt={imageAlt}
              width={800}
              height={600}
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
        )}
        <div className={`w-full lg:w-1/2 ${imagePosition === 'right' ? 'order-1' : ''}`}>
          <h2 className="text-4xl font-heading font-bold mb-4">{header}</h2>
          {paragraphs.map((para, idx) => (
            <p key={idx} className="text-lg mb-4 text-neutral-800">
              {para}
            </p>
          ))}
          {buttonText && buttonLink && (
            <Link 
              href={buttonLink}
              className="inline-block mt-4 px-8 py-4 bg-secondary text-primary font-bold rounded-full shadow-xl transition duration-200 hover:bg-secondary_accent"
            >
              {buttonText}
            </Link>
          )}
        </div>
        {imagePosition === 'right' && (
          <div className="w-full lg:w-1/2">
            <Image 
              src={imageSrc}
              alt={imageAlt}
              width={800}
              height={600}
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
        )}
      </div>
    </section>
  );
}
