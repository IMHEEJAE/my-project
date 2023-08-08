import { ArrowRightOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import { Button, Checkbox, Input } from "antd";
import { ILoginBtnProps } from "./Login.types";
import { mq } from "../../../commons/styles/globalStyles";

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
export const HomeIcon = styled(ArrowRightOutlined)`
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
export const LoginInnerWrap = styled.div`
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
export const Logo = styled.h2`
  color: #fff;
  font-size: 32px;
  padding-bottom: 40px;
  margin: 0 auto;
`;
export const LoginEmail = styled(Input)`
  width: 100%;
  height: 64px;
  border: 1px solid #ffffff;
  border-radius: 16px;
  background: transparent;
  color: #fff;
  :hover,
  :focus {
    border-color: #d4adfc !important;
    box-shadow: none !important;
  }
  ::-webkit-input-placeholder {
    color: #fff;
  }
`;

export const CheckBoxLogin = styled(Checkbox)`
  color: #fff;
  cursor: initial;
  user-select: none;
  margin: 20px 0;
  &:hover {
    .ant-checkbox-inner {
      border-color: #ba664c !important;
    }
  }
  .ant-checkbox:hover {
    .ant-checkbox-inner {
      border-color: #ba664c !important;
    }
  }
  .ant-checkbox-inner {
    border-radius: 50%;
    background-color: transparent;
  }
  .ant-checkbox-checked {
    .ant-checkbox-inner {
      background-color: #ba664c !important;
      border-color: #ba664c;
    }
  }

  .ant-checkbox-checked:after {
    border: none !important;
    background-color: transparent;
  }
`;

export const SubmitButton = styled(Button)`
  background: ${(props: ILoginBtnProps) =>
    props.isActive ? "#8A4C38" : "#828282"};
  height: 64px;
  border-radius: 16px;
  border: none;
  margin-top: 20px;
  :hover {
    background: ${(props: ILoginBtnProps) =>
      props.isActive ? "#BA664C !important" : "#828282 !important"};
    border-color: ${(props: ILoginBtnProps) =>
      props.isActive ? "#BA664C !important" : "#828282 !important"};
  }
  span {
    color: #bdbdbd;
  }
`;
export const BottomWrap = styled.div`
  width: 100%;
  padding-top: 40px;
`;
export const Line = styled.div`
  display: block;
  width: 100%;
  height: 1px;
  background: #fff;
`;
export const FindWrap = styled.ul`
  list-style: none;
  padding: 0;
  padding-top: 20px;
  margin: 0 20px;
  display: flex;
  justify-content: space-between;
`;
export const Option = styled.li`
  position: relative;
  color: #fff;
  cursor: pointer;
  font-size: 14px;
  :hover {
    font-weight: 600;
  }
`;
export const Bar = styled.li`
  display: block;
  width: 1px;
  height: 16px;
  background: #fff;
  margin-top: 2px;
  color: #fff;
`;
