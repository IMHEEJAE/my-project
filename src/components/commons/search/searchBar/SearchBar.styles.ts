import styled from "@emotion/styled";
import { Input } from "antd";
import { mq } from "../../../../commons/styles/globalStyles";
export const SearchWrap = styled.div``;
export const Searchbar = styled(Input)`
  position: absolute;
  top: -50px;
  right: 0;
  width: 30px;
  padding-right: 20px;
  border-radius: 0;
  border: 2px solid #000;
  transition: 0.7s;
  transition-timing-function: ease-out;
  background: #e0dcd0;
  font-family: "MFL";
  ::placeholder {
    font-family: "MFL";
  }
  :hover,
  :focus {
    border-color: #000 !important;
    box-shadow: none !important;
  }
  &.active {
    width: 300px;
    padding-right: 40px;
    border-right: 2px solid #000;
  }
  ${mq[0]} {
    width: 130px;
    border: none;
    border-bottom: 2px solid #000;
    padding: 4px 0;
    &.active {
      width: 130px;
      padding-left: 0;
      padding-right: 30px;
      border-right: none;
    }
  }
`;
export const Icon = styled.img`
  position: absolute;
  top: -43px;
  right: 9px;
  width: 18px;
  height: 18px;
  cursor: text;
`;
