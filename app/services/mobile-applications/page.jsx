import Image from 'next/image';
import Link from 'next/link';

export default function MobileApplicationsPage() {
  return (
    <main className="relative overflow-hidden">
      {/* Hero Section */}
      <div className="relative h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[90vh]">
        {/* Background Image */}
        <Image 
          src="/images/mobile-applications.jpg" 
          alt="Mobile Applications"
          fill
          className="object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/10"></div>
        {/* Hero Text & CTA */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-heading font-bold text-white drop-shadow-lg">
            Mobile Applications
          </h1>
          <p className="mt-4 max-w-2xl text-lg sm:text-xl text-white drop-shadow">
            Transform your business with mobile experiences that captivate, engage, and convert.
          </p>
          <Link 
            href="/contact"
            className="mt-8 inline-block px-8 py-4 bg-secondary text-primary font-bold rounded-full shadow-xl transition transform hover:scale-105 hover:bg-secondary_accent"
          >
            Get Started Today
          </Link>
        </div>
      </div>

      {/* Content Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="prose lg:prose-xl text-center mx-auto text-neutral-800">
          <p>
            At Mythic Technology, our Mobile Applications services are designed to create intuitive, high-performance apps that drive engagement and conversion. We combine cutting-edge technology with sleek design to build applications that work seamlessly across all devices.
          </p>
          <p>
            Whether you're looking to launch a new app or reinvent your mobile strategy, our expert team tailors solutions to elevate your brand and deliver measurable results.
          </p>
          <p>
            Explore our innovative approach to mobile development and see how we can help your business stand out in the digital landscape.
          </p>
        </div>
      </section>
    </main>
  );
}