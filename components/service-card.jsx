import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faMobileAlt, faPalette, faChartLine } from '@fortawesome/free-solid-svg-icons';

const iconMapping = {
  code: faCode,
  'mobile-alt': faMobileAlt,
  palette: faPalette,
  'chart-line': faChartLine
};

/**
 * ServiceCard component displays a service in a card with consistent sizing.
 *
 * @param {Object} props - Component properties.
 * @param {Object} props.service - The service data.
 * @param {string} props.service.title - The title of the service.
 * @param {string} props.service.description - A description of the service.
 * @param {string} props.service.icon - A key to select the appropriate FontAwesome icon.
 * @param {string} props.service.link - URL to the service's detail page.
 * @returns {JSX.Element} A rendered ServiceCard component.
 */
export function ServiceCard({ service }) {
  const icon = iconMapping[service.icon];
  return (
    <div className="bg-white text-neutral-700 rounded-xl shadow-lg p-6 transition-transform hover:scale-105 flex flex-col justify-between min-h-[320px]">
      <div>
        <div className="flex items-center mb-4">
          <span className="text-4xl text-primary-content mr-4">
            {icon && <FontAwesomeIcon icon={icon} />}
          </span>
          <h3 className="text-2xl font-heading font-bold uppercase">{service.title}</h3>
        </div>
        <p className="mb-4 text-lg">{service.description}</p>
      </div>
      {service.link && (
        <Link href={service.link} className="mt-auto font-bold no-underline text-primary-content hover:underline uppercase">
          Learn More &rarr;
        </Link>
      )}
    </div>
  );
}
