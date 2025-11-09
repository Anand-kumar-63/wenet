import React from "react";
import Image from "next/image";
import { Menu } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react";
type props = {};
const LandingPageNavbar = (props: props) => {
  return (
    <nav className="flex flex-row w-full">
      <div className="flex flex-row items-center justify-between h-12 w-full">
        <Menu className="h-6 w-6 text-black ml-4" />
        {/* <Image src={""} alt="Image" /> */}
        <ul className="flex flex-row items-center font-light">
          <Link
            href={""}
            className="px-6 bg-blue-400 text-sm py-1 text-white rounded-xl m-1 hover:bg-blue-600 hover:text-white"
          >
            <li>Home</li>
          </Link>
          <Link
            href={""}
            className="px-6 bg-blue-400 rounded-xl text-white text-sm py-1 m-1 hover:bg-blue-600 hover:text-white"
          >
            <li>Contact</li>
          </Link>
          <Link
            href={""}
            className="px-6 bg-blue-400 text-white rounded-xl text-sm py-1 m-1 hover:bg-blue-600 hover:text-white"
          >
            <li>Services</li>
          </Link>
          <Link
            href={""}
            className="px-6 bg-blue-400 rounded-xl text-white text-sm py-1 m-1 hover:bg-blue-600 hover:text-white"
          >
            <li>About us</li>
          </Link>
        </ul>
        <Button className="px-6 bg-gray-400 text-sm py-1 rounded-xl  m-1">
          <LogIn />
          Sign-in
        </Button>
      </div>
    </nav>
  );
};
export default LandingPageNavbar;
