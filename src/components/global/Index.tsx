
import React from "react";
import Spinner from "./Spinner";
import { cn } from "@/lib/utils";

interface loaderprops {
  state: string;
  Children: React.ReactNode;
  Color: string;
  classname: string;
}

const Loader = ({ state, Children, Color, classname }: loaderprops) => {
  return state ? (
    <div className={cn(classname)}>
      <Spinner color={Color}/>
    </div>
  ) : (
    Children
  );
};

export default Loader;
