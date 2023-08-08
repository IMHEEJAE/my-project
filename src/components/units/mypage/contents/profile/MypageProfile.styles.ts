import styled from "@emotion/styled";
import { Button } from "antd";
import { mq } from "../../../../../commons/styles/globalStyles";
export const Wrapper = styled.div``;

export const Title = styled.div`
  font-weight: bold;
  font-size: 24px;
  line-height: 36px;
  margin-bottom: 40px;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;
export const Label = styled.div`
  font-weight: bold;
  width: 200px;
  margin-right: 60px;
  ${mq[0]} {
    width: 160px;
    margin-right: 20px;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 52px;
  padding-left: 15px;
  background: #e0dcd0;
  border: 2px solid #000;
`;

export const BtnWrapper = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: flex-end;
  ${mq[0]} {
    margin-top: 20px;
  }
`;
export const Btn = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 10px 16px;
  background: #e0dcd0;
  border: 2px solid #000;
  border-radius: 0;
  :hover {
    border-color: #ba664c !important;
    color: #ba664c !important;
  }
`;
export const NameWrapper = styled.div`
  margin-top: 80px;
`;
