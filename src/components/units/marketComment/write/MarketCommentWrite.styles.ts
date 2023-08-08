import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
`;

export const WrapperTitle = styled.h2`
  padding-bottom: 10px;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 20px;
`;

export const ContentsWrapper = styled.div`
  margin-top: 10px;
`;

export const Contents = styled.textarea`
  display: block;
  width: 100%;
  min-height: 108px;
  padding: 20px;
  border: none;
  box-sizing: border-box;
  resize: none;
  background-color: #e0dcd0;
  border: 1px solid #000;
  :focus {
    outline: none;
  }
`;

export const BottomWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  border: 1px solid #000;
  border-top: none;
`;

export const ContentsLength = styled.div`
  width: 100%;
  height: 51px;
  line-height: 51px;
  padding-left: 20px;
  color: #828282;
`;

export const Button = styled.button`
  width: 100px;
  height: 51px;
  background-color: #e0dcd0;
  border: none;
  font-weight: bold;
  cursor: pointer;
`;
