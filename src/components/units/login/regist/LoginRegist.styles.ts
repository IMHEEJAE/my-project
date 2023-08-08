import { CloseOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import { Button, Input } from "antd";
import { ILoginRegistBtnProps } from "./LoginRegist.types";
import { mq } from "../../../../commons/styles/globalStyles";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  min-height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: url(/images/BG_login.png) no-repeat;
  background-size: cover;
  background-position: center;
  margin: 0 auto;
`;

export const Inner = styled.div`
  background: #000;
  width: 100%;
  height: 100%;
  opacity: 0.8;
`;

export const Logo = styled.h2`
  color: #fff;
  font-size: 32px;
  padding-bottom: 40px;
  margin: 0 auto;
`;

export const SubmitButton = styled(Button)`
  // background: #4f4f4f;
  background: ${(props: ILoginRegistBtnProps) =>
    props.isActive ? "#8A4C38" : "#828282"};
  height: 64px;
  border-radius: 16px;
  border: none;
  margin-top: 20px;
  :hover {
    background: ${(props: ILoginRegistBtnProps) =>
      props.isActive ? "#BA664C !important" : "#828282 !important"};
    border-color: ${(props: ILoginRegistBtnProps) =>
      props.isActive ? "#BA664C !important" : "#828282 !important"};
  }
  span {
    color: #bdbdbd;
  }
`;

export const LoginButton = styled(CloseOutlined)`
  font-size: 40px;
  color: #fff;
  cursor: pointer;
  position: absolute;
  top: 80px;
  right: 80px;
  ${mq[0]} {
    font-size: 30px;
    top: 40px;
    right: 40px;
  }
`;
export const RegistInnerWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 400px;
  height: 100%;
  margin: 0 auto;
  ${mq[0]} {
    width: 90%;
  }
`;
export const RegistForm = styled.div`
  width: 400px;
`;
export const RegistInputs = styled(Input)`
  width: 100%;
  border: 1px solid #ffffff;
  border-radius: 16px;
  height: 64px;
  background: transparent;
  color: #fff;
  // margin: 20px 0 10px;
  :hover,
  :focus {
    border-color: #d4adfc !important;
    box-shadow: none !important;
  }
  ::-webkit-input-placeholder {
    color: #fff;
  }
`;
export const RegistLabel = styled.label`
  color: #fff;
  font-size: 14px;
  padding: 20px 0 10px;
  display: block;
`;
export const ErrorMessage = styled.div`
  font-size: 12px;
  color: red;
  margin-bottom: 10px;
`;
