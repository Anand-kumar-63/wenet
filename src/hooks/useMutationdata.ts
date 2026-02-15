import {
  useMutation,
  MutationFunction,
  MutationKey,
  QueryClient,
  useQueryClient,
} from "@tanstack/react-query";
import { toast } from "sonner";
export const useMutationdata =<TData , TVariables>(
  mutationkey: MutationKey,
  // “This mutation function returns something, and accepts something, but we are not specifying their exact types.”
  // MutationFunction<TData, TVariables>
  //A function
  // That takes some input (variables)
  // And returns a Promise of some data
  mutationfunction: MutationFunction<TData, TVariables>,
  querykey?: string,
  onSuccess?: (data:TData) => void
) => {
  const client = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationKey: mutationkey,
    mutationFn: mutationfunction,
    onSuccess(data) {
      if (onSuccess) onSuccess(data);
      console.log(data);
    },
    onSettled: async () => {
      return await client.invalidateQueries({ queryKey: [querykey] });
    },
  });
  return { mutate , isPending };
};
