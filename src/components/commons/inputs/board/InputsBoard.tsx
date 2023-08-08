import * as S from "./InputsBoard.styles";
import { IInputsBoardProps } from "./InputsBoard.types";

export default function InputsBoard(props: IInputsBoardProps) {
  return (
    <>
      <S.InputsBoard
        type={props.type}
        {...props.register}
        placeholder={props.placeholder}
        autoComplete={props.autoComplete}
        defaultValue={props.defaultValue}
        readOnly={props.readOnly}
      />
    </>
  );
}
