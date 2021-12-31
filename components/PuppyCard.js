import Image from "next/image";
import Link from "next/link";

const PuppyCard = ({ img, name, id }) => {
  const female = name == "liv" || name == "tove" || name == "freya";
  return (
    <Link href={`/puppies/[name]`} as={`/puppies/${name}`}>
      <div className="cursor-pointer hover:scale-105 transform transition duration-150 ease-out">
        <h2 className={`text-3xl pb-1 md:text-center mt-3 ${female ? "text-pink-500" : "text-blue-500"}`}>
          {name}
        </h2>
        <div className="relative w-[360px] h-96">
          <Image
            src={img}
            className="rounded-xl"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </Link>
  );
};

export default PuppyCard;
