import { UseFormRegisterReturn } from "react-hook-form";

export interface IInputsBoardProps {
  readOnly?: boolean | undefined;
  defaultValue?: string | number | readonly string[] | undefined;
  type: "text" | "password";
  register: UseFormRegisterReturn;
  placeholder?: string;
  autoComplete?: "on" | "off";
}
