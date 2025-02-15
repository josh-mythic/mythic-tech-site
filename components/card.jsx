import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faMobileAlt, faPalette, faChartLine } from '@fortawesome/free-solid-svg-icons';

/**
 * Maps icon identifiers to FontAwesome icons.
 * @type {Object<string, any>}
 */
const iconMapping = {
  code: faCode,
  'mobile-alt': faMobileAlt,
  palette: faPalette,
  'chart-line': faChartLine,
};

/**
 * Card component is a generic, reusable card that displays a title, description,
 * an optional circular image (or icon/initials as a fallback), and a call-to-action link.
 *
 * Expected JSON data format (example):
 * [
 *   {
 *     "title": "Web Development",
 *     "description": "Modern, responsive, and high-performance websites built with cutting edge technology.",
 *     "icon": "code",
 *     "link": "/services/web-development",
 *     "image": "/images/web-development.jpg"  // optional
 *   },
 *   ...
 * ]
 *
 * @param {Object} props - Component properties.
 * @param {string} [props.title] - The title text of the card.
 * @param {string} [props.description] - The description text of the card.
 * @param {string} [props.icon] - An optional icon identifier.
 * @param {string} [props.image] - An optional image URL to display in a circle.
 * @param {string} [props.link] - The URL for the call-to-action link.
 * @param {string} [props.linkText="Learn More"] - The text for the call-to-action link.
 * @param {React.ReactNode} [props.children] - Additional child elements to render inside the card.
 * @returns {JSX.Element} A styled card component.
 */
export function Card({ title, description, icon, image, link, linkText = "Learn More", children }) {
  // Function to generate initials from the title if no image or icon is provided.
  const getInitials = (text) => {
    if (!text) return '';
    return text.split(' ').map((word) => word[0]).join('').toUpperCase();
  };

  return (
    <div className="bg-white text-neutral-700 rounded-xl shadow-lg p-6 transition-transform hover:scale-105 flex flex-col min-h-[320px]">
      <div className="flex items-center mb-4">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-16 h-16 rounded-full object-cover mr-4"
          />
        ) : icon ? (
          <span className="text-4xl text-primary-content mr-4">
            <FontAwesomeIcon icon={iconMapping[icon]} />
          </span>
        ) : (
          <div className="w-16 h-16 rounded-full bg-quaternary text-primary flex items-center justify-center font-bold mr-4">
            {getInitials(title)}
          </div>
        )}
        {title && (
          <h3 className="text-2xl font-heading font-bold text-primary-content">
            {title}
          </h3>
        )}
      </div>
      {description && <p className="text-lg mb-4">{description}</p>}
      {children}
      {link && (
        <div className="mt-auto">
          <Link href={link} className="font-bold text-primary-content no-underline hover:underline uppercase">
            {linkText} &rarr;
          </Link>
        </div>
      )}
    </div>
  );
}
