import { ChangeEvent } from "react";

export interface IProps {
  onChangeSearch: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}
