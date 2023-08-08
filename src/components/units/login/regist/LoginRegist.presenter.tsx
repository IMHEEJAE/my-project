import InputsLogin from "../../../commons/inputs/login/InputsLogin";
import * as S from "./LoginRegist.styles";
import { ILoginRegistPresenterProps } from "./LoginRegist.types";

import Validation01 from "../../../commons/validations/01/Validation01";
import ButtonsLogin from "../../../commons/buttons/login/ButtonsLogin";

export default function LoginRegistPresenter(
  props: ILoginRegistPresenterProps
) {
  return (
    <>
      <S.Wrapper>
        <S.Inner>
          <S.RegistInnerWrap>
            <S.LoginButton onClick={props.onClickLoginPage} />
            <S.Logo>회원가입</S.Logo>
            <form
              onSubmit={props.handleSubmit(props.onClickSubmit)}
              style={{ width: "100%" }}
            >
              <S.RegistLabel>이메일 </S.RegistLabel>

              <InputsLogin
                type="text"
                register={props.register("email")}
                placeholder="이메일을 입력해주세요."
                autoComplete="off"
              />
              {props.formState.errors.email && (
                <Validation01 title={props.formState.errors.email?.message} />
              )}
              <S.RegistLabel>이름 </S.RegistLabel>

              <InputsLogin
                type="text"
                register={props.register("name")}
                placeholder="이름을 입력해주세요."
                autoComplete="off"
              />
              {props.formState.errors.name && (
                <Validation01 title={props.formState.errors.name?.message} />
              )}
              <S.RegistLabel>비밀번호 </S.RegistLabel>

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
              <S.RegistLabel>비밀번호 확인 </S.RegistLabel>

              <InputsLogin
                type="password"
                register={props.register("passwordConfirmation")}
                placeholder="비밀번호를 입력해주세요."
              />
              {props.formState.errors.passwordConfirmation && (
                <Validation01
                  title={props.formState.errors.passwordConfirmation?.message}
                />
              )}
              {/* <S.SubmitButton
                onClick={props.onClickRegist}
                isActive={props.isEdit ? true : props.isActive}
              >
                회원가입하기
              </S.SubmitButton> */}
              <ButtonsLogin
                title="회원가입하기"
                isActive={props.formState.isValid}
              />
            </form>
          </S.RegistInnerWrap>
        </S.Inner>
      </S.Wrapper>
    </>
  );
}
