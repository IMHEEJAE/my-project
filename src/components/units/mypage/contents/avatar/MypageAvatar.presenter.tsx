import Upload03Container from "../../../../commons/uploads/03/upload03.container";
import * as S from "./MypageAvatar.styles";
import { IMypageAvatarPresenterProps } from "./MypageAvatar.types";
export default function MypageAvatarPresenter(
  props: IMypageAvatarPresenterProps
) {
  return (
    <>
      <S.Wrapper>
        <S.Title>내 프로필 변경</S.Title>
        <S.UploadWrapper>
          <Upload03Container
            index={0}
            fileUrl={""}
            onChangeFileUrls={props.onChangeFileUrls}
            defaultFileUrl={props.data?.fetchUserLoggedIn.picture}
          />
        </S.UploadWrapper>
        <S.BtnWrapper>
          <S.AvatarBtn onClick={props.onClickUpdateUserPicture}>
            사진 변경하기
          </S.AvatarBtn>
        </S.BtnWrapper>
      </S.Wrapper>
    </>
  );
}
