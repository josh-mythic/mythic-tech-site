import { ServicesList } from 'components/services-list';


export default function ServicesPage() {
  return (
    <main className="container mx-auto px-4 py-16">
      <section className="text-center mb-16">
        <h1 className="text-6xl font-heading font-bold mb-4">
          Our Services
        </h1>
        <p className="text-lg text-primary max-w-2xl mx-auto">
          We offer a wide range of services designed to help your brand reach its full potential. Our team of experts works collaboratively to deliver innovative solutions tailored to your unique needs.
        </p>
      </section>
      <ServicesList />
    </main>
  );
}
