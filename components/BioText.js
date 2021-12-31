import Image from "next/image";

function BioText({ title, description }) {
  return (
    <section className="py-24 grid px-3 sm:px-16 max-w-3xl items-center mx-auto">
      <div className="flex flex-col items-center justify-center pb-4 pt-10">
        <div className="relative h-40 w-40 mb-4">
          <Image
            src="/snowLegend.png"
            layout="fill"
            objectFit="contain"
            className="opacity-80"
          />
        </div>
        <div>
          <h1 className="text-center hidden md:inline-flex text-xl sm:text-2xl md:text-3xl font-fancy shadow-sm">
            {title}
          </h1>
        </div>
      </div>

      <div className="text-gray-500 font-medium text-xl">
        <p className="indent-10 pb-5">{description}</p>
      </div>
    </section>
  );
}

export default BioText;
