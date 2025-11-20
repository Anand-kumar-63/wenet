"use client"
import Image from "next/image";
type sidebarprops = {
  workspaceId: string;
};
import { useRouter } from "next/navigation";
import { QueryData } from "@/hooks/querydata";
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
import { redirect } from "next/dist/server/api-utils";
export default function WorkspaceSideBar({ workspaceId }: sidebarprops) {
  const router = useRouter();

  const OnchangeActiveworkspace = (value: string) => {
    return router.push(`/dashboard/${value}`);
  };
  return (
    <div className="w-[230px] h-full bg-gray-900 relative flex flex-col  gap-4 items-center overflow-hidden">
      <div className="bg-gray-900 p-4 flex justify-center items-center gap-2 mb-4 absolute top-0 right-0 left-0">
        <Image src={"/Images/FullLogo.png"} height={44} width={84} alt="W" />
        {/* <p className="text-gray-200">Opal</p> */}
      </div>
      <Select
        defaultValue={workspaceId}
        onValueChange={OnchangeActiveworkspace}
      >
        <SelectTrigger className="rounded-xl w-[160px] text-white border-1 mt-25 border-white bg-transparent">
          <SelectValue placeholder="Theme" className="text-white"/>
        </SelectTrigger>
        <SelectContent className="text-white backdrop-blur-lg">
          <SelectGroup>
            <SelectLabel>workspaces</SelectLabel>
            <Separator />
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
