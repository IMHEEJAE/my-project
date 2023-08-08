import { ChangeEvent } from "react";

export interface IProps {
  onChangeSearch02: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}
