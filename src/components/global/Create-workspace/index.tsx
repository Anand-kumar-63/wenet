"use client";
import { getworkspace } from "@/actions/workspace";
import { useQueryData } from "@/hooks/useQueryData";
import React from "react";
import Modal from "../model";
import { FolderPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Createworkspaceform from "@/components/Forms/workspace-form";
type props = {
  workspaceId: string;
};
// we need to get the information about the users workspace and thier members
const Createworkspace = ({ workspaceId }: props) => {
  const { data } = useQueryData(["user-workspace"], getworkspace);
  // Note: ts assertion and type casting
  // const { data: plan } = data as {
  //   status: number;
  //   data: {
  //     Subscription: {
  //       plan: "PRO" | "FREE";
  //     };
  //   };
  // };

  const dummy_plan = {
    status: 200,
    data: {
      Subscription: {
        plan: "FREE",
      },
    },
  };
  const plan = dummy_plan.data;
  if (plan.Subscription?.plan === "FREE") {
    return (
      <Modal
        title={"Upgrade to PRO"}
        description="If you a free user if you want to create a workspace 
      you have to upgrade to pro"
        trigger={
          <Button className="flex flex-row justify-center  items-center gap-4 bg-gray-800 px-16">
            <FolderPlus className="text-lg" />
            <span className="font-bold text-gray-300">Create Workspace</span>
          </Button>
        }
      >
        <div className="flex flex-col justify-center items-center gap-y-4">
          <Button className="bg-gray-100 p-0 w-full text-black rounded-sm ">
            Upgrade to Pro
          </Button>
        </div>

        <Createworkspaceform />
      </Modal>
    );
  }
  if (plan.Subscription?.plan === "PRO") {
    return (
      <Modal
        title={"Create Workspace"}
        description="if you wanna create a workspace just type the name of the workspace and submit it"
        trigger={
          <Button className="flex flex-row justify-center  items-center gap-4 bg-gray-800 px-16">
            <FolderPlus className="text-lg" />
            <span className="font-bold text-gray-300">Create Workspace</span>
          </Button>
        }
      >
        <div className="flex flex-col justify-center items-center gap-y-4">
          <Input
            type="text"
            placeholder="Workspace name"
            className="placeholder:text-gray-200 placeholder:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-none"
          />
          <Button className="bg-gray-100 p-0 w-full text-black rounded-sm ">
            Create workspace
          </Button>

          {/* <Createworkspaceform /> */}
        </div>
      </Modal>
    );
  }
};
export default Createworkspace;
