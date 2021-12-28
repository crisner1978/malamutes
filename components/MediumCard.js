import Image from "next/image";
import Link from "next/link";

const MediumCard = ({ img, name, id }) => {
  return (
    <Link href={`/malamutes/[name]`} as={`/malamutes/${name}`}>
      <div className="cursor-pointer hover:scale-105 transform transition duration-150 ease-out">
        <h2 className="text-3xl pb-2 md:text-center mt-3">{name}</h2>
        <div className="relative w-[360px] h-96">
          <Image
            src={img}
            className="rounded-xl"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
      </div>
    </Link>
  );
};

export default MediumCard;
