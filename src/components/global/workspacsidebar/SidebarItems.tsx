import React, { Key } from "react";
import Link from "next/link";
import { Url } from "next/dist/shared/lib/router/router";
import { cn } from "@/lib/utils";
type SidebarItemprops = {
  title: String;
  href: Url;
  Icon: React.ReactNode;
  Selected: Boolean;
  notifications?: number;
  Key?:Key
};
const Sidebaritems = ({
  title,
  href,
  Icon,
  Selected,
  notifications,
  Key
}: SidebarItemprops) => {
  return (
    <li className="cursor-pointer my-[5px] font-sans" key={Key}>
      <Link
        href={href}
        className={cn(
          "flex items-center justify-center group rounded-lg hover:bg-[#1D1D1D]"
         , Selected?"bg-[#1d1d1d]":""
        )}
      >
        <div className="flex items-center p-1 text-white text-sm gap-2 transition-all cursor-pointer">
          {Icon}
          <span
            className={cn(
              "font-medium group-hover:text-[#9D9D9D] transition-all truncate w-32",
              Selected ? "text-white" : "text-[#5d5d5d]"
            )}
          >
            {title}
          </span>
        </div>
      </Link>
    </li>
  );
};

export default Sidebaritems;
