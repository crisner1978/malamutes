import Hero from "components/Hero";
import Head from "next/head";
import Image from "next/image";

export default function About() {
  return (
    <main className="bg-gray-100">
      <section className="pt-16 pb-10 grid px-6 sm:px-16 max-w-3xl items-center mx-auto">
        <div className="flex flex-col items-center justify-center pb-10">
          <div className="relative h-40 w-40 mb-3">
            <Image
              src="/snowLegend.png"
              layout="fill"
              objectFit="contain"
              className="opacity-80"
            />
          </div>
          <div>
            <h1 className="text-center text-xl sm:text-2xl md:text-3xl opacity-80 font-fancy shadow-sm">
              Snow Legend Malamutes
            </h1>
          </div>
        </div>
        <div
          className="inline-block rounded-l-full fixed py-1 pl-3 pr-2
         bg-black right-0 top-1/4 z-40 cursor-pointer hover:scale-105"
        >
          <span className="font-fancy text-sm text-right  text-white">
            Contact Us
          </span>
        </div>

        <div className="text-gray-500 font-medium text-lg md:text-xl ">
          <p className="indent-10 pb-5">
            Our mission is to offer healthy, beautiful, well behaved and even
            tempered puppies. Our malamutes are a part of our family. They live
            in our home, snuggle next to us on the couch, and are not secluded
            to outdoor kennels.
          </p>
          <p className="indent-10 pb-5">
            We treasure our dogs and spoil them with love and affection daily.
            They are wonderful family pets! They adore our three children and
            enjoy playing with them. These gentle giants are stubborn but they
            are highly intelligent and easily trained with patience. They are
            "pack animals", (extremely loyal to the family) but require an owner
            who can serve as the "Alpha" role to earn their respect and offer
            the structure they thrive best in. Consistency with boundaries is
            the key. Otherwise, you will have a 100lb dog you cannot control.
          </p>
        </div>
      </section>
    </main>
  );
}
