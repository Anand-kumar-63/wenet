import { useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useEffect, useEffectEvent, useState } from "react";
import { useQueryData } from "./querydata";
import { searchUser } from "@/actions/user";
import { Subscription_Plan } from "@prisma/client";
// Hook is used for searching and set queries related to searching
export const useSearch = (type: "USERS", key: string) => {
  const [query, setquery] = useState("");
  const [debounce, setdebounce] = useState("");
  const [onuser, setonuser] = useState<
     {  
      Id: string;
        Subscription: {
          plan:Subscription_Plan
        };
        firstname: string | null;
        lastname: string | null;
        image: string | null;
        email: string;
      }[]
    | null
    | undefined
  >(null);
  const onSearchQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    setquery(e.target.value);
  };
  useEffect(() => {
    const delayinputtimerId = setTimeout(() => {
      setdebounce(query);
    }, 1000);
    return () => {
      clearTimeout(delayinputtimerId);
    }; 
  }, [query]);
  const { refetch , isFetched , isFetching } = useQueryData(
    [key, debounce],
    async ({queryKey }) => {
      if (type === "USERS") {
        const Users = await searchUser(queryKey[1] as string);
        if (Users?.status === 200) setonuser(Users.data?null:[])
      }
    },
    false
  );
  useEffect(() => {
    if (debounce) refetch();
    if (!debounce) setonuser(null);
    return () => {
      debounce;
    };
  });
  return { isFetching , onuser , onSearchQuery , query }
};
