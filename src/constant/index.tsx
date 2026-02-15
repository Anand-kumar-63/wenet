import { Library,Home } from "lucide-react";
import { MessageSquareDot } from "lucide-react";
import { ReceiptText } from "lucide-react";
import { SettingsIcon } from "lucide-react";
import React from "react";
const MENU_ITEMS = (
  workspaceId: string
): { title: string; href: string; icon: React.ReactNode; id:string }[] => [
  
  {
    title: "Home",
    href: `/dashboard/${workspaceId}/`,
    icon: <Home />,
    id:"1",
  }
  ,{
    title: "My Library",
    href: `/dashboard/${workspaceId}/Mylibrary`,
    icon: <Library />,
    id:"1",
  },
  {
    title: "Notifications",
    href: `/dashboard/${workspaceId}/Notifications`,
    icon: <MessageSquareDot />,
    id:"2",
  },
  {
    title: "Billing",
    href: `/dashboard/${workspaceId}/Billings`,
    icon: <ReceiptText />,
    id:"3",
  },
  {
    title: "Settings",
    href: `/dashboard/${workspaceId}/Settings`,
    icon: <SettingsIcon />,
    id:"4",
  },
];

export default MENU_ITEMS;
