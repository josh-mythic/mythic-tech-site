// components/service-card.jsx
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faMobileAlt, faPalette, faChartLine } from '@fortawesome/free-solid-svg-icons';

const iconMapping = {
  code: faCode,
  'mobile-alt': faMobileAlt,
  palette: faPalette,
  'chart-line': faChartLine
};

export function ServiceCard({ service }) {
  const icon = iconMapping[service.icon];
  return (
    <div className="bg-white text-neutral-700 card rounded-xl shadow-lg p-6 transition-transform hover:scale-105">
      <div className="flex items-center mb-4">
        <span className="text-4xl text-primary-content mr-4">
          {icon && <FontAwesomeIcon icon={icon} />}
        </span>
        <h3 className="text-2xl font-heading font-bold uppercase">{service.title}</h3>
      </div>
      <p className="mb-4 text-lg">{service.description}</p>
      {service.link && (
        <Link href={service.link} className="font-bold no-underline text-primary-content hover:underline uppercase">
          Learn More &rarr;
        </Link>
      )}
    </div>
  );
}