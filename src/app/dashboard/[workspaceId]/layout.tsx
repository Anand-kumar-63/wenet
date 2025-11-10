import React from "react";
import onauthentication from "@/actions/user";
import { redirect } from "next/navigation";
import { allowaccessworkspace, getAlluserVideos, getNotifications, getworkspace, getworkspacefolders } from "@/actions/workspace";
import { QueryClient, useQuery } from '@tanstack/react-query'
import { AwardIcon } from "lucide-react";
type layoutprops = {
  params: { workspaceId: string };
  children: React.ReactNode;
};
const layout = async ({ children, params: { workspaceId } }: layoutprops) => {
  const auth = await onauthentication();
  if(!auth?.user?.workspaces || !auth?.user?.workspaces.length) return redirect("/auth/sign-in");
  const hasaccess = await allowaccessworkspace({workspaceId});
   
  if(hasaccess.status!=200){
    redirect(`/dashboard/${auth.user?.workspaces[0].Id}`)
  }
  if(!hasaccess.data?.workspace) return null


  const query = new QueryClient();
  await query.fetchQuery({
    queryKey:['workspace-folders'],
    queryFn:()=>getworkspacefolders(workspaceId)
  })

  await query.fetchQuery({
    queryKey:["user-videos"],
    queryFn:()=>getAlluserVideos(workspaceId)
  })

await query.fetchQuery({
  queryKey:["user-workspace"],
  queryFn:()=>getworkspace()
}) 

await query.fetchQuery({
  queryKey:["user-notifications"],
  queryFn:()=>getNotifications()
})

  return (
    <div className="flex h-screen w-full justify-center items-center">
      {children}
    </div>
  );
};
export default layout;
