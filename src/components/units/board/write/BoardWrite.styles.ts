import styled from "@emotion/styled";
import { Modal } from "antd";
import DaumPostcodeEmbed from "react-daum-postcode";
import { mq } from "../../../../commons/styles/globalStyles";
export const Wrapper = styled.div`
  position: relative;
  width: 90%;
`;
export const MainWrap = styled.div`
  max-width: 1600px;
  margin: 0 auto;
  border: 2px solid #000;
  padding: 50px;
  border-top: none;
  border-bottom: none;
  ${mq[1]} {
    padding: 20px;
  }
`;
export const MainTitle = styled.h2``;
export const FormWrap = styled.div`
  width: 100%;
`;
export const WriterWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding-top: 16px;
  ${mq[0]} {
    flex-direction: column;
  }
`;
export const WriterBox = styled.div`
  width: 49%;
  ${mq[0]} {
    width: 100%;
  }
`;

export const Label = styled.div`
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  margin: 20px 0 10px;
`;
export const Writer = styled.input`
  width: 100%;
  height: 52px;
  border: 1px solid #bdbdbd;
  padding-left: 16px;
  box-sizing: border-box;
`;
export const Password = styled.input`
  width: 100%;
  height: 52px;
  border: 1px solid #bdbdbd;
  padding-left: 16px;
  box-sizing: border-box;
`;
export const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const InputWrapTop = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 40px;
`;
export const Textarea = styled.textarea`
  width: 100%;
  height: 480px;
  padding: 16px;
  border: 2px solid #000;
  background: #e0dcd0;
  resize: none;
  ${mq[0]} {
    height: 200px;
  }
`;
export const ZipWrap = styled.div`
  display: flex;
`;
export const ZipCode = styled.input`
  width: 77px;
  height: 52px;
  box-sizing: border-box;
  padding: 0 12px;
  border: 2px solid #000;
  background: #e0dcd0;
`;
export const ZipCodeBtn = styled.button`
  width: 124px;
  height: 52px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #000;
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  margin-left: 10px;
`;
export const InputBox = styled.input`
  width: 100%;
  height: 52px;
  border: 2px solid #000;
  background: #e0dcd0;
  box-sizing: border-box;
  margin-top: 20px;
  padding: 0 12px;
`;
export const UploadWrap = styled.div`
  display: flex;
`;
export const UploadBox = styled.div`
  // width: 78px;
  // height: 78px;
  // background-color: #bdbdbd;
  // margin-right: 24px;
  // border: none;
  // display: flex;
  // justify-content: center;
  // align-items: center;
`;
export const RadioWrap = styled.div`
  width: 100%;
  padding-top: 40px;
`;
export const RadioBtn = styled.input`
  cursor: pointer;
`;

export const RadioLabel = styled.label`
  margin-left: 8px;
  margin-right: 20px;
  font-weight: 500;
`;

export const SubmitWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 80px;
`;

export const ErrorMessage = styled.div`
  padding-top: 5px;
  font-size: 12px;
  color: red;
`;
export const ZipModal = styled(Modal)``;
export const PostcodeEmbed = styled(DaumPostcodeEmbed)`
  margin-top: 10px;
`;
