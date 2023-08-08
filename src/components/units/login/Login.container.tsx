import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import LoginPresenter from "./Login.presenter";
// import { useState, ChangeEvent } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "./Login.queries";
import {
  IMutation,
  IMutationLoginUserArgs,
} from "../../../commons/types/generated/types";
import { Modal } from "antd";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/store";
import { IFormData, ILoginContainerProps } from "./Login.types";

const schema = yup.object({
  email: yup
    .string()
    .email("이메일 형식에 적합하지 않습니다")
    .required("이메일을 입력해주세요"),
  password: yup
    .string()
    .min(3, "비밀번호는 최소 3자리 이상 입력해주세요.")
    .max(15, "비밀번호는 최대 15자리로 입력해주세요")
    .required("비밀번호를 입력해주세요"),
});
export default function LoginContainer(props: ILoginContainerProps) {
  const router = useRouter();
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  const [loginUser] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(LOGIN_USER);
  const { register, handleSubmit, formState } = useForm<IFormData>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const onClickHome = () => {
    void router.push("/");
  };
  const onClickRegistPage = () => {
    void router.push("./login/regist");
  };

  const onClickSubmit = async (data: IFormData) => {
    console.log(data);
    try {
      const loginResult = await loginUser({
        variables: {
          email: data.email,
          password: data.password,
        },
      });
      const accessToken = loginResult.data?.loginUser.accessToken;
      if (!accessToken) {
        Modal.error({ content: "로그인 실패. 다시 시도해 주세요." });
        return;
      }
      setAccessToken(accessToken);
      console.log(loginResult);
      void router.push("/");
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };
  return (
    <>
      <LoginPresenter
        isEdit={props.isEdit}
        onClickHome={onClickHome}
        onClickRegistPage={onClickRegistPage}
        onClickSubmit={onClickSubmit}
        register={register}
        handleSubmit={handleSubmit}
        formState={formState}
      />
    </>
  );
}
