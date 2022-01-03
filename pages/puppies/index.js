import BioText from "components/BioText";
import Hero from "components/Hero";
import PuppyCard from "components/PuppyCard";
import { getFolders, mapImageResources, search } from "lib/cloudinary";
import moment from "moment";
import dynamic from "next/dynamic";
import React from "react";
import useInView from "react-cool-inview";
const PuppyVideo = dynamic(() => import("components/PuppyVideo"));

const Puppies = ({ images }) => {
  const today = moment([2021, 11, 11]).fromNow(true);
  const { observe, inView, unobserve } = useInView({
    onEnter: ({ unobserve }) => unobserve(),
  });
  // console.log(today);

  return (
    <div className="bg-gray-50">
      <Hero
        image="https://res.cloudinary.com/dtram9qiy/image/upload/v1640818645/my-uploads/htdxnuckim5oswnkpafo.jpg"
        image1="https://res.cloudinary.com/dtram9qiy/image/upload/v1640819418/malamutes/heros/cellgradiantbottom.png"
        description="Puppies Gallery"
        button="home"
        location="/"
      />

      <main className="max-w-7xl mx-auto px-3 ">
        <BioText
          title="Snow Legend Malamutes"
          // video=""
          description={`We are pleased to announce our first litter of TEN puppies from "Papa" Rollo and "Mama" Letty born on 12/11/2021. As of today, they are ${today} old 
          and growing fluffier every day. All of our puppies are vet checked, wormed, and given age appropriate shots before joining their new families. Contact us for details and pricing.`}
        />
        <div ref={observe} className="-mt-24 pb-24 grid px-3 sm:px-16 max-w-3xl items-center mx-auto">
          {inView && (
            <PuppyVideo src="https://res.cloudinary.com/dtram9qiy/video/upload/v1641098209/my-uploads/IMG_6341_u1hilb.mov" />
          )}
        </div>
        <section className="font-fancy pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 min-w-fit md:max-w-3xl md:pl-2 mx-auto gap-10 mt-5 pb-10">
            {images.map(({ id, name, image }) => (
              <div key={id} className="mx-auto">
                <PuppyCard img={image} name={name} />
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Puppies;

export async function getStaticProps() {
  const results = await search({
    expression: "folder=puppies",
  });

  const { resources, next_cursor: nextCursor } = results;
  const images = mapImageResources(resources).reverse();

  const { folders } = await getFolders();

  return {
    props: {
      images,
      nextCursor: nextCursor || false,
      folders,
    },
  };
}
