import LayoutNavigationPresenter from "./LayoutNavigation.presenter";
import { useRouter } from "next/router";
import { MouseEvent } from "react";
export default function LayoutNavigationContainer() {
  const router = useRouter();

  const onClickMenu = (event: MouseEvent<HTMLDivElement>) => {
    void router.push(event.currentTarget.id);
  };
  return (
    <>
      <LayoutNavigationPresenter onClickMenu={onClickMenu} />
    </>
  );
}
 