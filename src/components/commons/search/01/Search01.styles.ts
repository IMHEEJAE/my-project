import styled from "@emotion/styled";
import { Input } from "antd";
export const SearchWrap = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
`;
export const SearchBar = styled(Input)`
  width: 200px;
  border: none;
  border-bottom: 2px solid #000;
  border-radius: 0;
  background: #e0dcd0;
  font-family: "MFL";
  padding-right: 40px;
  ::placeholder {
    font-family: "MFL";
  }
  :hover,
  :focus {
    border-color: #000 !important;
    box-shadow: none !important;
  }
`;
export const Icon = styled.img`
  position: absolute;
  top: 7px;
  right: 9px;
  width: 18px;
  height: 18px;
  cursor: text;
`;
