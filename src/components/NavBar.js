import { useState } from "react";
import DarkButton from "./ui/DarkButton";

export default function Navbar(){
    const [ isNavOpen, setIsNavOpen ] = useState(false);

    return (
        <div className="flex items-center justify-between py-2 px-6 sm:px-6 md:px-10 lg:px-20 sm:max-w-4xl md:max-w-5xl lg:max-w-7xl xl:max-w-screen-2xl max-w-md mx-auto bg-white">
        <a href="/">
          <img src="/images/logo.png" alt="logo" />
        </a>
        <nav className="">
          <section className="flex md:hidden z-50">
            <div className="space-y-2" onClick={() => setIsNavOpen((prev) => !prev)} >
              <img src="/ham.svg" alt="menu" className="mr-2" />
            </div>
            <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
              <div
                className="absolute top-0 right-0 px-4 py-8"
                onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
              >
                <svg
                  className="h-8 w-8 text-[#D8B25D]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </div>
              <div className="flex flex-col items-center justify-center min-h-[250px]">
                <span className="text-[#131313] text-base my-8">Download Broucher</span>
                <DarkButton>Contact Us</DarkButton>
              </div>
            </div>
          </section>

          <div className="hidden space-x-8 md:flex justify-center items-center">
            <span >Download Broucher</span>
            <DarkButton>Contact Us</DarkButton>
          </div>
        </nav>
      </div>
    )
}