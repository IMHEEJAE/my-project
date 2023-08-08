import { useQuery } from "@apollo/client";
import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";
import MyPageInfoPresenter from "./MypageInfo.presenter";
import { FETCH_USER_LOGGED_IN } from "./MypageInfo.queries";
import { IQuery } from "../../../../commons/types/generated/types";

export default function MyPageInfoContainer() {
  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);
  const { onClickMoveToPage } = useMoveToPage();
  return (
    <>
      <MyPageInfoPresenter data={data} onClickMoveToPage={onClickMoveToPage} />
    </>
  );
}
