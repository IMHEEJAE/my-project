import { UseFormRegisterReturn } from "react-hook-form";

export interface IInputsLoginProps {
  type: "text" | "password";
  register: UseFormRegisterReturn;
  placeholder: string;
  autoComplete?: "on" | "off";
}
