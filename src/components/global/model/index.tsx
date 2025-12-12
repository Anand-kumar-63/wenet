import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogHeader,
  DialogClose,
} from "@/components/ui/dialog";
import { DialogTrigger } from "@radix-ui/react-dialog";
type props = {
  trigger: React.ReactNode;
  children: React.ReactNode;
  title: String;
  description: string;  
  classname?: string;
};
const Modal = ({ trigger, children, title, description, classname }: props) => {
  return (
    <Dialog>
      <DialogTrigger className={classname} asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent>
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
