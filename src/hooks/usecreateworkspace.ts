"use client";
import { useMutationdata } from "./useMutationdata";
import { createworkspace } from "@/actions/workspace";
// import {useZodForm} from "./useZodform";
import { workspaceSchema } from "@/components/Forms/create-workspace/Schema";
const Usecreateworkspace = () => {
  const { mutate, isPending } = useMutationdata(
    ["create-workspace"],
    (data: { name: string }) => createworkspace(data.name)
  );
  // usezodform - 
  // const { register, onFormSubmit, errors } = useZodForm(
  //   workspaceSchema,
  //   mutate
  // );

  // return { register, onFormSubmit, errors };
};
export default Usecreateworkspace;
