import * as React from "react";
import onauthentication from "@/actions/user";
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
type layoutprops = {
  params: { workspaceId: string };
  children: React.ReactNode;
};
// layout content bydefault get cached in nextjs
const layout = async ({ children, params }: layoutprops) => {
  const {workspaceId} = await params;
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
      <div className="flex h-screen w-full">
        <WorkspaceSideBar workspaceId={workspaceId} />
      </div>
    </HydrationBoundary>
  );
};
export default layout;
