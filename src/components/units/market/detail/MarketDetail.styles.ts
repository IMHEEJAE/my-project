import { LikeOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import { mq } from "../../../../commons/styles/globalStyles";
export const Wrapper = styled.div`
  width: 90%;
  padding: 50px 0 100px;
`;
export const MarketWrap = styled.div`
  display: flex;
  margin: 0 auto;
  flex-direction: row;
  flex-wrap: nowrap;
  max-width: 1600px;
  ${mq[2]} {
    display: flex;
    flex-direction: column;
  }
`;

export const Top = styled.div`
  display: flex;
  flex: 2;
  width: 50%;
  ${mq[2]} {
    width: 100%;
  }
  ${mq[1]} {
    display: flex;
    flex-direction: column;
  }
`;
export const SideA = styled.div`
  border-right: 2px solid #000;
  padding-right: 40px;
  display: flex;
  flex: 1;
  flex-direction: column;
  ${mq[2]} {
    width: 50%;
  }
  ${mq[1]} {
    width: 100%;
    border-right: none;
    padding-right: 0;
  }
`;
export const Center = styled.div`
  overflow: hidden;
  margin: 0 40px;
  display: flex;
  flex: 1;
  ${mq[2]} {
    width: 50%;
    margin-right: 0;
  }
  ${mq[1]} {
    width: 100%;
    margin-left: 0;
    margin-top: 40px;
  }
`;
export const SideB = styled.div`
  border-left: 2px solid #000;
  padding-left: 40px;
  flex: 1;
  width: 50%;
  ${mq[2]} {
    width: 100%;
    flex: 1;
    border-left: none;
    padding-left: 0;
    margin-top: 40px;
  }
`;

export const User = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 1px solid #000;
  justify-content: space-between;
`;
export const UserLeft = styled.div`
  display: flex;
  align-items: center;
`;
export const UserRight = styled.div``;
export const Avatar = styled.img`
  margin-right: 15px;
  display: flex;
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;
export const AvatarInfo = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Writer = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 2px;
`;
export const AvatarDate = styled.div`
  font-size: 12px;
  color: #828282;
`;
export const IconClip = styled.img`
  margin-right: 20px;
`;
export const IconLocation = styled.img``;
export const Body = styled.div`
  width: 100%;
  padding: 20px 0 40px;
`;
export const ContTop = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 20px;
`;
export const Cont = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
`;
export const Remark = styled.span`
  font-size: 14px;
  color: #828282;
`;
export const Title = styled.span`
  padding-bottom: 10px;
  font-size: 24px;
  font-weight: bold;
`;
export const Price = styled.span`
  font-size: 20px;
  font-weight: bold;
  padding-top: 10px;
`;
export const LikeWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5px;
`;
export const LikeIcon = styled(LikeOutlined)`
  font-size: 20px;
  margin-bottom: 5px;
`;
export const LikeCount = styled.span`
  font-size: 14px;
  font-weight: 500;
`;

export const ImgWrap = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  max-width: 500px;
  ${mq[1]} {
    max-width: initial;
  }
`;
export const Img = styled.img`
  margin-bottom: 20px;
  width: 100%;
  min-height: 300px;
  ${mq[2]} {
    max-width: 600px;
  }
  ${mq[1]} {
    max-width: initial;
    width: 100%;
    height: 100%;
  }
`;
export const Content = styled.span`
  display: block;
  font-size: 18px;
  padding-top: 20px;
`;
export const Tags = styled.span`
  display: block;
  margin-top: 5px;
  font-size: 14px;
  color: #828282;
`;
export const MapWrap = styled.div`
  width: 100%;
  padding: 20px 0;
  border-bottom: 1px solid #000;
`;
export const Map = styled.div`
  width: 100%;
  height: 300px;
`;
export const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;
export const Button = styled.button`
  width: 100%;
  height: 45px;
  background-color: #091e6f;
  border: 1px solid #091e6f;
  margin: 0px 12px;
  cursor: pointer;
  color: #fff;
  :first-child {
    margin-left: 0;
  }
  :last-child {
    margin-right: 0;
  }
  :hover {
    color: #ba664c;
  }
  ${mq[0]} {
    margin: 0 5px;
  }
`;
