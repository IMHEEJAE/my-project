import styled from "@emotion/styled";

export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #828282;
  padding: 10px 0;
`;
export const ImgWrapper = styled.div`
  display: flex;
`;
export const FlexWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding-left: 10px;
`;

export const Arrow = styled.img`
  width: 20px;
  height: 20px;
  margin: 10px 0 0 10px;
`;

export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  margin-left: 10px;
  border-radius: 50%;
`;

export const WriterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
`;
export const UserName = styled.div`
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
`;

export const Contents = styled.div`
  font-size: 16px;
  line-height: 24px;
  margin-top: 4px;
  word-break: break-all;
  width: 80%;
`;

export const ButtonWrapper = styled.div`
  display: flex;
`;
export const Button = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 10px;
  cursor: pointer;
`;
export const ButtonDelete = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;
