import * as S from "./ButtonsLogin.styles";
import { IButtonsLoginProps } from "./ButtonsLogin.types";

export default function ButtonsLogin(props: IButtonsLoginProps) {
  return (
    <>
      <S.ButtonsLogin isActive={props.isActive}>{props.title}</S.ButtonsLogin>
    </>
  );
}
