import { getworkspace } from "@/actions/workspace";
import { QueryData } from "@/hooks/querydata";
import React from "react";
type props = {
  workspaceId: String;
};
const Createworkspace = ({ workspaceId }: props) => {
  const { data } = QueryData(["user-workspace"], getworkspace);
  //  to get the information of the plan of the current clerk user
  const { data: plan } = data as {
    status: number;
    data: {
      Subscription: {
        plan: "PRO" | "FREE";
      };
    };
  };
  return <div>index</div>;
};

export default Createworkspace;
