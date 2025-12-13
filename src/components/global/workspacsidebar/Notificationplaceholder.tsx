import React from "react";
type props = {
  children: React.ReactNode;
};
const Notificationplaceholder = ({ children }: props) => {
  return <p className="p-2 rounded-full flex justify-center items-center h-7 w-7 bg-gray-700 text-white">{children}</p>;
};
export default Notificationplaceholder;
