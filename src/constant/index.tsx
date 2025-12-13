import { Library, ReceiptIcon } from "lucide-react";
import { MessageSquareDot } from "lucide-react";
import { ReceiptText } from "lucide-react";
import { SettingsIcon } from "lucide-react";
import React from "react";
const MENU_ITEMS = (
  workspaceId: string
): { title: string; href: string; icon:React.ReactNode}[] => [
  { title: "My Library", href: `/dashboard/${workspaceId}/Mylibrary` , icon:<Library/> },
  { title: "Notifications", href: `/dashboard/${workspaceId}/Mylibrary`, icon:<MessageSquareDot/> },
  { title: "Billing", href: `/dashboard/${workspaceId}/Mylibrary`,icon:<ReceiptText/> },
  { title: "Settings", href: `/dashboard/${workspaceId}/Mylibrary`,icon:<SettingsIcon/> },
];

export default MENU_ITEMS;