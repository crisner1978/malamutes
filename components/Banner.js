import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative">
      <video
        className="min-w-full relative"
        src="snowDog.mov"
        autoPlay
        loop
        muted
      />
      <Image
        src="https://res.cloudinary.com/dtram9qiy/image/upload/v1639963844/hairSalonHeros/tndjyg87iw6nbrnfzspk.png"
        layout="fill"
        objectfit="cover"
        priority
      />
      <Image
        src="https://res.cloudinary.com/dtram9qiy/image/upload/v1638294355/hairSalonHeros/wgx5qjm0wqefiyk88fsn.png"
        layout="fill"
        objectfit="cover"
        priority
      />
      <div className="absolute bottom-0 w-full text-center font-fancy md:hidden">
        <p className="text-xl sm:text-3xl text-white">Snow Legend Malamutes</p>
        <button
          className="text-sm py-2 px-5 sm:py-3 sm:px-8 sm:text-base bg-white
            rounded-full mb-5 mt-2 active:scale-90 transition duration-200"
        >
          Contact Us
        </button>
      </div>
      <div
        className="hidden md:inline-block rounded-l-full fixed py-3 pl-8 pr-4
         bg-black right-0 top-1/4 z-40 cursor-pointer"
      >
        <span className="font-fancy text-right text-white">Contact Us</span>
      </div>
    </div>
  );
};

export default Banner;
