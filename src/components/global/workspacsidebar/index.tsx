"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { PlusCircle } from "lucide-react";
type sidebarprops = {
  workspaceId: string;
};
import Modal from "../model";
import { QueryData } from "@/hooks/querydata";
import { getworkspace } from "@/actions/workspace";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@radix-ui/react-separator";
import { workspaceProps } from "@/types/workspace.type";

export default function WorkspaceSideBar({ workspaceId }: sidebarprops) {
  const router = useRouter();

  const DUMMY_DATA = {
    workspaces: [
      { id: "ws-1", name: "Personal Workspace", type: "personal" },
      { id: "ws-2", name: "Engineering Team", type: "shared" },
      { id: "ws-3", name: "Marketing Dept", type: "shared" },
    ],
    members: [
      {
        workspace: { id: "ws-4", name: "Client Project X" },
      },
      {
        workspace: { id: "ws-5", name: "Freelance Work" },
      },
    ],
  };

  const { data, isFetched } = QueryData(["user-workspace"], getworkspace);
  // console.log(data);
  const { data: workspace1 } = data as workspaceProps;
  const workspace = DUMMY_DATA;
  const OnchangeActiveworkspace = (value: string) => {
    return router.push(`/dashboard/${value}`);
  };
  return (
    <div className="w-[230px] h-full bg-gray-800 relative flex flex-col  gap-4 items-center overflow-hidden">
      <div className="bg-gray-800 p-4 flex justify-center items-center gap-2 mb-4 absolute top-0 right-0 left-0">
        <Image src={"/Images/FullLogo.png"} height={44} width={84} alt="W" />
        {/* <p className="text-gray-200">Opal</p> */}
      </div>
      <Select
        defaultValue={workspaceId}
        onValueChange={OnchangeActiveworkspace}
      >
        {/* Fixed mt-25 to mt-24 */}
        <SelectTrigger className="rounded-xl w-[160px] text-neutral-300 border-1 mt-25 border-white data-[placeholder]:text-gray-200">
          <SelectValue placeholder="Select a fruit"></SelectValue>
        </SelectTrigger>

        {/* Added specific background color to ensure visibility */}
        <SelectContent className="bg-gray-900 text-white border-gray-700 backdrop-blur-lg">
          <SelectGroup>
            <SelectLabel className="text-gray-400">Workspaces</SelectLabel>
            <Separator className="bg-gray-700 my-2" />

            {workspace.workspaces.map((workspaceitem) => {
              return (
                <SelectItem key={workspaceitem.id} value={workspaceitem.id}>
                  {workspaceitem.name}
                </SelectItem>
              );
            })}

            {workspace.members.length > 0 && (
              <>
                <SelectLabel className="text-gray-400 mt-2">Shared</SelectLabel>
                <Separator className="bg-gray-700 my-2" />
                {workspace.members.map(
                  (member) =>
                    member.workspace && (
                      <SelectItem
                        key={member.workspace.id}
                        value={member.workspace.id} // FIXED: Changed name to id
                      >
                        {member.workspace.name}
                      </SelectItem>
                    )
                )}
              </>
            )}
          </SelectGroup>
        </SelectContent>
      </Select>
      <Modal
        title="Invite to the Workspace"
        description="Join my workspace to work on similar projects"
        trigger={
          <span className="text-gray-200  text-sm flex flex-row justify-center items-center hover:bg-gray-600 px-7 py-1 rounded-sm gap-2">
            <span>workspaces</span>
            <PlusCircle className="h-4 w-4" />
          </span>
        }
        children={<span>
          workspaces
        </span>}
      />
    </div>
  );
}
