import * as S from "./InputsLogin.styles";
import { IInputsLoginProps } from "./InputsLogin.types";

export default function InputsLogin(props: IInputsLoginProps) {
  return (
    <>
      <S.InputsLogin
        type={props.type}
        {...props.register}
        placeholder={props.placeholder}
        autoComplete={props.autoComplete}
      />
    </>
  );
}
