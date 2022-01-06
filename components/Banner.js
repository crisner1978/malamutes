import { modalState } from "atoms/modalAtom";
import Image from "next/image";
import { useRecoilState } from "recoil";
import ContactLabel from "./ContactLabel";

const Banner = () => {
  const [open, setOpen] = useRecoilState(modalState);
  return (
    <div className="relative">
      <video
        className="min-w-full relative min-h-[300px] max-h-[600px] object-cover"
        src="https://res.cloudinary.com/dtram9qiy/video/upload/v1641143077/my-uploads/snowDog_c5oxso.mov"
        autoPlay
        playsInline
        loop
        muted
      />
      <Image
        src="https://res.cloudinary.com/dtram9qiy/image/upload/v1640819429/malamutes/heros/cellgradianttop.png"
        layout="fill"
        objectfit="cover"
        priority="true"
        as="image"
        alt="background gradiant"
      />
      <Image
        src="https://res.cloudinary.com/dtram9qiy/image/upload/v1640819418/malamutes/heros/cellgradiantbottom.png"
        layout="fill"
        objectfit="cover"
        priority="true"
        alt="background gradiant"
      />
      <div className="absolute bottom-0 w-full text-center font-fancy md:hidden">
        <h2 className="text-xl sm:text-3xl text-white">
          Snow Legend Malamutes
        </h2>
        <button onClick={() => setOpen(true)} className="heroBtn">
          Contact Us
        </button>
      </div>
      <ContactLabel style="hidden md:inline-block" />
    </div>
  );
};

export default Banner;
