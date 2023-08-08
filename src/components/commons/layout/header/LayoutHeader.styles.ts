import { Avatar, Dropdown, Modal } from "antd";
import { CaretDownOutlined, UserOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import { mq } from "../../../../commons/styles/globalStyles";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
  border-bottom: 2px solid #000;
  // background-color: #e0dcd0;
  height: 72px;
`;
export const Pc = styled.div`
  // ${mq[1]} {
  //   display: none;
  // }
`;

export const InnerWrapper = styled.div`
  max-width: 1600px;
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  ${mq[3]} {
    width: 1100px;
  }
`;
export const Logo = styled.img`
  width: 40px;
  height: 40px;
`;
export const InnerLogo = styled.div`
  // font-size: 30px;
  // font-family: "MFB";
  // font-weight: 700;
  // color: #091e6f;
  // cursor: pointer;
`;

export const InnerButton = styled.span`
  font-size: 20px;
  color: #091e6f;
  cursor: pointer;
  ${mq[0]} {
    font-size: 16px;
  }
`;
export const MenuWrap = styled.div`
  display: flex;
  gap: 20px;
  ${mq[0]} {
    gap: 5px;
  }
`;
export const Menu = styled.div`
  display: flex;
`;
export const MenuItem = styled.div`
  cursor: pointer;
  font-size: 20px;
  :hover {
    color: #ba664c;
  }
  ${mq[0]} {
    font-size: 16px;
  }
`;

export const ProfileWrap = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  .ant-dropdown-menu-item {
    padding: 0 !important;
  }
`;

export const IconDown = styled(CaretDownOutlined)`
  padding-left: 20px;
`;

export const ProfileAvatar = styled(Avatar)`
  color: #fff;
  background: #091E6F;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}
`;

export const UserAvatar = styled.img`
  width: 40px;
  height: 40px;
  display: block;
  border: 2px solid #000;
  border-radius: 50%;
`;
export const UserProfile = styled(UserOutlined)``;

export const ProfileMenuHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 26px 24px;
  width: 230px;
  border-bottom: 1px solid #000;
`;
export const ProfileIconWrap = styled.div`
  position: relative;
`;
export const ProfileSetting = styled.div`
  background: url(../../../../../images/icon/icon_setting.svg) no-repeat 50%
    100%;
  width: 20px;
  height: 20px;
  position: absolute;
  top: 20px;
  left: 25px;
`;
export const ProfileHeaderDetail = styled.div`
  padding-left: 12px;
  font-weight: bold;
`;
export const ProfileName = styled.div``;
export const ProfileCash = styled.div``;
export const ProfileDivider = styled.div`
  width: 100%;
  height: 1px;
  background: #000;
  padding: 0;
`;
export const ProfileMenu = styled.div`
  display: flex;
  align-items: center;
`;
export const ProfileCashWrap = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #bdbdbd;
  padding: 20px 24px;
`;
export const ProfileLogoutWrap = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 24px;
`;
export const ProfileCashIcon = styled.div`
  background: url(../../../../../images/icon/icon_cash.svg) no-repeat 50% 100%;
  margin-right: 12px;
  width: 24px;
  height: 24px;
`;
export const ProfileLogoutIcon = styled.div`
  background: url(../../../../../images/icon/icon_logout.svg) no-repeat 50% 100%;
  margin-right: 12px;
  width: 24px;
  height: 24px;
`;
export const ProfileDesc = styled.span`
  color: #bdbdbd;
  font-size: 14px;
  font-weight: bold;
`;
export const ProfileDropdown = styled(Dropdown)`
  color: #091e6f;
  padding-left: 10px;

  display: block;
`;
export const PointModal = styled(Modal)`
  .ant-modal-content {
    padding: 40px 30px;
  }
  .ant-modal-footer {
    display: none;
  }
`;
export const Moblie = styled.div`
  display: none;
  ${mq[1]} {
    background: red;
    width: 100%;
    height: 40px;
    display: block;
  }
`;
export const MWrapper = styled.div``;
export const MLogo = styled.div``;
export const MMenu = styled.div`
  display: block;
  width: 40px;
  height: 40px;
  background: #000;
`;
