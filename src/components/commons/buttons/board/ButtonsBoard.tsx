import * as S from "./ButtonsBoard.styles";
import { IButtonsBoardProps } from "./ButtonsBoard.types";

export default function ButtonsBoard(props: IButtonsBoardProps) {
  return (
    <>
      <S.ButtonsBoard isActive={props.isActive}>{props.title}</S.ButtonsBoard>
    </>
  );
}
