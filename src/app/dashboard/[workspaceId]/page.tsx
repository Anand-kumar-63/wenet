import React from "react";
import WorkspaceSideBar from "@/components/global/workspacsidebar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Createworkspace from "@/components/global/Create-workspace";
type props = {
  params: { workspaceId: string };
};
const page = ({ params }: props) => {
  const {workspaceId} = params;
  console.log(workspaceId);
  return (
    <div>
      <Tabs defaultValue="Videos" className="mt-6">
        <div className="flex w-full justify-between items-center">
          <TabsList className="bg-transparent gap-2">
            <TabsTrigger className="p-[13px] px-6 text-gray-300 rounded-full data-[state=active]:bg-[#252525]" value="Videos">Videos</TabsTrigger>
            <TabsTrigger value="Archive" className="p-[13px] px-6 py-1 text-gray-300 rounded-full data-[state=active]:bg-[#252525]">Archive</TabsTrigger>
          </TabsList>
          <div className="flex">
            <Createworkspace workspaceId={workspaceId}/>
          </div>
        </div>
        <TabsContent value="account">hey</TabsContent>
        <TabsContent value="Archive">Archive</TabsContent>
      </Tabs>
    </div>
  );
};
export default page;
