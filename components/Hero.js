import React from "react";
import Image from "next/dist/client/image";
import { useRouter } from "next/router";

const Hero = ({ image, image1, description, button, location }) => {
  const router = useRouter();
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] ">
      <Image src={image} layout="fill" objectFit="cover" priority as="image" />
      <Image src={image1} layout="fill" objectFit="cover" />
      <div className="absolute bottom-5 w-full text-center font-fancy">
        <p className="text-xl sm:text-3xl text-white">{description}</p>
        <button onClick={() => router.push(location)} className="heroBtn">
          {button}
        </button>
      </div>
      <div
        className="inline-block rounded-l-full fixed py-1 pl-3 pr-2 md:py-3 md:pl-8 md:pr-4
         bg-black right-0 top-1/4 z-40 cursor-pointer hover:scale-105"
      >
        <span className="font-fancy text-sm md:text-base text-right  text-white">
          Contact Us
        </span>
      </div>
    </div>
  );
};

export default Hero;
