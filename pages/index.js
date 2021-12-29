import Banner from "components/Banner";
import MediumCard from "components/mediumCard";
import { getFolders, mapImageResources, search } from "lib/cloudinary";
import Image from "next/image";

export default function Home({ images }) {
  return (
    <div className="">
      {/* Head in _app.js */}
      {/* HEADER put in _app.js */}
      {/* <Header /> */}

      {/* BANNER */}
      <Banner />
      <main className="max-w-7xl mx-auto px-2 sm:px-10 bg-gray-50">
        <section className="font-fancy pt-8">
          <h2 className="text-3xl pb-2 md:text-center">Our Malamutes</h2>
          <div className="relative min-w-[360px]  max-w-3xl mx-auto h-80 sm:h-96">
            <Image
              src="https://res.cloudinary.com/dtram9qiy/image/upload/v1640670548/LettyRollo/re8gcudx5zv4jctzfsen.jpg"
              className="rounded-xl"
              layout="fill"
              objectFit="cover"
              objectPosition="top"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 min-w-fit md:max-w-3xl md:pl-2 mx-auto gap-5 mt-5 pb-10">
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

export async function getStaticProps() {
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
