import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px 0;
`;

export const Arrow = styled.img`
  width: 20px;
  height: 20px;
  margin: 10px 15px 0 10px;
`;
export const ContentsWrapper = styled.div`
  flex: 1;
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
export const CommentInfo = styled.div`
  display: flex;
  flex-direction: row;
`;
export const CommentCountInput = styled.div`
  width: 1005px;
  height: 52px;
  border: 1px solid #bdbdbd;
  border-top: none;
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
