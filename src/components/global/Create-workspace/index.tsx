"use client";
import { getworkspace } from "@/actions/workspace";
import { QueryData } from "@/hooks/querydata";
import React from "react";
import Modal from "../model";
import { FolderPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
type props = {
  workspaceId: string;
};
// we need to get the information about the users workspace and thier members
const Createworkspace = ({ workspaceId }: props) => {
  const { data } = QueryData(["user-workspace"], getworkspace);

  // Note: ts assertion and type casting
  const { data: plan } = data as {
    status: number;
    data: {
      Subscription: {
        plan: "PRO" | "FREE";
      };
    };
  };
  // if (plan.Subscription?.plan === "FREE") {
  //   return <div>upgrade to pro</div>;
  // }
  // if (plan.Subscription?.plan === "PRO")
  //   {
  return (
    <Modal
      title={"Create Workspace"}
      description="if you wanna create a workspace just type the name of the workspace and submit it"
      trigger={
        <Button className="flex flex-row justify-center  items-center gap-10">
          <FolderPlus />
          <span className="font-bold text-sm text-gray-300">
            Create Workspace
          </span>
        </Button>
      }
    >
      <div className="flex flex-col justify-center items-center gap-y-4">
      <Input type="text" placeholder="Workspace name" className="placeholder:text-gray-200 placeholder:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-none"/>
      <Button className="bg-gray-100 p-0 w-full text-black rounded-sm ">
        Create workspace
      </Button>
      
       
      </div>
    </Modal>
  );
};
// };
export default Createworkspace;
