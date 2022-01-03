import Image from "next/dist/client/image";
import { useRouter } from "next/router";
import React from "react";
import ContactLabel from "./ContactLabel";

const Hero = ({ image, image1, description, button, location }) => {
  const router = useRouter();
  
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] ">
      <Image src={image} layout="fill" objectFit="cover" priority as="image" alt="Alaskan Malamute" />
      <Image src={image1} layout="fill" objectFit="cover" alt="background gradiant" />
      <div className="absolute bottom-5 w-full text-center font-fancy">
        <p className="text-xl sm:text-3xl text-white">{description}</p>
        <button onClick={() => router.push(location)} className="heroBtn">
          {button}
        </button>
      </div>
      <ContactLabel />
    </div>
  );
};

export default Hero;
