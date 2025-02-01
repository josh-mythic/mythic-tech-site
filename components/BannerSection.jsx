import Image from 'next/image';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleRight } from "@fortawesome/free-regular-svg-icons";

export function BannerSection() {
  return (
    <div className="relative">
      {/* Banner Image */}
      <div
        className="w-full h-[400px] sm:h-[450px] md:h-[550px] lg:h-[650px] bg-cover bg-end"
        style={{
          backgroundImage: "url('/images/mythic-banner.jpg')",
        }}
      />
      {/* Button Cutout */}
      <div className="absolute bottom-0 right-0 w-fit flex group items-start">
        <button
          className="relative z-10 border-2 border-primary rounded-tl-xl rounded-br-xl text-primary text-lg  font-bold px-8 py-4 text-left bg-secondary transition duration-200 group-hover:bg-secondary group-hover:text-primary-content group-hover:bg-primary font-heading"
        >
          LET US MAKE YOUR <br /> BRAND LEGENDARY
          <span className="ml-4 inline-flex items-center justify-center bg-secondary text-primary rounded-full w-10 h-10 transition duration-200 group-hover:text-primary-content group-hover:bg-primary" >
            <FontAwesomeIcon icon={faCircleRight} style={{ fontSize: '1.7rem' }} />
          </span>
        </button>
      </div>
    </div>
  );
}