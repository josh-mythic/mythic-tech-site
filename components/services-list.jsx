'use client';

import { useEffect, useState } from 'react';
import { ServiceCard } from './service-card';

export function ServicesList() {
  const [services, setServices] = useState(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch('/api/services', { cache: 'no-store' });
        const data = await response.json();
        setServices(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchServices();
  }, []);

  if (!services) {
    return <div>Loading services...</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service, idx) => (
        <ServiceCard key={idx} service={service} />
      ))}
    </div>
  );
}