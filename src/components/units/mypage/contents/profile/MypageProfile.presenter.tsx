import * as S from "./MypageProfile.styles";
import { IMypageProfilePresenterProps } from "./MypageProfile.types";
export default function MypageProfilePresenter(
  props: IMypageProfilePresenterProps
) {
  return (
    <>
      <S.Wrapper>
        <S.Title>내 비밀번호 변경</S.Title>
        <S.InputWrapper>
          <S.Label>현재 비밀번호</S.Label>
          <S.Input type="password" />
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>새 비밀번호</S.Label>
          <S.Input type="password" onChange={props.onChangePassword} />
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>새 비밀번호 확인</S.Label>
          <S.Input type="password" onChange={props.onChangePasswordConfirm} />
        </S.InputWrapper>
        <S.BtnWrapper>
          <S.Btn onClick={props.onClickChangePassword}>비밀번호 변경</S.Btn>
        </S.BtnWrapper>
        <S.NameWrapper>
          <S.Title>내 별명 변경</S.Title>
          <S.InputWrapper>
            <S.Label>변경 할 별명</S.Label>
            <S.Input type="text" onChange={props.onChangeName} />
          </S.InputWrapper>
          <S.BtnWrapper>
            <S.Btn onClick={props.onClickChangeName}>이름 변경</S.Btn>
          </S.BtnWrapper>
        </S.NameWrapper>
      </S.Wrapper>
    </>
  );
}
