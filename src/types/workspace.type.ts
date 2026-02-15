export type workspaceProps = {
  data: {
    Subscription: {
      plan: "FREE" | "PRO";
    } | null;
    workspaces: {
      id: string;
      name: string;
      type: "PUBLIC" | "PERSONAL";
    }[];
    members: {
      workspace: {
        id: string;
        name: string;
        type: "PERSONAL" | "PRIVATE";
      }
    }[];
  };
};