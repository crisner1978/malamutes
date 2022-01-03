import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  return (
    <header className="sticky bg-white top-0 z-50 border-b shadow-md">
      <nav className="flex justify-between max-w-6xl mx-5 sm:mx-10 xl:mx-auto py-2">
        {/* Left Side */}
        <div className="flex items-center cursor-pointer" onClick={() => router.push("/")}>
          <div className="relative flex items-center h-14 w-14">
            <Image src="/snowLegend.png" layout="fill" objectFit="contain" alt="Snow Legend Malamutes logo" />
          </div>
          <h1 className="hidden md:inline-block  ml-3 text-xl font-fancy">
            Snow Legend Malamutes
          </h1>
        </div>

        {/* Right Side */}
        <div className="flex items-center justify-end space-x-4 font-fancy text-sm">
            <Link className={`${router.asPath === '/about' && "text-blue-500"} navBtn`} href='/about'>About Us</Link>
            <Link className={`${router.asPath === '/puppies' && "text-blue-500"} navBtn`} href='/puppies'>Puppies</Link>
            <Link className={`${router.asPath === '/adoption' && "text-blue-500"} navBtn`} href='/adoption'>Adoption App</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
