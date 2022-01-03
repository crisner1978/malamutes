import {
  ChevronDoubleLeftIcon
} from "@heroicons/react/outline";
import Hero from "components/Hero";
import { getFolders, mapImageResources, search } from "lib/cloudinary";
import Image from "next/image";
import { useRouter } from "next/router";

const PuppyNames = ({ images, nextCursor, folders }) => {
  const router = useRouter();

  return (
    <>
      <Hero
        image="https://res.cloudinary.com/dtram9qiy/image/upload/v1640887994/my-uploads/f07th2tkiwz5mpcmy7el.jpg"
        image1="https://res.cloudinary.com/dtram9qiy/image/upload/v1640819418/malamuteHeros/fagefjsmcvybmb9say0y.png"
        description={`Hi, I am ${router.query.name}!`}
        button="Go Back"
        location="/puppies"
      />
      <div className="bg-gray-50">
        <div className="grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto gap-10 pt-10 px-2">
          {images?.map((image) => (
            <div key={image.id} className="mx-auto">
              <div className="relative w-[350px] h-96 cursor-pointer hover:scale-105 transform transition duration-150 ease-out rounded-xl hover:shadow-xl">
                <Image
                  src={image.image}
                  className="rounded-xl"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="bottom"
                  alt="Alaskan Malamute Puppy"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center  justify-between font-fancy md:max-w-3xl xl:max-w-6xl mx-auto py-10 px-4">
          <button
            onClick={() => router.push("/puppies")}
            className="homeCursorBtn flex items-center"
          >
            <ChevronDoubleLeftIcon className="cursorBtn pr-2" /> Go Back
          </button>
          <button onClick={() => router.push("/")} className="homeCursorBtn">
            home
          </button>
        </div>
      </div>
    </>
  );
};

export default PuppyNames;

//   export async function getStaticPaths() {
//     return {
//       paths: [],
//       fallback: true,
//     };
//   }

export async function getServerSideProps({ params }) {
  console.log("PARAMS.NAME", params.name);
  // const str = params.name;
  // const str2 = str.charAt(0).toUpperCase() + str.slice(1);
  // console.log("str2", str2);
  const results = await search({
    expression: `folder="puppies/${params.name}"`,
  });

  const { resources, next_cursor: nextCursor } = results;
  const images = mapImageResources(resources);

  const { folders } = await getFolders();
  console.log(folders);

  return {
    props: {
      images,
      nextCursor: nextCursor || false,
      folders,
    },
  };
}
