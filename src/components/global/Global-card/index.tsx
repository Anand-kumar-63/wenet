import React from "react";
type card = {
  title: String;
  description: String;
  header?: React.ReactNode;
  Footer?: React.ReactNode;
  ClassName?:String
};
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
const GlobalCard = ({ title, description, header, Footer , ClassName }: card) => {
  return (
    <Card className="h-[150px] flex justify-center items-center gap-2 w-[4/5] text-gray-400 m-1">
      <CardTitle className="">{title}</CardTitle>
      <CardDescription className="w-4/5 m-1">{description}</CardDescription>
      <CardFooter>{Footer}</CardFooter>
    </Card>
  );
};

export default GlobalCard;
