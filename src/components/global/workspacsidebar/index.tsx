"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { PlusCircle, Sidebar } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Menu } from "lucide-react";
import Infobar from "./Infobar";
type sidebarprops = {
  workspaceId: string;
};
import Modal from "../model";
import { useQueryData } from "@/hooks/querydata";
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
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Sidebaritems from "./SidebarItems";
import MENU_ITEMS from "@/constant";
import Search from "../search/search";
// import { Separator } from "@radix-ui/react-separator";
import { workspaceProps } from "@/types/workspace.type";
import { usernotificationtype } from "@/types/notification.type";
import Notificationplaceholder from "./Notificationplaceholder";
import GlobalCard from "../Global-card";
import { Button } from "@/components/ui/button";
import { ItemMedia } from "@/components/ui/item";

export default function WorkspaceSideBar({ workspaceId }: sidebarprops) {
  const router = useRouter();
  const pathname = usePathname();
  const DUMMY_DATA = {
    workspaces: [
      { id: "ws-1", name: "Personal Workspace", type: "personal" },
      { id: "ws-2", name: "Engineering Team", type: "shared" },
      { id: "ws-3", name: "Marketing Dept", type: "shared" },
    ],
    Subscription: {
      plan: "PAID",
    },
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
  // data we get from the useQueryData is named as notification
  const { data: notifications } = useQueryData(
    ["user-notifications"],
    getNotifications
  );
  // data we get from notification are termed as count
  const { data: count } = notifications as usernotificationtype;
  const { data , isFetched } = useQueryData(["user-workspace"], getworkspace);
  const { data: workspace1 } = data as workspaceProps;
  // const currentworkspace = workspace1.workspaces.find(
  //   (s) => s.id === workspaceId
  // );
  const menuitems = MENU_ITEMS("23@dsh");
  // on Changing the active workspace push the url to the dashboard/id
  const OnchangeActiveworkspace = (value: string) => {
    return router.push(`/dashboard/${value}`);
  };
  const SidebarSection = (
    <div className="md:w-[264px] w-[220px] h-full bg-gray-800 relative flex flex-col  gap-4 items-center overflow-hidden">
      <div className="bg-gray-800 p-4 flex justify-center items-center gap-2 mb-4 absolute top-0 right-0 left-0">
        <Image src={"/Images/FullLogo.png"} height={44} width={84} alt="W" />
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
      {/* {currentworkspace?.type === "PUBLIC" && ( */}
      <Modal
        classname="border-1 rounded-2 p-2 border-white text-white"
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
      <Separator className="my-4" />
      {/* )} */}
      <p className="text-[#9D9D9D] text-sm mt-4 font-sans">Menu </p>
      <nav>
        <ul>
          {menuitems.map((item , index)=>{
            return(
              <Sidebaritems
                title={item.title}
                href={item.title}
                Icon={item.icon}
                Key={item.id}
                Selected={pathname == item.href}
                notifications={
                  (item.title == "notifications" &&
                    count._count &&
                    count._count.notification) ||
                  0
                }
              />
            );
          })}
        </ul>
      </nav>
      <Separator />
      <p className="text-[#9D9D9D] font-bold text-sm">Workspaces</p>
      {/* // if the user have only one Workspace and the subscription is free or paid   */}
      {workspace.workspaces.length == 1 && workspace.members.length == 0 && (
        <div className="w-4/5">
          <p className="text-[#9D9D9D] font-medium text-sm">
            {workspace.Subscription.plan == "FREE"
              ? "Buy a subscription"
              : "Create a workspace"}
          </p>
        </div>
      )}
      <nav className="w-full">
        <ul className="h-[150px] overflow-x-hidden overflow-auto fade-layer">
          {/* // these first renders is the workspaces that the user owns but not the personal workspaces... */}
          {workspace.workspaces.length > 0 &&
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
        <p className="text-[#9D9D9D] text-sm font-bold ml-20">members</p>
        <ul className="h-[150px] overflow-x-hidden overflow-auto fade-layer">
          {/* // All the workspaces user is the member of.. */}
          {workspace.members.length > 0 &&
            workspace.members.map((item) => (
              <Sidebaritems
                notifications={0}
                title={item.workspace.name}
                href={`dashboard/${item.workspace.id}`}
                Selected={pathname == `dashboard/${item.workspace.id}`}
                Icon={
                  <Notificationplaceholder>
                    {item.workspace.name.charAt(0)}
                  </Notificationplaceholder>
                }
                Key={item.workspace.id}
              />
            ))}
        </ul>
      </nav>
      <Separator className="my-4 text-white" />
      {/* card to offer buy the subsciption */}
      {true && (
        <GlobalCard
          title={"Subscription plan"}
          description={"Buy a subscription or update to paid one"}
          Footer={
            <Button className="px-6 bg-gray-400 text-gray-800">Upgrade</Button>
          }
        />
      )}
    </div>
  );
  return (
    <div className="w-auto relative">
      {/* infobar */}
      <div className="w-[1500px] absolute left-0">
        <Infobar />
      </div>
      {/*Sheet desktop and mobile */}
      <div className="md:hidden fixed my-2 mx-2">
        <Sheet>
          <SheetTrigger asChild>
            <Button className="text-[#D3D3D3] w-auto h-auto">
              <Menu size={64} />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="p-0 w-fit h-full">
            {SidebarSection}
          </SheetContent>
        </Sheet>
      </div>
      <div className="md:block hidden h-full w-fit">{SidebarSection}</div>
    </div>
  );
}
 