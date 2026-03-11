import { z, ZodType } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { UseMutateFunction } from "@tanstack/react-query";
import { useForm } from "react-hook-form";

const useZodForm = <T extends ZodType<any,any,any>>(
  schema:T,
  mutation: UseMutateFunction,
  defaultValues?:object
) => {
  const {
    register,
    watch,
    reset,
    handleSubmit,
    formState: { errors }
  } = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: { ...defaultValues }
  });
  return {
    register,
    watch,
    reset,
    handleSubmit,
    errors
  };
};

export default useZodForm;