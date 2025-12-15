"use client";
import React from "react";
import { WorkSpace } from "@prisma/client";
import { usePathname } from "next/navigation";
import { SourceTextModule } from "vm";
type props = {
  workspace: WorkSpace;
};
const Globalheader = ({ workspace }: props) => {
  // Split Will Give you array
  const pathname = usePathname().split(`/dashboard/${workspace.Id}`)[1];
  return (
    <article className="flex flex-col gap-2">
      <span className="text-[#707070] text-xs">
        {workspace.type.toUpperCase()}
      </span>
      <h1 className="text-4xl font-bold text-[#d3d3d3]">
        {pathname && !pathname.includes("folder")
          ? pathname.charAt(0).toUpperCase() + pathname.slice(1).toLowerCase()
          : "My Library"}
      </h1>
    </article>
  );
};

export default Globalheader;
