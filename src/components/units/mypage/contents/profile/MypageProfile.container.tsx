import { ChangeEvent, useState } from "react";
import MypageProfilePresenter from "./MypageProfile.presenter";
import { Modal } from "antd";
import {
  FETCH_USER_LOGGED_IN,
  RESET_USER_PASSWORD,
  UPDATE_USER,
} from "./MypageProfile.queries";
import { useMutation } from "@apollo/client";

export default function MypageProfileContainer() {
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [name, setName] = useState("");
  const [resetUserPassword] = useMutation(RESET_USER_PASSWORD);
  const [updateUser] = useMutation(UPDATE_USER);

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    console.log(password);
  };
  const onChangePasswordConfirm = (event: ChangeEvent<HTMLInputElement>) => {
    setPasswordConfirm(event.target.value);
    console.log(passwordConfirm);
  };
  const onChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  const onClickChangePassword = async () => {
    if (password !== passwordConfirm) {
      Modal.error({ content: "비밀번호가 일치하지 않습니다." });
      return;
    }
    try {
      const result = await resetUserPassword({
        variables: {
          password,
        },
      });
      Modal.success({ content: `비밀번호가 변경 되었습니다` });
      console.log(result);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };
  const onClickChangeName = async () => {
    try {
      const result = await updateUser({
        variables: {
          updateUserInput: {
            name,
          },
        },
        refetchQueries: [
          {
            query: FETCH_USER_LOGGED_IN,
          },
        ],
      });
      Modal.success({ content: `별명이 수정 되었습니다.` });
      console.log(result);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };
  return (
    <>
      <MypageProfilePresenter
        onChangePassword={onChangePassword}
        onChangePasswordConfirm={onChangePasswordConfirm}
        onChangeName={onChangeName}
        onClickChangePassword={onClickChangePassword}
        onClickChangeName={onClickChangeName}
      />
    </>
  );
}
