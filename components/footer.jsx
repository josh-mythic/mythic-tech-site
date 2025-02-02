import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebookF, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

export function Footer() {
  return (
    <footer className="bg-primary text-quaternary">
      {/* Main Content: Three Columns */}
      <div className="container mx-auto px-4 py-16 sm:py-24 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
        {/* Column 1: Logo & Contact */}
        <div className="flex flex-col items-center">
          <Image
            src="/mythic-logo-stacked-obsidian.svg"
            alt="Mythic Technology Logo"
            width={150}
            height={75}
          />
          <p className="mt-4 text-sm">
            <FontAwesomeIcon icon={faEnvelope} size="lg" className="pr-3" />
            <a href="mailto:josh@mythic-tech.com" className="underline hover:opacity-80">
              josh@mythic-tech.com
            </a>
          </p>
          {/*
          <p className="mt-1 text-sm">
            Phone:{" "}
            <a href="tel:+1234567890" className="underline hover:opacity-80">
              (123) 456-7890
            </a>
          </p>
          */}
        </div>

        {/* Column 2: Links Group */}
        <div className="flex flex-col items-center">
          <h3 className="mb-4 font-heading font-bold text-2xl">Links</h3>
          <ul className="grid grid-cols-2 gap-y-2 gap-x-4">
            <li>
              <Link href="/" className="no-underline font-bold hover:text-secondary">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="no-underline font-bold hover:text-secondary">
                About
              </Link>
            </li>
            <li>
              <Link href="/portfolio" className="no-underline font-bold hover:text-secondary">
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="/contact" className="no-underline font-bold hover:text-secondary">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Socials Group */}
        <div className="flex flex-col items-center">
          <h3 className="mb-4 font-heading font-bold text-2xl">Socials</h3>
          <ul className="flex justify-center space-x-4">
            <li>
              <Link
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary font-bold no-underline"
              >
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary font-bold no-underline"
              >
                <FontAwesomeIcon icon={faFacebookF} size="lg" />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary font-bold no-underline"
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
            <Link href="/privacy" className="underline hover:opacity-80 font-bold no-underline">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}