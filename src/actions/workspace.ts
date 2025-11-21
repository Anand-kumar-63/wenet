"use server";
import { currentUser } from "@clerk/nextjs/server";
import { PrismaClient } from "@prisma/client";
type workspaceprops = {
  workspaceId: string;
};
const prismaclient = new PrismaClient();
export const allowaccessworkspace = async ({ workspaceId }: workspaceprops) => {
  // current user is the user that is loggedin in the clerk dashboard
  const user = await currentUser();
  try {
    const workspace = await prismaclient.workSpace.findUnique({
      where: {
        Id: workspaceId,
        OR: [
          {
            User: {
              clerkId: user?.id,
            },
          },
          {
            member: {
              every: {
                User: {
                  clerkId: user?.id,
                },
              },
            },
          },
        ],
      },
    });
    if (!workspace)
      return {
        status: 401,
        message: "user is unauthorised to access the workspace",
        data: {
          workspace: workspace,
        },
      };
    return {
      status: 200,
      message: "access allowed",
      data: { workspace: workspace },
    };
  } catch (error) {
    return { status: 500, data: { workspace: null } };
  }
};
export const getworkspacefolders = async (workspaceId: string) => {
  const user = await currentUser();
  if (!user) {
    return { status: 404 };
  }
  try {
    const isFolders = await prismaclient.folder.findMany({
      where: {
        workspaceId: workspaceId,
      },
      include: {
        _count: {
          select: {
            videos: true,
          },
        },
      },
    });
    if (isFolders && isFolders.length > 0) {
      return { status: 200, folders: isFolders };
    }
    return { status: 400, folders: [] };
  } catch (error) {
    return { status: 401, folders: [] };
  }
};
export const getAlluserVideos = async (workspaceId: string) => {
  const user = await currentUser();
  if (!user) {
    return { status: 404 };
  }
  try {
    const isVideos = await prismaclient.video.findMany({
      where: {
        OR: [{ workspaceId }, { folderId: workspaceId }],
      },
      select: {
        Id: true,
        title: true,
        processing: true,
        createdAt: true,
        description: true,
        source: true,
        folder: {
          select: {
            Id: true,
            title: true,
          },
        },
        User: {
          select: {
            firstname: true,
            lastname: true,
            image: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    if (!isVideos) {
      return { status: 401, Vedios: [] };
    }
    return { status: 200, Videos: isVideos };
  } catch (error) {
    return { status: 500, Videos: [] };
  }
};

export const getworkspace = async () => {
  const user = await currentUser();
  if (!user) {
    return { status: 401 };
  }
  try {
    const isWorkspace = await prismaclient.user.findMany({
      where: {
        clerkId: user.id,
      },
      select: {
        Subscription: {
          select: {
            plan: true,
          },
        },
        workspaces: {
          select: {
            Id: true,
            name: true,
            type: true,
          },
        },
        member: {
          select: {
            WorkSpace: {
              select: {
                Id: true,
                name: true,
                type: true,
              },
            },
          },
        },
      },
    });
    if (!isWorkspace) {
      return { status: 401, data: {} };
    }
    return { status: 200, data: isWorkspace };
  } catch (error) {
    return { status: 500, data: {} };
  }
};

export const getNotifications = async () => {
  const user = await currentUser();
  if (!user) {
    return { status: 400 };
  }
  try {
    const isNotifications = await prismaclient.user.findUnique({
      where: {
        clerkId: user.id,
      },
      select: {
        notification: true,
        _count: {
          select: {
            notification: true,
          },
        },
      },
    });
    if (isNotifications && isNotifications.notification.length > 0) {
      return { status: 200, data: isNotifications };
    }
    return { status: 401, data: {} };
  } catch (error) {
    return { status: 500, data: {} };
  }
};
