import Image from 'next/image';

export default function WebDevelopmentPage() {
  return (
    <main className="container mx-auto px-4 py-16">
      <h1 className="text-6xl font-heading font-bold text-center mb-8">
        Web Development
      </h1>
      <div className="mb-8 flex justify-center">
        <Image 
          src="/images/web-development.jpg" // Replace with your actual image path
          alt="Web Development"
          width={800}
          height={450}
          className="rounded-lg shadow-lg object-cover"
        />
      </div>
      <section className="prose max-w-4xl mx-auto text-lg">
        <p>
          Our Web Development services deliver modern, responsive, and high-performance websites built with Next.js, React, and Tailwind CSS. We focus on clean code, usability, and scalability to ensure your site looks great and performs flawlessly across all devices.
        </p>
        <p>
          We work closely with you to understand your business needs and tailor a digital solution that not only meets but exceeds expectations.
        </p>
        <p>
          <strong>Contact us</strong> today to discuss how our web development expertise can help grow your online presence.
        </p>
      </section>
    </main>
  );
}