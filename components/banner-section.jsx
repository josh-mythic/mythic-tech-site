"use client";

import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleRight } from "@fortawesome/free-regular-svg-icons";

/**
 * BannerSection component renders a banner with a background image, an optional header text in the top-left,
 * and a call-to-action button in the bottom-right.
 *
 * @param {Object} props - Component properties.
 * @param {string} [props.backgroundImage="/images/mythic-banner.jpg"] - URL of the background image.
 * @param {React.ReactNode} [props.buttonContent=(<>LET US MAKE YOUR <br /> BRAND LEGENDARY</>)] - Content to display within the button.
 * @param {string} [props.buttonLink="/"] - URL to navigate to when the button is clicked.
 * @param {string} [props.headerText=""] - Optional header text displayed in the top-left corner.
 * @returns {JSX.Element} The rendered BannerSection component.
 */
export function BannerSection({
  backgroundImage = "/images/mythic-banner.jpg",
  buttonContent = (
    <>
      LET US MAKE YOUR <br /> BRAND LEGENDARY
    </>
  ),
  buttonLink = "/",
  headerText = ""
}) {
  return (
    <section className="flex flex-col gap-4 m-0 rounded-xl overflow-hidden relative shadow-lg">
      <div className="relative">
        {/* Banner Image */}
        <div
          className="w-full h-[400px] sm:h-[450px] md:h-[550px] lg:h-[650px] bg-cover bg-end"
          style={{ backgroundImage: `url('${backgroundImage}')` }}
        />

        {/* Optional Header Text at Top-Left */}
        {headerText && (
          <div className="absolute top-0 left-0 m-0 border-2 border-primary rounded-br-xl rounded-tl-xl bg-secondary px-8 py-4 font-heading text-primary text-4xl font-bold uppercase">
            {headerText}
          </div>
        )}

        {/* Button Cutout */}
        <div className="absolute bottom-0 right-0 w-fit flex items-start group">
          <Link href={buttonLink}>
            <button
              className="relative z-10 border-2 border-primary rounded-tl-xl rounded-br-xl text-primary text-2xl font-bold px-8 py-4 text-left bg-secondary transition duration-200 uppercase group-hover:text-primary-content group-hover:bg-primary font-heading"
            >
              {buttonContent}
              <span className="ml-4 inline-flex items-center justify-center bg-secondary text-primary rounded-full w-10 h-10 transition duration-200 group-hover:text-primary-content group-hover:bg-primary">
                <FontAwesomeIcon icon={faCircleRight} style={{ fontSize: '1.7rem' }} />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

