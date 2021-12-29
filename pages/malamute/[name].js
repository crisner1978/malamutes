import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/react/outline";
import { getFolders, mapImageResources, search } from "lib/cloudinary";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const Malamutes = ({ images, nextCursor, folders }) => {
  const router = useRouter();
  console;
  const opposite =
    router.query.name === "rollo"
      ? "letty"
      : router.query.name === "letty"
      ? "rollo"
      : null;

  console.log("Query", router.query);

  return (
    <div className="bg-gray-50">
      <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] ">
        {router.query.name === "rollo" && (
          <Image
            src="https://res.cloudinary.com/dtram9qiy/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1640731348/malamuteHeros/qdutpmhwabbwrqhcwexm.jpg"
            layout="fill"
            objectFit="cover"
            priority
          />
        )}
        {router.query.name === "letty" && (
          <Image
            src="https://res.cloudinary.com/dtram9qiy/image/upload/v1640466871/malamuteHeros/maa1on3byr3ki0c190m9.jpg"
            layout="fill"
            objectFit="cover"
            objectPosition=""
          />
        )}

        <div className="absolute bottom-0 w-full text-center font-fancy">
          <p
            className={`text-xl sm:text-3xl ${
              router.query.name === "rollo" && "text-white"
            }`}
          >
            {router.query.name}'s Gallery
          </p>
          <button
            onClick={() => router.push("/")}
            className="text-sm py-2 px-5 sm:py-3 sm:px-8 sm:text-base bg-white
            rounded-full mb-5 mt-2 active:scale-90 transition duration-200"
          >
            home
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto gap-10 mt-10 px-2">
        {images?.map((image) => (
          <div key={image.id}>
            <div className="relative w-[360px] h-96 cursor-pointer hover:scale-105 transform transition duration-150 ease-out rounded-xl hover:shadow-xl">
              <Image
                src={image.image}
                className="rounded-xl"
                layout="fill"
                objectFit="cover"
                objectPosition="bottom"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center  justify-between font-fancy md:max-w-3xl xl:max-w-6xl mx-auto py-10 px-2">
        {router.query.name === "letty" && (
          <button onClick={() => router.push("/")} className="homeCursorBtn">
            home
          </button>
        )}
        <Link href={`/malamute/[name]`} as={`/malamute/${opposite}`}>
          <span className="font-fancy inline-flex items-center cursor-pointer hover:scale-110 transition-all duration-150 ease-out">
            {router.query.name === "rollo" && (
              <ChevronDoubleLeftIcon className="cursorBtn pr-2" />
            )}
            {`${opposite}'s Gallery`}
            {router.query.name === "letty" && (
              <ChevronDoubleRightIcon className="cursorBtn pl-2" />
            )}
          </span>
        </Link>
        {router.query.name === "rollo" && (
          <button onClick={() => router.push("/")} className="homeCursorBtn">
            home
          </button>
        )}
      </div>
    </div>
  );
};

export default Malamutes;

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  console.log("PARAMS.NAME", params.name);
  const str = params.name;
  const str2 = str.charAt(0).toUpperCase() + str.slice(1);
  console.log("str2", str2);
  const results = await search({
    expression: `folder="${str2}"`,
  });

  const { resources, next_cursor: nextCursor } = results;
  const images = mapImageResources(resources);

  const { folders } = await getFolders();
  console.log(folders)

  return {
    props: {
      images,
      nextCursor: nextCursor || false,
      folders,
    },
  };
}
