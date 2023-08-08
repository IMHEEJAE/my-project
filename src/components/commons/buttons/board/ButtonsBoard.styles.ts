import styled from "@emotion/styled";
import { IButtonBoardStyleProps } from "./ButtonsBoard.types";

export const ButtonsBoard = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 180px;
  height: 52px;
  box-sizing: border-box;
  border: 2px solid #000;

  color: ${(props: IButtonBoardStyleProps) =>
    props.isActive ? "#E8E298" : "#e8e298"};
  font-size: 16px;
  cursor: pointer;
  background: ${(props: IButtonBoardStyleProps) =>
    props.isActive ? "#091E6F" : "#828282"};
`;
