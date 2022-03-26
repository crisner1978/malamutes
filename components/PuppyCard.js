import Image from "next/image";
import Link from "next/link";

const PuppyCard = ({ img, name, id }) => {
  const female = name == "tove" || name == "freya";
  const reserved = name == "omega"
  const sold = name == "bjorn" || name == "curly" || name == "tove" || name == "vader" || name == "gunnar" || name == "freya";

  return (
    <Link href={`/puppies/[name]`} as={`/puppies/${name}`}>
      <div className="cursor-pointer hover:scale-105 transform transition duration-150 ease-out w-[350px]">
        <h2
          className={`rounded-t-xl text-3xl py-2 text-center mt-3 text-white bg-gradient-to-t  ${
            female ? "from-pink-300 to-pink-500" : "from-blue-300 to-blue-500"
          }`}
        >
          {name} - {female ? "female" : "male"}
        </h2>
        <div className="relative w-[350px] h-96">
          <Image
            src={img}
            className="rounded-b-xl"
            layout="fill"
            objectFit="cover"
            alt="Alaskan Malamute Puppy"
          />
        </div>
        {reserved && (
          <label className="text-6xl text-rose-600  absolute bottom-[10px] left-8">
            reserved
          </label>
        )}
        {sold && (
          <label className="text-6xl text-rose-600  absolute bottom-[10px] left-24">
            sold
          </label>
        )}
      </div>
    </Link>
  );
};

export default PuppyCard;
