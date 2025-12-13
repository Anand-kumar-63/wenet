import { useSearch } from "@/hooks/useSearch";
import React from "react";
import { useMutationdata } from "@/hooks/useMutationdata";
type props = {
  workspaceId: string;
};
import { Skeleton } from "@/components/ui/skeleton";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Loader from "../Index";
import { Button } from "@/components/ui/button";
import { Flag } from "lucide-react";
const Search = ({ workspaceId }: props) => {
  // is used to fetch users from the database
  const { query , isFetching , onuser , onSearchQuery } = useSearch(
    "USERS",
    "get-users"
  );
  // Wip: wireup sending invitation to the user to join the workspace
  return (
    <div className="flex flex-col gap-y-5">
      <input
        onChange={onSearchQuery}
        value={query}
        placeholder="search for the user...."
        className="bg-transparent border-2 outline-none rounded-xl px-2 text-sm py-2"
        type="text"
      />
      <div>
        {isFetching ? (
          <div className="flex flex-col gap-y-2">
            <Skeleton className="w-full h-8 rounded-xl" />
          </div>
        ) : !onuser ? (
          <p className="text-center text-sm text-white">No user found</p>
        ) : (
          onuser.map((user) => {
            return <div
              key={user.Id}
              className="relative text-sm w-full bg-gray-800 rounded-xl p-3 px-4 text-white flex flex-row gap-x-2 m-1"
            >
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>

              <span className="text-gray-300 capitalize">
                {user.firstname} {user.lastname}
              </span>

              <Button className="absolute right-4 text-gray-700 bg-gray-200 h-8 w-20">
                 <Loader state={false} >invite</Loader>
              </Button>
            </div>;
          })
        )}
      </div>
    </div>
  );
};
export default Search;
