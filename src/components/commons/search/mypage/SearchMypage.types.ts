import { ChangeEvent } from "react";

export interface IProps {
  onChangeSearchMypage: (event: ChangeEvent<HTMLInputElement>) => void;
}
