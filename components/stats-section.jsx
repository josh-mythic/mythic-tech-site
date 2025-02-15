/**
 * StatsSection component displays key metrics in a responsive grid layout.
 *
 * @example
 * // Usage:
 * import { StatsSection } from 'components/stats-section';
 * const statsData = [
 *   { value: "150+", label: "Projects Completed" },
 *   { value: "100%", label: "Client Satisfaction" },
 *   { value: "10", label: "Years Experience" },
 *   { value: "50+", label: "Awards Won" },
 * ];
 * <StatsSection stats={statsData} />
 *
 * @param {Object} props - Component properties.
 * @param {Array<{value: string, label: string}>} props.stats - Array of stats objects.
 * @returns {JSX.Element} A rendered stats section.
 */
export function StatsSection({ stats }) {
    return (
      <section className="py-16 bg-secondary-accent text-primary-content">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="p-4">
                <h3 className="text-5xl font-bold">{stat.value}</h3>
                <p className="mt-2 text-lg">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  