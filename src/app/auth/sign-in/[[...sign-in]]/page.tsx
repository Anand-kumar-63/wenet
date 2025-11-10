import React from "react";
import { SignIn, useUser } from "@clerk/nextjs";
const page = () => {
//   const { isSignedIn } = useUser();
  return (
    <div className="">
      <SignIn />
    </div>
  );
};

export default page;
