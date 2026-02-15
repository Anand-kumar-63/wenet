import React from "react";
type layoutprops = {
  children: React.ReactNode;
};
const layout = ({ children }: layoutprops) => {
  return (
    <div className="w-full h-screen bg-gray-900 flex justify-center items-center">
      {children}
    </div>
  );
};
export default layout;
