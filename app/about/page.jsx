import Image from 'next/image';

export default function AboutPage() {
  return (
    <main className="container mx-auto px-4 py-16">
      <h1 className="text-6xl font-heading font-bold text-center mb-12 text-start">
        About Us
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Column: Image */}
        <div className="flex justify-center">
          <Image 
            src="/images/mythic-banner.jpg" // update with your actual image
            alt="About Mythic Technology"
            width={900}
            height={600}
            className="rounded-lg shadow-lg object-cover"
          />
        </div>
        {/* Right Column: Content */}
        <div className="prose max-w-none text-lg text-primary-700">
          <p>
            At Mythic Technology, we are passionate about creating innovative digital experiences that empower brands and drive success. Our team of developers, designers, and strategists works together to craft websites and applications that are both visually striking and highly functional.
          </p>
          <br />
          <p>
            We believe in a design-driven approach and leverage modern technologies like Next.js and Tailwind CSS to build sleek, responsive, and user-friendly interfaces. Our portfolio ranges from cutting-edge web applications to elegant brand presentations.
          </p>
          <br />
          <p>
            Our commitment to quality and creativity drives us to exceed expectations every time. Whether you&apos;re looking for a complete digital transformation or a specific solution to elevate your brand, we&apos;re here to make your brand legendary.
          </p>
          <br />
          <p>
            <strong>Contact us</strong> today to discuss how we can bring your vision to life.
          </p>
        </div>
      </div>
    </main>
  );
}