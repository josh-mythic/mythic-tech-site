import Image from 'next/image';
import { BannerSection } from 'components/banner-section';
import { Testimonials } from 'components/testimonials';
import { RichContentSection } from 'components/rich-content-section';

export default function DigitalMarketingPage() {
  return (
    <main className="container mx-auto px-4 py-16">
      <section className="flex flex-col gap-4 m-0 rounded-xl overflow-hidden relative shadow-lg">
      <BannerSection
        backgroundImage="/images/digital-marketing.jpg"
        buttonContent={<>YOUR MARKET IS <br /> OUR QUEST</>}
        buttonLink="/contact"
        headerText="Digital Marketing Excellence"
      />
      </section>
      {/* <Testimonials /> */}
      <RichContentSection
        header="Digital Marketing That Delivers"
        paragraphs={[
          "Our Digital Marketing services are designed to boost your online presence and drive measurable business growth.",
          "We blend creative storytelling with data-driven insights to craft campaigns that captivate and convert your target audience.",
          "From SEO to social media advertising, our tailored strategies help you stand out in a competitive digital landscape."
        ]}
        imageSrc="/images/digital-marketing.jpg"
        imageAlt="Digital Marketing"
        imagePosition="left"
        buttonText="Contact Us Today"
        buttonLink="/contact"
      />
    </main>
  );
}
