import { DislikeOutlined } from "@ant-design/icons";
import { LikeOutlined } from "@ant-design/icons/lib/icons";
import styled from "@emotion/styled";
import { mq } from "../../../../commons/styles/globalStyles";

export const Wrapper = styled.div`
  width: 90%;
  padding: 50px 0 100px;
`;
export const BorderWrap = styled.div`
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
export const SideA = styled.div`
  display: flex;
  width: 50%;
  border-right: 2px solid #000;
  padding-right: 40px;
  display: flex;
  flex: 1;
  flex-direction: column;
  ${mq[2]} {
    width: 100%;
    border-right: none;
    padding-right: 0;
  }
`;
export const SideB = styled.div`
  padding-left: 40px;
  flex: 1;
  width: 50%;
  ${mq[2]} {
    width: 100%;
    padding-left: 0;
    margin-top: 40px;
  }
`;
export const Header = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 1px solid #bdbdbd;
  justify-content: space-between;
`;
export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
`;
export const HeaderRight = styled.div``;
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
`;
export const ContTop = styled.div`
  padding-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Title = styled.span`
  font-size: 24px;
  font-weight: bold;
`;

export const Contents = styled.div`
  margin-top: 20px;
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
  max-width: 150px;
  :first-child {
    margin-left: 0;
  }
  :last-child {
    margin-right: 0;
  }
  :hover {
    color: #ba664c;
    ${mq[0]} {
      margin: 0 5px;
    }
  }
`;
export const CountWrap = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;
export const LikeWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const LikeIcon = styled(LikeOutlined)`
  display: flex;
  font-size: 20px;
  color: #000;
  margin-bottom: 5px;
`;
export const DisLikeIcon = styled(DislikeOutlined)`
  display: flex;
  font-size: 20px;
  color: #828282;
  margin-bottom: 5px;
`;
export const LikeCount = styled.div`
  font-weight: bold;
  color: #000;
  font-size: 14px;
`;
export const DisLikeCount = styled.div`
  font-weight: bold;
  color: #828282;
  font-size: 14px;
`;
export const ImgWrap = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  max-width: 500px;
  margin: 0 auto;
  margin-top: 20px;
  ${mq[2]} {
  }
`;

export const Img = styled.img`
  margin-bottom: 20px;
  width: 100%;
  min-height: 300px;
`;
