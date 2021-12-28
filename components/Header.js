import Image from "next/image";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  return (
    <header className="sticky bg-white top-0 z-50 border-b shadow-md">
      <nav className="flex justify-between max-w-6xl px-5 sm:px-10 lg:mx-auto  py-3">
        {/* Left Side */}
        <div className="flex items-center cursor-pointer" onClick={() => router.push("/")}>
          <div className="relative flex items-center h-12 w-12">
            <Image src="/snowLegend.png" layout="fill" objectFit="contain" priority />
          </div>
          <h1 className="hidden md:inline-block  ml-3 text-xl font-fancy">
            Snow Legend Malamutes
          </h1>
        </div>

        {/* Right Side */}
        <div className="flex items-center justify-end space-x-4 font-fancy text-sm">
            <h3 className={`${router.asPath === '/about' && "text-blue-500"} cursor-pointer`} onClick={() => router.push('/about')}>About Us</h3>
            <h3 className={`${router.asPath === '/puppies' && "text-blue-500"} cursor-pointer`} onClick={() => router.push('/puppies')}>Puppies</h3>
            <h3 className={`${router.asPath === '/adoption' && "text-blue-500"} cursor-pointer`} onClick={() => router.push('/adoption')}>Adoption App</h3>
        </div>
      </nav>
    </header>
  );
};

export default Header;
