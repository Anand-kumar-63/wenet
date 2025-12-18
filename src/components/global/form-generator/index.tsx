import React from "react";
import { FieldErrors, FieldValue, FieldValues } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { ErrorMessage } from "@hookform/error-message";
type FormProps = {
  type: "text" | "email" | "password" | "number";
  inputType: "Select" | "input" | "textarea";
  label?: string;
  options?: { value: string; label: string; id: string }[];
  placeholder: string;
  name: string;
  errors?: FieldErrors<FieldValues>;
  Lines?: number;
  cols?: number;
};
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
const FormGenerator = ({
  type,
  inputType,
  label,
  options,
  placeholder,
  errors,
  Lines,
  cols,
  name,
}: FormProps) => {
  switch (inputType) {
    case "input":
      return (
        <Label
          htmlFor={`input-${label}`}
          className="flex flex-col gap-2 text-[#9D9D9D]"
        >
          {label && label}
          <Input
            id={`input-${label}`}
            placeholder={placeholder}
            type={type}
            className="bg-transparent border-themeGray text-themeTextGray"
            //   {...regis}
          >
            <ErrorMessage
              errors={errors}
              name="singleErrorInput"
              render={({ message }) => (
                <p className="text-red mt-2">
                  {message === "required" ? "" : message}
                </p>
              )}
            />
          </Input>
        </Label>
      );
      break;

    case "Select":
      return (
        <Label htmlFor={`Select-${label}`} className="flex flex-col gap-2">
          {label && label}
          <select
            aria-label={`${label}`}
            name="select"
            id={`Select-${label}`}
            className="w-full bg-transparent border-[1px] rounded-lg"
            // register later
          >
            {options?.length &&
              options.map((option) => {
                return (
                  <option
                    key={option.id}
                    value={option.value}
                    className="dark:bg-muted"
                  >
                    {option.label}
                  </option>
                );
              })}
          </select>

          <ErrorMessage
            errors={errors}
            name={name}
            render={({ message }) => (
              <p className="text-red-400 mt-2">
                {message === "required" ? "" : message}
              </p>
            )}
          ></ErrorMessage>
        </Label>
      );

    case "textarea":
      return (
        <Label htmlFor={`textarea-${label}`} className="flex flex-col gap-2">
          {label && label}
          <textarea
            id={`textarea-${label}`}
            rows={Lines}
            // cols={cols}
            placeholder={placeholder}
            className="bg-transparent border-themeGray text-themeTextGray"
            // register it later
          ></textarea>

          <ErrorMessage
            errors={errors}
            name={name}
            render={({ message }) => (
              <p className="text-red-400 mt-2">
                {message === "required" ? "" : message}
              </p>
            )}
          ></ErrorMessage>
        </Label>
      );
    default:
      break;
  }
};
export default FormGenerator;
