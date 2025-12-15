import * as React from "react";
import { onauthentication } from "@/actions/user";
import { redirect } from "next/navigation";
import {
  allowaccessworkspace,
  getAlluserVideos,
  getNotifications,
  getworkspace,
  getworkspacefolders,
} from "@/actions/workspace";
import {
  dehydrate,
  hydrate,
  QueryClient,
  useQuery,
} from "@tanstack/react-query";
import { HydrationBoundary } from "@tanstack/react-query";
import WorkspaceSideBar from "@/components/global/workspacsidebar";
import Globalheader from "@/components/global/Global-header";
type layoutprops = {
  params: { workspaceId: string };
  children: React.ReactNode;
};

// layout content bydefault get cached in nextjs app directory 
const layout = async ({ children, params }: layoutprops) => {
  const  { workspaceId } = await params;
  const auth = await onauthentication();
  if (!auth?.user?.workspaces || !auth?.user?.workspaces.length) {
    return redirect("/auth/sign-in");
  }
  const hasaccess = await allowaccessworkspace({ workspaceId });
  if (hasaccess.status != 200) {
    redirect(`/dashboard/${auth.user?.workspaces[0].Id}`);
  }
  if (!hasaccess.data?.workspace) return null;
  const query = new QueryClient();
  await query.fetchQuery({
    queryKey: ["workspace-folders"],
    queryFn: () => getworkspacefolders(workspaceId),
  });

  await query.fetchQuery({
    queryKey: ["user-videos"],
    queryFn: () => getAlluserVideos(workspaceId),
  });

  await query.fetchQuery({
    queryKey: ["user-workspace"],
    queryFn: () => getworkspace(),
  });

  await query.fetchQuery({
    queryKey: ["user-notifications"],
    queryFn: () => getNotifications(),
  });

  return (
    <HydrationBoundary state={dehydrate(query)}>
      <div className="flex h-screen w-full bg-gray-900">
        <WorkspaceSideBar workspaceId={workspaceId} />
        <div className="pt-28 p-6 w-full overflow-x-hidden overflow-y-auto">
          <Globalheader workspace={hasaccess.data.workspace}/>
          <div className="text-white">
            {children}
          </div>
        </div>
      </div>
    </HydrationBoundary>
  );
};
export default layout;
