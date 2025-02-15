import { Services } from 'components/services';
import { BannerSection } from 'components/banner-section';

export default function ServicesPage() {
  return (
    <main className="container mx-auto px-4 py-16">
      <section className="flex flex-col gap-4 m-0 rounded-xl overflow-hidden relative shadow-lg">
            <BannerSection
              backgroundImage="/images/corgi.jpg"
              buttonContent={<>YOUR MARKET IS <br /> OUR QUEST</>}
              buttonLink="/contact"
              headerText="Services For All Your Needs"
            />
            </section>
      <Services />
    </main>
  );
}
