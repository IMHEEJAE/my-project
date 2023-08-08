import * as S from "./MypageInfo.styles";
import { IMyPageInfoPresenterProps } from "./MypageInfo.types";
export default function MyPageInfoPresenter(props: IMyPageInfoPresenterProps) {
  return (
    <>
      <S.Wrapper>
        <S.Title>MYPAGE</S.Title>
        <S.UserCont>
          <S.BoxA>
            {props.data?.fetchUserLoggedIn.picture ? (
              <S.UserAvatar
                src={`https://storage.googleapis.com/${props.data?.fetchUserLoggedIn.picture}`}
              />
            ) : (
              <S.ProfileAvatar icon={<S.UserProfile />} />
            )}

            <S.Name>{props.data?.fetchUserLoggedIn.name}</S.Name>
            <S.Point>
              <S.Icon src="/images/icon/icon_mypage_point.svg" />
              {props.data?.fetchUserLoggedIn.userPoint.amount.toLocaleString(
                "ko-KR"
              )}{" "}
              원
            </S.Point>
          </S.BoxA>
          <S.BoxB>
            <S.Menu>
              <S.MenuCart onClick={props.onClickMoveToPage(`/mypage/mycart`)}>
                <S.Icon src="/images/icon/icon_mypage_cart.svg" />내 장터
              </S.MenuCart>
              <S.MenuPoint onClick={props.onClickMoveToPage(`/mypage/mypoint`)}>
                <S.Icon src="/images/icon/icon_mypage_mypoint.svg" />내 포인트
              </S.MenuPoint>
              <S.MenuProfile
                onClick={props.onClickMoveToPage(`/mypage/myprofile`)}
              >
                <S.Icon src="/images/icon/icon_mypage_profile.svg" />내 프로필
              </S.MenuProfile>
            </S.Menu>
          </S.BoxB>
        </S.UserCont>
      </S.Wrapper>
    </>
  );
}
