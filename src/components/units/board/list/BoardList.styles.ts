import styled from "@emotion/styled";
import { Button, Card } from "antd";
import { IMatched } from "./BoardList.types";
import { LikeOutlined } from "@ant-design/icons";
import { mq } from "../../../../commons/styles/globalStyles";

export const Wrapper = styled.div`
  position: relative;
  width: 90%;
`;
export const MainWrap = styled.div`
  padding: 50px 0 100px;
  max-width: 1600px;
  margin: 0 auto;
`;
export const BestWrap = styled.div`
  padding-bottom: 100px;
`;
export const MainTitle = styled.h2`
  margin: 0 auto 40px;
  text-align: center;
`;

export const Header = styled.h2`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`;
export const BoardList = styled.div``;
export const BoardTable = styled.table`
  width: 100%;
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;
  border-collapse: collapse;
`;
export const Thead = styled.thead``;
export const Tr = styled.tr`
  width: 100%;
  overflow: hidden;
`;
export const Td = styled.td``;
export const Th = styled.th`
  padding: 14px 12px;
  border-top: 1px solid #828282;
  font-weight: 400;
  word-break: break-all;
  ${mq[0]} {
    font-size: 13px;
  }
`;
export const ThTitle = styled.th`
  padding: 14px 12px;
  border-top: 1px solid #828282;
  font-weight: 400;
  word-break: break-all;
  :hover {
    font-weight: bold;
    cursor: pointer;
  }
  ${mq[0]} {
    font-size: 13px;
  }
`;
export const ThHeaderNum = styled.th`
  width: 15%;
  padding: 16px 12px;
  ${mq[0]} {
    font-size: 13px;
  }
`;
export const ThHeaderTitle = styled.th`
  width: 40%;
  ${mq[0]} {
    font-size: 13px;
  }
`;
export const ThHeaderWriter = styled.th`
  width: 25%;
  ${mq[0]} {
    font-size: 13px;
  }
`;
export const ThHeaderDate = styled.th`
  width: 20%;
  ${mq[0]} {
    font-size: 13px;
  }
`;
export const TBody = styled.tbody``;
export const BoardFooter = styled.div`
  display: flex;
  margin-top: 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  ${mq[0]} {
    flex-direction: column;
  }
`;

export const EditBtn = styled(Button)`
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
  ${mq[0]} {
    margin-top: 20px;
  }
`;
export const EditIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 4px;
`;

export const StrongText = styled.span`
  color: ${(props: IMatched) => (props.isMatched ? "#ba664c" : "#000")};
  font-weight: ${(props: IMatched) => (props.isMatched ? "bold" : "normal")};
`;
export const Title = styled.h2`
  padding: 80px 0 40px;
`;
export const CardWrap = styled.div`
  display: flex;
  gap: 16px;
  ${mq[1]} {
    flex-wrap: wrap;
  }
`;
export const CardBox = styled(Card)`
  width: 25%;
  overflow: hidden;
  border: 2px solid #000;
  background-color: #e0dcd0;
  border-radius: 0;
  :hover {
    border: 2px solid #000;
  }
  .ant-card-body {
    padding: 0;
  }
  ${mq[1]} {
    flex-grow: 1;
    flex-basis: calc(50% - 16px);
  }
  ${mq[0]} {
    flex-basis: 100%;
  }
`;

export const CardImageWrap = styled.div`
  height: 240px;
  width: 100%;
  background: url(/images/no_image.png) no-repeat;
  background-size: 100% 100%;
`;
export const CardImg = styled.img`
  width: 100%;
  height: 100%;
  margin-bottom: 20px;
`;

export const CardContents = styled.div`
  border-top: 2px solid #000;
  padding: 20px;
`;
export const CardTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 4px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: break-word;
  -webkit-line-clamp: 1;
`;
export const CardProfileWrap = styled.div``;
export const CardProfileTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;
export const CardProfile = styled.div`
  display: flex;
  align-items: center;
`;
export const CardProfileName = styled.div``;
export const CardProfileBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;
export const CardProfileDate = styled.div`
  font-size: 12px;
  color: #828282;
`;
export const CardProfileLike = styled.div``;
export const Avatar = styled.img`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 5px;
`;
export const CardProfileLikeIcon = styled(LikeOutlined)`
  display: flex;
  font-size: 24px;
  color: #d4adfc;
`;
