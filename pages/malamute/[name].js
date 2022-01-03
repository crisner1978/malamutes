import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/react/outline";
import BioText from "components/BioText";
import Hero from "components/Hero";
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
      {router.query.name === "letty" ? (
        <>
          <Hero
            image="https://res.cloudinary.com/dtram9qiy/image/upload/v1640466871/malamutes/heros/letty.jpg"
            image1="https://res.cloudinary.com/dtram9qiy/image/upload/v1640819418/malamutes/heros/cellgradiantbottom.png"
            description={`${router.query.name}'s gallery`}
            button="Home"
            location="/"
          />
          <BioText
            title="Hi, my name is Letty!"
            description="I'm a beautiful 85lb gray and white Alaskan Malamtue born on 5/21/2018. I have a very loving and 
            loyal disposition. I enjoy long walks and movies in bed with my humans. Sometimes you'll find me on the couch too."
          />
        </>
      ) : (
        <>
          <Hero
            image="https://res.cloudinary.com/dtram9qiy/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1640731348/malamutes/heros/qdutpmhwabbwrqhcwexm.jpg"
            image1="https://res.cloudinary.com/dtram9qiy/image/upload/v1640819418/malamutes/heros/cellgradiantbottom.png"
            description={`${router.query.name}'s gallery`}
            button="Home"
            location="/"
          />
          <BioText title="Hey, my name is Rollo!" description="I'm a huge and handsome 120lb gray and white Alaskan Malamute born on 12/21/20.
          I am most definitely a lover not a fighter. All encounters come with hugs and kisses! Gentle giant who enjoys cuddling, chasing my tail and chewing a nice bone next to the fire." />
        </>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto gap-10 mt-10 px-2">
        {images?.map((image) => (
          <div key={image.id} className="mx-auto">
            <div className="relative w-[350px] h-96 cursor-pointer hover:scale-105 transform transition duration-150 ease-out rounded-xl hover:shadow-xl">
              <Image
                src={image.image}
                className="rounded-xl"
                layout="fill"
                objectFit="cover"
                objectPosition="bottom"
                alt="Alaskan Malamute"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center  justify-between font-fancy md:max-w-3xl xl:max-w-6xl mx-auto py-10 px-4">
        {router.query.name === "letty" && (
          <button onClick={() => router.push("/")} className="homeCursorBtn">
            home
          </button>
        )}
        <Link href={`/malamute/[name]`} as={`/malamute/${opposite}`}>
          <span
            className={`cursorLabel ${
              router.query.name === "rollo"
                ? "hover:text-pink-500"
                : "hover:text-blue-500"
            }`}
          >
            {router.query.name === "rollo" && (
              <ChevronDoubleLeftIcon className="cursorBtn text-pink-500 pr-2" />
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

// export async function getStaticPaths() {
//   return {
//     paths: [],
//     fallback: true,
//   };
// }

export async function getServerSideProps({ params }) {
  console.log("PARAMS.NAME", params.name);
  const str = params.name;
  
  const results = await search({
    expression: `folder="malamutes/${str}"`,
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
