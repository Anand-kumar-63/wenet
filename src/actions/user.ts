import { currentUser } from "@clerk/nextjs/server";
import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();
const onauthentication = async () => {
  try {
    const user = await currentUser();
    if(!user) {
      return { status: 400 };
    }
    const Existinguser = await client.user.findUnique({
      where: {
        clerkId: user.id,
      },
      include: {
        workspaces: {
          where: {
            User: {
              clerkId: user.id,
            },
          },
        },
      },
    });
    if (Existinguser) {
      return { message: "success", user:Existinguser , status: 200 };
    }
    const newUser = await client.user.create({
      data: {
        clerkId: user.id,
        email: user.emailAddresses[0].emailAddress,
        firstname: user.firstName,
        lastname: user.lastName,
        image: "",
        workspaces: {
          create: {
            name: `${user.firstName}'s workspace`,
            type: "PERSONAL",
          },
        },
        studio: {
          create: {},
        },
        Subscription: {
          create: {},
        },
      },
      // you have yo include the subscription and workspace in the response object
      include: {
        workspaces: {
          where: {
            User: {
              clerkId: user.id,
            },
          },
        },
        Subscription: {
          select: {
            plan: true,
          },
        },
      },
    });
    if (newUser) {
      return { message: "Succes", status: 201, user: newUser };
    }
  } catch (error) {
    return { status: 401 };
  }
};
export default onauthentication;
