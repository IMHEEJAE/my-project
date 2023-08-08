import { ChangeEvent } from "react";

export interface IMypageProfilePresenterProps {
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePasswordConfirm: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeName: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickChangePassword: () => void;
  onClickChangeName: () => void;
}
