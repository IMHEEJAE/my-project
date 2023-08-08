import styled from "@emotion/styled";
import { IButtonLoginStyleProps } from "./ButtonsLogin.types";
export const ButtonsLogin = styled.button`
  display: block;
  width: 100%;
  height: 64px;
  border-radius: 16px;
  border: none;
  margin-top: 20px;
  background: ${(props: IButtonLoginStyleProps) =>
    props.isActive ? "#8A4C38" : "#828282"};
  :hover {
    background: ${(props: IButtonLoginStyleProps) =>
      props.isActive ? "#BA664C !important" : "#828282 !important"};
    border-color: ${(props: IButtonLoginStyleProps) =>
      props.isActive ? "#BA664C !important" : "#828282 !important"};
  }
  span {
    color: #bdbdbd;
  }
`;
