import LayoutHeaderPresenter from "./LayoutHeader.presenter";
import { IMutation, IQuery } from "../../../../commons/types/generated/types";
import { useRouter } from "next/router";
import { FETCH_USER_LOGGED_IN, LOGOUT_USER } from "./LayoutHeader.queries";
import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { MouseEvent, useState } from "react";
import { useMoveToPage } from "../../hooks/useMoveToPage";
export default function LayoutHeaderContainer() {
  const router = useRouter();
  const { onClickMoveToPage } = useMoveToPage();
  const [isOpen, setIsOpen] = useState(false);
  const showPointModal = () => {
    setIsOpen((prev) => !prev);
  };
  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);
  const [logoutUser] = useMutation<Pick<IMutation, "logoutUser">>(LOGOUT_USER);
  const onClickMenu = (event: MouseEvent<HTMLDivElement>) => {
    void router.push(event.currentTarget.id);
  };
  const onClickLogin = () => {
    void router.push("/login");
  };
  const onClickRegistPage = () => {
    void router.push("./login/regist");
  };
  const onClickLogout = async () => {
    try {
      await logoutUser();
      localStorage.clear();
      window.location.reload();
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };
  return (
    <>
      <LayoutHeaderPresenter
        data={data}
        onClickMoveToPage={onClickMoveToPage}
        onClickLogin={onClickLogin}
        onClickRegistPage={onClickRegistPage}
        onClickLogout={onClickLogout}
        isOpen={isOpen}
        showPointModal={showPointModal}
        onClickMenu={onClickMenu}
      />
    </>
  );
}
