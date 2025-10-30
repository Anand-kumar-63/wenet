"use server";
import { currentUser } from "@clerk/nextjs/server";
import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();
const onauthentication = async () => {
  try {
    const user = await client.user.findUnique{
      where:{
        clerkid:true  
      }
    }
    if (!user) {
      return { status: 401 };
    }
    else return {user:user}
  } catch (error) {
    return { Error: error };
  }
};
export default onauthentication;