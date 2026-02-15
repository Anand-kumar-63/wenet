"use client"
import {
  QueryKey,
  QueryFunction,
  Enabled,
  useQueries,
  useQuery,
} from "@tanstack/react-query";
export function useQueryData(
  querykey: QueryKey,
  queryfn: QueryFunction,
  enabled?: Enabled
){
  const { data, isPending, isFetched, refetch, isFetching } = useQuery({
    queryKey:querykey,
    queryFn:queryfn,
    enabled,
  });
  return { data , isPending , isFetched , refetch , isFetching };
}
