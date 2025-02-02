import Image from 'next/image';

export default function UIUXDesignPage() {
  return (
    <main className="container mx-auto px-4 py-16">
      <h1 className="text-6xl font-heading font-bold text-center mb-8">
        UI/UX Design
      </h1>
      <div className="mb-8 flex justify-center">
        <Image 
          src="/images/ui-ux-design.jpg" // Replace with your actual image path
          alt="UI/UX Design"
          width={800}
          height={450}
          className="rounded-lg shadow-lg object-cover"
        />
      </div>
      <section className="prose max-w-4xl mx-auto text-lg">
        <p>
          Our UI/UX Design services combine aesthetics and functionality to create interfaces that are not only beautiful but also intuitive and engaging. We emphasize user-centric design to ensure every digital interaction is a delight.
        </p>
        <p>
          From concept to execution, our design process is collaborative and iterative, ensuring the final product truly resonates with your audience.
        </p>
        <p>
          <strong>Let us transform</strong> your digital presence with outstanding design.
        </p>
      </section>
    </main>
  );
}
