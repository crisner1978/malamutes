import Banner from "components/Banner";
import MediumCard from "components/mediumCard";
import { getFolders, mapImageResources, search } from "lib/cloudinary";
import moment from "moment";
import Image from "next/image";
import { useRouter } from "next/router";
import useInView from "react-cool-inview";
import dynamic from "next/dynamic";
const PuppyVideo = dynamic(() => import("components/PuppyVideo"));

export default function Home({ images }) {
  const today = moment([2021, 11, 11]).fromNow(true);
  const router = useRouter();
  const { observe, inView } = useInView({
    onEnter: ({ unobserve }) => unobserve(),
  });
  return (
    <div className="bg-gray-50">
      <Banner />
      <main className="max-w-7xl mx-auto px-3">
        <section className="py-24 grid px-3 sm:px-0 max-w-3xl items-center mx-auto">
          <div className="flex flex-col items-center justify-center pb-4 pt-10">
            <div className="relative h-40 w-40 mb-4">
              <Image
                src="/snowLegend.png"
                layout="fill"
                objectFit="contain"
                className="opacity-80"
                alt="Snow Legend Malamutes logo"
              />
            </div>
            <div>
              <h1 className="text-center hidden md:inline-flex text-xl sm:text-2xl md:text-3xl font-fancy shadow-sm">
                Snow Legend Malamutes
              </h1>
            </div>
          </div>

          <div className="text-gray-500 font-medium text-xl">
            <p className="indent-10 pb-5">
              {`We are pleased to announce our first litter of TEN puppies from
              "Papa" Rollo and "Mama" Letty. Today the puppies are ${today} old. Please visit our`}{" "}
              <span
                className="text-blue-500 cursor-pointer"
                onClick={() => router.push("/puppies")}
              >
                Puppies{" "}
              </span>
              page for additional details and photos. All of our puppies are vet
              checked, wormed, and given age appropriate shots before joining
              their new families.
            </p>
            <div ref={observe}>
              {inView && (
              <PuppyVideo src="https://res.cloudinary.com/dtram9qiy/video/upload/v1641098209/my-uploads/IMG_6341_u1hilb.mov" />
            )}
            </div>
            
          </div>
        </section>
        <section className="font-fancy pb-24">
          <h2 className="text-3xl pb-2 md:text-center">Our Malamutes</h2>
          <div className="relative min-w-[350px]  max-w-3xl mx-auto h-80 sm:h-96">
            <Image
              src="https://res.cloudinary.com/dtram9qiy/image/upload/v1640670548/malamutes/lettyandrollo/re8gcudx5zv4jctzfsen.jpg"
              className="rounded-xl"
              layout="fill"
              objectFit="cover"
              objectPosition="top"
              alt="Our Malamutes"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 min-w-fit md:max-w-3xl md:pl-2 mx-auto gap-10 mt-5 pb-10">
            {images.map(({ id, name, image }) => (
              <div key={id} className="mx-auto rounded-xl">
                <MediumCard img={image} name={name} />
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const results = await search({
    expression: "folder=malamutes/malamuteCards",
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
