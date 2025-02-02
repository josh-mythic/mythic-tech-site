import Image from 'next/image';

export default function DigitalMarketingPage() {
  return (
    <main className="container mx-auto px-4 py-16">
      <h1 className="text-6xl font-heading font-bold text-center mb-8">
        Digital Marketing
      </h1>
      <div className="mb-8 flex justify-center">
        <Image 
          src="/images/digital-marketing.jpg" // Replace with your actual image path
          alt="Digital Marketing"
          width={800}
          height={450}
          className="rounded-lg shadow-lg object-cover"
        />
      </div>
      <section className="prose max-w-4xl mx-auto text-lg">
        <p>
          Our Digital Marketing services are designed to boost your online presence and drive measurable business growth. We craft tailored strategies that encompass SEO, social media, content marketing, and paid advertising to reach your target audience effectively.
        </p>
        <p>
          By combining creative storytelling with data-driven insights, we ensure that every campaign is optimized for success.
        </p>
        <p>
          <strong>Contact us</strong> today to discuss how our digital marketing expertise can elevate your brand.
        </p>
      </section>
    </main>
  );
}
