import { HeartFilled } from "@ant-design/icons";
import styled from "@emotion/styled";
import { Button, Card, Tabs } from "antd";
import { IMatched } from "./MarketLists.types";
import InfiniteScroll from "react-infinite-scroller";
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

export const BestCard = styled.div`
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
export const CardImgWrap = styled.div`
  height: 240px;
`;
export const CardImg = styled.img`
  width: 100%;
  height: 100%;
  margin-bottom: 20px;
`;

export const CardContent = styled.div`
  padding: 20px;
  border-top: 2px solid #000;
`;
export const TopWrap = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Title = styled.span`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 4px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: break-word;
  -webkit-line-clamp: 1;
`;
export const Remark = styled.span`
  font-size: 12px;
  color: #828282;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: break-word;
  -webkit-line-clamp: 1;
`;
export const BottomWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;
export const Price = styled.span`
  font-size: 18px;
  font-weight: bold;
`;
export const LickBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const LickIcon = styled(HeartFilled)`
  color: #ba664c;
`;
export const LickCountBest = styled.span`
  font-size: 12px;
  color: #828282;
`;

export const ListWrap = styled.div``;
export const MainTitle = styled.h2`
  margin: 0 auto 40px;
  text-align: center;
`;
export const ListTitle = styled.h3`
  margin: 0 auto 20px;
  text-align: center;
  font-size: 24px;
`;
export const List = styled.div`
  border-top: 1px solid #828282;
  border-bottom: 1px solid #828282;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  height: 500px;
  overflow: auto;
`;
export const ScrollWrap = styled.div`
  overflow: auto;
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #2f3542;
    border-radius: 10px;
    background-clip: padding-box;
    border: 2px solid transparent;
  }
  ::-webkit-scrollbar-track {
    background-color: grey;
    border-radius: 10px;
    box-shadow: inset 0px 0px 5px white;
  }
`;
export const ListItem = styled.div`
  display: flex;
  padding: 20px;
  border: 2px solid #000;
  border-bottom: none;
  :last-child {
    border-bottom: 2px solid #000;
  }
  ${mq[1]} {
    padding: 10px 0;
    flex-direction: column;
  }
`;
export const ListLeft = styled.div`
  display: flex;
  align-items: center;
  ${mq[1]} {
    flex-direction: column;
    align-items: baseline;
    margin: 0 auto;
  }
`;
export const MarketPrice = styled.div`
  font-size: 24px;
  font-weight: 500;
  margin-top: 10px;
  ${mq[1]} {
    font-size: 20px;
  }
`;
export const IconMoney = styled.img`
  margin-right: 10px;
`;
export const ImageWrap = styled.div`
  width: 160px;
  height: 160px;
  background: url(/images/no_image.png) no-repeat;
  background-size: 100% 100%;
  overflow: hidden;
`;
export const Image = styled.img`
  width: 160px;
  height: 160px;
  ${mq[1]} {
    width: 75%;
    min-width: 300px;
    height: 160px;
  }
`;
export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  ${mq[1]} {
    margin-left: 0px;
  }
`;
export const Content = styled.div``;
export const ItemTitle = styled.span`
  font-size: 24px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: break-word;
  -webkit-line-clamp: 1;
  ${mq[1]} {
    font-size: 20px;
  }
`;
export const Desc = styled.span`
  color: #4f4f4f;
  margin-bottom: 5px;
  height: 24px;
`;
export const Tags = styled.span`
  color: #828282;
  line-height: 24px;
  font-size: 14px;
  height: 24px;
`;
export const SellerWrap = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;
export const Avatar = styled.img`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 5px;
`;
export const Seller = styled.span`
  margin-right: 5px;
  display: flex;
  align-items: center;
`;
export const LickCount = styled(HeartFilled)`
  color: #ba664c;
  margin-right: 5px;
`;
export const PickCount = styled.span`
  margin-left: 10px;
  display: flex;
  align-items: center;
`;
export const StrongText = styled.span`
  color: ${(props: IMatched) => (props.isMatched ? "#ba664c" : "#000")};
  font-weight: ${(props: IMatched) => (props.isMatched ? "bold" : "normal")};
`;
export const Tabss = styled(Tabs)`
  padding: 0 0 20px;
`;
export const InfiniScroll = styled(InfiniteScroll)``;

export const Bottom = styled.div`
  display: flex;
  justify-content: flex-end;
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
`;
export const EditIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 4px;
`;
