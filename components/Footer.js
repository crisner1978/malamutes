import { FaRegCopyright } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="flex items-center justify-center text-center w-full bg-black">
      <section className="py-20">
        {/* Top */}
        <div className="font-fancy text-gray-200">
          <h2 className="text-2xl sm:text-3xl mb-1">Snow Legend Malamutes</h2>
          <h3 className="font-light text-lg sm:text-xl italic">Murfreesboro, TN</h3>

          {/* Middle */}
          <div className="py-8">
            <span className="flex justify-center text-sm">
              <a href="mailto:puppies@snowlegendmalamutes.com">
                puppies@snowlegendmalamutes.com
              </a>
            </span>
          </div>

          {/* Bottom */}
          <div>
            <span className="flex justify-center items-center -mb-2 text-sm">
              <FaRegCopyright className="h-5 pb-0.5 mr-1" />
              2021 Snow Legend Malamutes
            </span>
            <span className="text-xs text-gray-400">
              made by{" "}
              <a
                className="text-blue-400"
                href="https://risner-portfolio-app.web.app/"
                target="_blank"
                rel="noreferrer"
              >
                crise ~ dev
              </a>
            </span>
          </div>
        </div>
      </section>
    </footer>
  );
}
