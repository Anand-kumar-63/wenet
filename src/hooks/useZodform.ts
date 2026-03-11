import z ,{ ZodType} from "zod";
import { UseMutateFunction } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers";

const useZodfrom = (
    schema:ZodType,
    mutation:UseMutateFunction,
    defaultValues?:unknown
)=>{
   const {} = useForm<z.infer<typeof ZodType>>({resolver:zodResolver},{})
}
export default useZodfrom;