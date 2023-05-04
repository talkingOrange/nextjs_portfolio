import DarkModeBtn from "./DarkModeBtn";
import NavBar from "./NavBar";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link href="/about" legacyBehavior>
            <div className="flex items-center mb-4 md:mb-0">
              <Image
                src="/profileImg.jpg"
                alt="Picture of the author"
                width={40} //automatically provided
                height={40} //automatically provided
                className="rounded-full"
              />
            </div>
          </Link>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <NavBar />
          </nav>
          <DarkModeBtn />
        </div>
      </header>
    </>
  );
}
