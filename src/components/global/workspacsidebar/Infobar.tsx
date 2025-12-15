import React from "react";
import { Upload } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { Video } from "lucide-react";
type props = {};
const Infobar = ({}: props) => {
  return (
    <header className="pl-20 md:pl-[600px] p-2 w-screen mt-2 flex justify-between items-center gap-2">
      <div className="flex justify-center items-center gap-2 w-full max-w-lg rounded-full border-2 text-[#d3d3d3]">
        <Search size={24} className="mx-4" />
        <Input
          size={24}
          placeholder="Serach for people , tags , projects and folders"
          className="border-0 bg-transparent placeholder-gray-400 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-none "
        />
      </div>
      <div className="flex justify-center gap-2">
        <Button className="px-8 bg-gray-800 rounded-xl p-1 flex justify-between gap-2">
          <Upload size={24} className="text-gray-400" />{" "}
          <span className="text-sm text-gray-400 font-bold">Uplaod</span>
        </Button>
        <Button className="px-8 bg-gray-800 rounded-xl p-1 flex justify-between gap-2">
          <Video size={24} className="text-gray-400" />{" "}
          <span className="text-sm text-gray-400 font-bold">Record</span>
        </Button>
        <UserButton />
      </div>
    </header>
  );
};

export default Infobar;
