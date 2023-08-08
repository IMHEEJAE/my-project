import { ChangeEvent, useState } from "react";
import MypageCartPresenter from "./MypageCart.presenter";
import {
  FETCH_USEDITEM_IPICKED,
  FETCH_USEDITEM_ISOLD,
} from "./MypageCart.queries";
import { useQuery } from "@apollo/client";

export default function MypageCartContainer() {
  const [isTab, setIsTab] = useState(false);
  const { data } = useQuery(FETCH_USEDITEM_ISOLD, {
    variables: { page: 1 },
  });
  const { data: dataPick } = useQuery(FETCH_USEDITEM_IPICKED, {
    variables: { search: "" },
  });
  const onClickSold = () => {
    setIsTab(false);
  };
  const onClickPick = () => {
    setIsTab(true);
  };
  return (
    <>
      <MypageCartPresenter
        data={data}
        dataPick={dataPick}
        isTab={isTab}
        onClickSold={onClickSold} 
        onClickPick={onClickPick}     />
    </>
  );
}
