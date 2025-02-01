import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebookF, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

export function Footer() {
  return (
    <footer className="bg-primary text-quaternary">
      {/* Main Content: Three Columns */}
      <div className="container mx-auto px-4 py-16 sm:py-24 grid grid-cols-1 sm:grid-cols-3 gap-8">
        {/* Column 1: Logo & Contact */}
        <div className="flex flex-col items-start">
          <Image 
            src="\mythic-logo-stacked-obsidian.svg" 
            alt="Mythic Technology Logo" 
            width={150} 
            height={75} 
          />
          <p className="mt-4 text-sm">
            Email:{" "}
            <a href="mailto:contact@mythictech.com" className="underline hover:opacity-80">
              contact@mythictech.com
            </a>
          </p>
          <p className="mt-1 text-sm">
            Phone:{" "}
            <a href="tel:+1234567890" className="underline hover:opacity-80">
              (123) 456-7890
            </a>
          </p>
        </div>

        {/* Column 2: Links Group */}
        <div className="flex flex-col">
          <h3 className="mb-4 font-bold">Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link href="/portfolio" className="hover:underline">
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Socials Group */}
        <div className="flex flex-col">
          <h3 className="mb-4 font-bold">Socials</h3>
          <ul className="flex space-x-4">
            <li>
              <Link 
                href="https://www.instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-secondary"
              >
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </Link>
            </li>
            <li>
              <Link 
                href="https://www.facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-secondary"
              >
                <FontAwesomeIcon icon={faFacebookF} size="lg" />
              </Link>
            </li>
            <li>
              <Link 
                href="https://www.linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-secondary"
              >
                <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Lower Section: Separator & Copyright */}
      <div className="container mx-auto px-4">
        <div className="border-t border-gray-300 pt-4 mt-8">
          <p className="text-center text-xs">
            © 2024 Mythic Technology LLC. All Rights Reserved. |{" "}
            <Link href="/privacy" className="underline hover:opacity-80">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
