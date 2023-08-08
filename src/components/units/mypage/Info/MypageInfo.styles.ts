import { UserOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import { Avatar } from "antd";
import { mq } from "../../../../commons/styles/globalStyles";
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  font-weight: bold;
  border-right: 2px solid #000;
  padding-right: 30px;
  margin-right: 60px;
  ${mq[1]} {
    margin-right: 0;
    border-right: none;
    width: 100%;
    padding-right: 0;
  }
`;
export const Title = styled.h4`
  font-size: 24px;
  margin-bottom: 40px;
  ${mq[0]} {
  }
`;
export const ProfileAvatar = styled(Avatar)`
  width: 90px;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  background: #091e6f;
  font-size: 48px !important;
`;
export const UserAvatar = styled.img`
  width: 200px;
  height: 200px;
  display: block;
  border: 2px solid #000;
  border-radius: 50%;
  ${mq[1]} {
    width: 150px;
    height: 150px;
  }
  ${mq[0]} {
    width: 100px;
    height: 100px;
  }
`;
export const UserProfile = styled(UserOutlined)``;
export const Name = styled.span`
  margin: 20px 0;
  font-size: 24px;
  ${mq[0]} {
    margin: 10px 0;
    font-size: 18px;
  }
`;
export const Point = styled.div`
  display: flex;
  align-items: center;
`;
export const Menu = styled.div`
  font-size: 18px;
`;
export const MenuCart = styled.div`
  cursor: pointer;
  display: flex;
  margin-bottom: 20px;
  align-items: center;
  ${mq[0]} {
    font-size: 18px;
  }
`;
export const MenuPoint = styled.div`
  cursor: pointer;
  display: flex;
  margin-bottom: 20px;
  align-items: center;
  ${mq[0]} {
    font-size: 18px;
  }
`;
export const MenuProfile = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  ${mq[0]} {
    font-size: 18px;
  }
`;
export const Icon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 10px;
  ${mq[0]} {
    margin-right: 5px;
  }
`;
export const UserCont = styled.div`
  ${mq[1]} {
    display: flex;
    align-items: center;
    width: 100%;
    border-bottom: 2px solid #000;
    padding-bottom: 60px;
  }
`;
export const BoxA = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${mq[1]} {
    width: 50%;
    flex: 1;
    border-right: 2px solid #000;
  }
`;
export const BoxB = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 70px;
  ${mq[1]} {
    width: 50%;
    flex: 1;
    margin-top: 0;
  }
`;
