"use client"
import { useMutationdata } from "./useMutationdata";
import { createworkspace } from "@/actions/workspace";
const Usecreateworkspace = () => {
   const {mutate , isPending} = useMutationdata(["create-workspace"],(data:{name:string})=>createworkspace(data.name))


};

export default Usecreateworkspace;