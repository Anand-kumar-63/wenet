"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { PlusCircle, Sidebar } from "lucide-react";
type sidebarprops = {
  workspaceId: string;
};
import Modal from "../model";
import { QueryData } from "@/hooks/querydata";
import { usePathname } from "next/navigation";
// import Seperator from "../seperator";
import { getNotifications, getworkspace } from "@/actions/workspace";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Sidebaritems from "./SidebarItems";
import MENU_ITEMS from "@/constant";
import Search from "../search/search";
import { Separator } from "@radix-ui/react-separator";
import { workspaceProps } from "@/types/workspace.type";
import { usernotificationtype } from "@/types/notification.type";
import Notificationplaceholder from "./Notificationplaceholder";
export default function WorkspaceSideBar({ workspaceId }: sidebarprops) {
  const router = useRouter();
  const pathname = usePathname();
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
  const workspace = DUMMY_DATA;
  // data we get from the queryData is named as notification
  const { data: notifications } = QueryData(
    ["user-notifications"],
    getNotifications
  );
  // data we get from notification are termed as count
  const { data: count } = notifications as usernotificationtype;
  const { data, isFetched } = QueryData(["user-workspace"], getworkspace);
  const { data: workspace1 } = data as workspaceProps;
  // const currentworkspace = workspace1.workspaces.find(
  //   (s) => s.id === workspaceId
  // );
  const menuitems = MENU_ITEMS("23@dsh");
  // on Changing the active workspace push the url to the dashboard/id
  const OnchangeActiveworkspace = (value: string) => {
    return router.push(`/dashboard/${value}`);
  };
  return (
    <div className="w-[230px] h-full bg-gray-900 relative flex flex-col  gap-4 items-center overflow-hidden">
      <div className="bg-gray-900 p-4 flex justify-center items-center gap-2 mb-4 absolute top-0 right-0 left-0">
        <Image src={"/Images/FullLogo.png"} height={44} width={84} alt="W" />
      </div>
      <Select
        defaultValue={workspaceId}
        onValueChange={OnchangeActiveworkspace}>
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
      {/* {currentworkspace?.type === "PUBLIC" && ( */}
      <Modal
        classname="border-1 rounded-2 p-2"
        title="Invite to the Workspace"
        description="Join my workspace to work on similar projects"
        trigger={
          <span className="text-gray-200  text-sm flex flex-row justify-center items-center hover:bg-gray-600 px-7 py-1 rounded-sm gap-2">
            <span>workspaces</span>
            <PlusCircle className="h-4 w-4" />
          </span>
        }
      >
        <Search workspaceId={workspaceId} />
      </Modal>
      {/* )} */}
      <p className="text-[#9D9D9D] text-sm mt-4 font-sans">Menu </p>
      <nav>
        {menuitems.map((item) => {
          return (
            <ul>
              <Sidebaritems
                title={item.title}
                href={item.title}
                Icon={item.icon}
                Selected={pathname == item.href}
                notifications={
                  (item.title == "notifications" &&
                    count._count &&
                    count._count.notification) ||
                  0
                }
              />
            </ul>
          );
        })}
      </nav>
      
      <p className="text-[#9D9D9D] font-sans text-sm">Workspaces</p>
      <nav className="w-full">
        <ul className="h-[150px] overflow-x-hidden overflow-auto fade-layer">
          {workspace.workspaces.length > 1 &&
            workspace.workspaces.map((item) => (
              <Sidebaritems
                notifications={0}
                title={item.name}
                href={`dashboard/${item.id}`}
                Selected={pathname == `dashboard/${item.id}`}
                Icon={
                  <Notificationplaceholder>
                    {item.name.charAt(0)}
                  </Notificationplaceholder>
                }
                Key={item.id}
              />
            ))}
        </ul>
      </nav>
    </div>
  );
}
