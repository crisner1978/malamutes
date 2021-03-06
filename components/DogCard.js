import Image from "next/image";
import Link from "next/link";

const DogCard = ({ img, name, id }) => {
  return (
    <Link href={`/malamute/[name]`} as={`/malamute/${name}`}>
      <div className="cursor-pointer hover:scale-105 transform transition duration-150 ease-out w-[350px]">
        <h2 className="text-3xl pb-1 text-center mt-3">{name}</h2>
        <div className="relative w-[350px] h-96 rounded-xl">
          <Image
            src={img}
            className="rounded-xl"
            layout="fill"
            objectFit="cover"
            alt="Alaskan Malamute"
          />
        </div>
      </div>
    </Link>
  );
};

export default DogCard;
