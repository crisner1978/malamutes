import { modalState } from "atoms/modalAtom";
import Image from "next/image";
import { useRecoilState } from "recoil";

const Banner = () => {
  const [open, setOpen] = useRecoilState(modalState);
  return (
    <div className="relative">
      <video
        className="min-w-full relative min-h-[300px] max-h-[600px] object-cover"
        src="snowDog.mov"
        autoPlay
        loop
        muted
      />
      <Image
        src="https://res.cloudinary.com/dtram9qiy/image/upload/v1640819418/malamuteHeros/fagefjsmcvybmb9say0y.png"
        layout="fill"
        objectfit="cover"
        priority="true"
        as="image"
      />
      <Image
        src="https://res.cloudinary.com/dtram9qiy/image/upload/v1640819429/malamuteHeros/p54e8ptgcsag3inqs9qg.png"
        layout="fill"
        objectfit="cover"
        priority="true"
      />
      <div className="absolute bottom-0 w-full text-center font-fancy md:hidden">
        <p className="text-xl sm:text-3xl text-white">Snow Legend Malamutes</p>
        <button onClick={() => setOpen(true)} className="heroBtn">
          Contact Us
        </button>
      </div>
      <div
        className="hidden md:inline-block rounded-l-full fixed py-3 pl-8 pr-4
         bg-black right-0 top-1/4 z-40 cursor-pointer"
      >
        <span
          onClick={() => setOpen(true)}
          className="font-fancy text-right text-white"
        >
          Contact Us
        </span>
      </div>
    </div>
  );
};

export default Banner;
