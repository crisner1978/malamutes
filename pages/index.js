import Banner from "components/Banner";
import Header from "components/Header";
import MediumCard from "components/mediumCard";
import { getFolders, mapImageResources, search } from "lib/cloudinary";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home({ images }) {
  console.log(images);
  return (
    <div className="">
      <Head>
        <title>Snow Legend Malamutes</title>
        <link rel="icon" href="/snowLegend.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@700&display=swap"
          rel="stylesheet"
        />
      </Head>
      {/* HEADER put in _app.js */}
      {/* <Header /> */}

      {/* BANNER */}
      <Banner />
      <main className="max-w-7xl mx-auto px-10 md:px-0 bg-gray-100">
        <section className="font-fancy pt-8">
          <h2 className="text-3xl pb-2 md:text-center">Our Malamutes</h2>
          <div className="relative  max-w-3xl mx-auto h-80 sm:h-96">
              <Image
                src="https://res.cloudinary.com/dtram9qiy/image/upload/v1640670548/LettyRollo/re8gcudx5zv4jctzfsen.jpg"
                className="rounded-xl"
                layout="fill"
                objectFit="cover"
                objectPosition="top"
                priority
              />
            </div>
          <div className="grid grid-cols-1 md:grid-cols-2 md:max-w-3xl md:pl-2 mx-auto gap-5 mt-5 pb-10">
            {images.map(({ id, name, image }) => (
              <div key={id}>
                <MediumCard img={image} name={name} />
              </div>
            ))}
          </div>
        </section>

        <section>
          {/* PUPPIES SMALL CARDS OR A BIG POSTER CARD OF ALL PUPPIES */}
        </section>
      </main>

      {/* FOOTER */}
    </div>
  );
}

export async function getStaticProps({ params }) {
  console.log("params",params);
  const results = await search({
    expression: "folder=malamuteCards",
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
