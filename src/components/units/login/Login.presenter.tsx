import * as S from "./Login.styles";
import { ILoginPresenterProps } from "./Login.types";

import InputsLogin from "../../commons/inputs/login/InputsLogin";
import Validation01 from "../../commons/validations/01/Validation01";
import ButtonsLogin from "../../commons/buttons/login/ButtonsLogin";

export default function LoginPresenter(props: ILoginPresenterProps) {
  return (
    <>
      <S.Wrapper>
        <S.Inner>
          <S.LoginInnerWrap>
            <S.HomeIcon onClick={props.onClickHome} />
            <S.Logo>로그인</S.Logo>
            <form
              onSubmit={props.handleSubmit(props.onClickSubmit)}
              style={{ width: "100%" }}
            >
              <InputsLogin
                type="text"
                register={props.register("email")}
                placeholder="이메일을 입력해주세요."
                autoComplete="off"
              />
              {props.formState.errors.email && (
                <Validation01 title={props.formState.errors.email?.message} />
              )}

              <InputsLogin
                type="password"
                register={props.register("password")}
                placeholder="비밀번호를 입력해주세요."
              />
              {props.formState.errors.password && (
                <Validation01
                  title={props.formState.errors.password?.message}
                />
              )}

              <S.CheckBoxLogin>자동로그인</S.CheckBoxLogin>
              <ButtonsLogin
                title="등록하기"
                isActive={props.formState.isValid}
              />
            </form>
            <S.BottomWrap>
              <S.Line></S.Line>
              <S.FindWrap>
                <S.Option>아이디찾기</S.Option>
                <S.Bar />
                <S.Option>비밀번호찾기</S.Option>
                <S.Bar />
                <S.Option onClick={props.onClickRegistPage}>회원가입</S.Option>
              </S.FindWrap>
            </S.BottomWrap>
          </S.LoginInnerWrap>
        </S.Inner>
      </S.Wrapper>
    </>
  );
}
