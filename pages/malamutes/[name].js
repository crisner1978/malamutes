import { useRouter } from "next/router";
import { mapImageResources, search, getFolders } from "lib/cloudinary";
import Image from "next/image";
import { useState } from "react";

const Malamutes = ({ images, nextCursor, folders }) => {
  const router = useRouter();
  console

  console.log("Query", router.query);

  return (
    <>
      <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] mt-0 ">
        {router.query.name === "rollo" && (
          <Image
            src="https://res.cloudinary.com/dtram9qiy/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1640651924/my-uploads/f2jq3mcxbnizydnoys3v.jpg"
            layout="fill"
            objectFit="cover"
            objectPosition=""
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
          <p className={`text-xl sm:text-3xl ${router.query.name === "rollo" && "text-white"}`}>
            {router.query.name}'s Photo Gallery
          </p>
          <button onClick={() => router.push('/')}
            className="text-sm py-2 px-5 sm:py-3 sm:px-8 sm:text-base bg-white
            rounded-full mb-5 mt-2 active:scale-90 transition duration-200"
          >
            Home
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto gap-5 my-10 px-10 md:px-0">
        {images?.map((image) => (
          <div key={image.id}>
            <div className="relative w-[350px] h-96 cursor-pointer hover:scale-105 transform transition duration-150 ease-out">
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
    </>
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
    expression: `folder=${str2}`,
  });

  const { resources, next_cursor: nextCursor } = results;
  const images = mapImageResources(resources);

  const { folders } = await getFolders();

  return {
    props: {
      images,
      nextCursor: nextCursor || false,
      folders,
    },
  };
}
