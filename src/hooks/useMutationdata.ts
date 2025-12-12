import {
  useMutation,
  MutationFunction,
  MutationKey,
  QueryClient,
  useQueryClient,
} from "@tanstack/react-query";
import { toast } from "sonner";

export const useMutationdata = (
  mutationkey: MutationKey,
  mutationfunction: MutationFunction<any, any>,
  querykey?: string,
  onSuccess?: () => void
) => {
  const client = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationKey: mutationkey,
    mutationFn: mutationfunction,
    onSuccess(data) {
      if (onSuccess) onSuccess();
      return toast(data?.status === 200 ? "Success" : "Error", {
        description: data?.data,
      });
    },
    onSettled: async () => {
      return await client.invalidateQueries({ queryKey: [querykey] });
    },
  });

  return { mutate , isPending };
};
