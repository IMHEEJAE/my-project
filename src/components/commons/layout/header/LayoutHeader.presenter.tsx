import PointModal from "../../modal/point/PointModal";
import * as S from "./LayoutHeader.styles";
import { ILayoutHeaderProps } from "./LayoutHeader.types";
import { MenuProps } from "antd";
import Head from "next/head";
const NAVIGATION_MENUS = [
  { name: "게시판", page: "/boards" },
  // { name: "파이어베이스", page: "/myfirebase" },
  { name: "중고마켓", page: "/markets" },
  // { name: "마이페이지", page: "/mypage" },
];

export default function LayoutHeaderPresenter(props: ILayoutHeaderProps) {
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <S.ProfileMenuHeader onClick={props.onClickMoveToPage(`/mypage`)}>
          <S.ProfileIconWrap>
            {props.data?.fetchUserLoggedIn.picture ? (
              <div>
                <S.UserAvatar
                  src={`https://storage.googleapis.com/${props.data?.fetchUserLoggedIn.picture}`}
                />
                <S.ProfileSetting />
              </div>
            ) : (
              <div>
                <S.ProfileAvatar icon={<S.UserProfile />} />
                <S.ProfileSetting />
              </div>
            )}
          </S.ProfileIconWrap>
          <S.ProfileHeaderDetail>
            <S.ProfileName>{props.data?.fetchUserLoggedIn.name}</S.ProfileName>
            <S.ProfileCash>
              {props.data?.fetchUserLoggedIn.userPoint.amount.toLocaleString(
                "ko-KR"
              )}
              P
            </S.ProfileCash>
          </S.ProfileHeaderDetail>
        </S.ProfileMenuHeader>
      ),
    },

    {
      key: "2",
      label: (
        <S.ProfileCashWrap onClick={props.showPointModal}>
          <S.ProfileMenu>
            <S.ProfileCashIcon />
            <S.ProfileDesc>충전하기</S.ProfileDesc>
          </S.ProfileMenu>
        </S.ProfileCashWrap>
      ),
    },
    {
      key: "3",
      label: (
        <S.ProfileLogoutWrap onClick={props.onClickLogout}>
          <S.ProfileMenu>
            <S.ProfileLogoutIcon />
            <S.ProfileDesc>로그아웃</S.ProfileDesc>
          </S.ProfileMenu>
        </S.ProfileLogoutWrap>
      ),
    },
  ];
  return (
    <>
      <Head>
        <script src="https://cdn.iamport.kr/v1/iamport.js"></script>
      </Head>
      <S.Wrapper>
        <S.InnerWrapper>
          <S.InnerLogo onClick={props.onClickMoveToPage(`/`)}>
            <S.Logo src="/images/logogo.png" />
          </S.InnerLogo>

          <S.MenuWrap>
            {NAVIGATION_MENUS.map((el) => (
              <S.Menu key={el.page}>
                <S.MenuItem id={el.page} onClick={props.onClickMenu}>
                  {el.name}
                </S.MenuItem>
              </S.Menu>
            ))}
          </S.MenuWrap>

          {props.data?.fetchUserLoggedIn ? (
            <S.ProfileWrap>
              {props.data?.fetchUserLoggedIn.picture ? (
                <div>
                  <S.UserAvatar
                    onClick={props.onClickMoveToPage(`/mypage`)}
                    src={`https://storage.googleapis.com/${props.data?.fetchUserLoggedIn.picture}`}
                  />
                </div>
              ) : (
                <div>
                  <S.ProfileAvatar
                    onClick={props.onClickMoveToPage(`/mypage`)}
                    icon={<S.UserProfile />}
                  />
                </div>
              )}
              <S.ProfileDropdown
                menu={{ items }}
                placement="bottomRight"
                arrow={{ pointAtCenter: true }}
                trigger={["click"]}
              >
                <S.IconDown />
              </S.ProfileDropdown>
            </S.ProfileWrap>
          ) : (
            <div>
              <S.InnerButton onClick={props.onClickLogin}>로그인</S.InnerButton>
              {/* <S.InnerButton onClick={props.onClickRegistPage}>
                  회원가입
                </S.InnerButton> */}
            </div>
          )}
        </S.InnerWrapper>
        {props.isOpen && (
          <S.PointModal visible={true} onCancel={props.showPointModal}>
            <PointModal isOpen={false}  />
          </S.PointModal>
        )}
      </S.Wrapper>
    </>
  );
}
