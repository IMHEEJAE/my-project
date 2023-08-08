import styled from "@emotion/styled";
import { Button } from "antd";
export const Wrapper = styled.div``;

export const Title = styled.div`
  font-weight: bold;
  font-size: 24px;
  line-height: 36px;
  margin-bottom: 40px;
`;

export const BtnWrapper = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: center;
`;

export const AvatarBtn = styled(Button)`
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
export const UploadWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;
