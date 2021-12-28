import React from "react";
import Image from "next/dist/client/image";

const Hero = ({ image, description, button }) => {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] ">
      <Image
        src="https://a0.muscache.com/im/pictures/57b9f708-bb12-498c-bc33-769f8fc43e63.jpg?im_w=1440"
        layout="fill"
        objectFit="cover"
        objectPosition="bottom"
      />
      <div className="absolute top-1/2 w-full text-center">
        <p className="font-semibold text-sm sm:text-lg">
          Not sure where to go? Perfect.
        </p>
        <button className="text-purple-500 bg-white py-4 px-10 my-3 shadow-md rounded-full font-bold hover:shadow-xl active:scale-90 transition duration-200">
          {button}
        </button>
      </div>
    </div>
  );
};

export default Hero;
