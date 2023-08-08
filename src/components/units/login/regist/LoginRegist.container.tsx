import LoginRegistPresenter from "./LoginRegist.presenter";
import { CREATE_USER } from "./LoginRegist.queries";
import { useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationCreateUserArgs,
} from "../../../../commons/types/generated/types";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { IFormData, ILoginRegistContainerProps } from "./LoginRegist.types";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  email: yup
    .string()
    .email("이메일 형식에 적합하지 않습니다")
    .required("이메일을 입력해주세요"),
  name: yup.string().required("이름을 입력해주세요"),
  password: yup
    .string()
    .min(3, "비밀번호는 최소 3자리 이상 입력해주세요.")
    .max(15, "비밀번호는 최대 15자리로 입력해주세요")
    .required("비밀번호를 입력해주세요"),
  // passwordConfirmation: yup
  //   .string()
  //   .oneOf([yup.ref("password") || null], "비밀번호가 맞지 않습니다."),
});

export default function LoginRegistContainer(
  props: ILoginRegistContainerProps
) {
  const router = useRouter();

  const onClickLoginPage = () => {
    void router.push("/login");
  };

  const [createUser] = useMutation<
    Pick<IMutation, "createUser">,
    IMutationCreateUserArgs
  >(CREATE_USER);
  const { register, handleSubmit, formState } = useForm<IFormData>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const onClickSubmit = async (data: IFormData) => {
    try {
      const registResult = await createUser({
        variables: {
          createUserInput: {
            email: data.email,
            name: data.name,
            password: data.password,
          },
        },
      });
      console.log("registResult", registResult);
      // 로그인화면
      Modal.success({ content: "회원가입 성공" });
      void router.push("/login");
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return (
    <>
      <LoginRegistPresenter
        onClickLoginPage={onClickLoginPage}
        isEdit={props.isEdit}
        register={register}
        handleSubmit={handleSubmit}
        formState={formState}
        onClickSubmit={onClickSubmit}
      />
    </>
  );
}
