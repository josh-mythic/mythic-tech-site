import { ContactForm } from 'components/contact-form';
import { Markdown } from 'components/markdown';

export const metadata = {
  title: 'Contact Us'
};

const explainer = `
Get in touch with Mythic Technology! We're here to help you elevate your brand to legendary status.
`;

export default function ContactPage() {
  return (
    <main className="container mx-auto px-4 py-16">
      <h1 className="text-6xl font-heading font-bold text-left mb-12">
        Contact Us
      </h1>
      <Markdown content={explainer} />
      <div className="flex w-full pt-12 justify-center">
        <ContactForm />
      </div>
    </main>
  );
}
