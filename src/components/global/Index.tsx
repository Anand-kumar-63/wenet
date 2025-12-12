import React from "react";
import Spinner from "./Spinner";
import { cn } from "@/lib/utils";

interface loaderprops {
  state: boolean;
  children: React.ReactNode;
  Color?: string;
  classname?: string;
}

const Loader = ({ state, children, Color, classname }: loaderprops) => {
  return state ? (
    <div className={cn(classname)}>
      <Spinner color={Color} />
    </div>
  ) : (
    children
  );
};

export default Loader;
