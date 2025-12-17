import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogHeader,
  DialogClose,
  DialogOverlay
} from "@/components/ui/dialog";
import { DialogTrigger } from "@radix-ui/react-dialog";
type props = {
  trigger: React.ReactNode;
  children: React.ReactNode;
  title: string;
  description: string;
  classname?: string;
};
const Modal = ({ trigger, children, title, description, classname }: props) => {
  return (
    <Dialog>
      <DialogTrigger className={classname} asChild>
        {trigger}
      </DialogTrigger>
      <DialogOverlay className="fixed inset-0 bg-blackA6 data-[state=open]:animate-overlayShow"/>
      <DialogContent className="bg-gray-800 text-gray-200">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
};
export default Modal;
