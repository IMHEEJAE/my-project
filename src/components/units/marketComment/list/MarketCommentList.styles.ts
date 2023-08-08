import styled from "@emotion/styled";

export const ItemWrapper = styled.div`
  width: 100%;
  padding: 10px 0 10px;
  border-bottom: 1px solid #000;
`;

export const FlexWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

export const MainWrapper = styled.div`
  width: 100%;
  padding-left: 20px;
`;
export const WriterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  margin-bottom: 5px;
`;
export const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
`;
export const Writer = styled.div`
  font-size: 20px;
  font-weight: bold;
`;
export const Contents = styled.div`
  word-break: break-all;
  width: 80%;
`;

export const OptionWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
export const AnswerIcon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
  margin-right: 10px;
`;
export const UpdateIcon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
  margin-right: 10px;
`;
export const DeleteIcon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export const DateString = styled.div`
  color: #999;
  font-size: 12px;
  padding-left: 5px;
`;
