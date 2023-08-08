import { useMutation, useQuery } from "@apollo/client";
import MarketDetailPresenter from "./MarketDetail.presenter";
import { useRouter } from "next/router";
import {
  CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING,
  DELETE_USEDITEM,
  FETCH_USEDITEM,
  TOGGLE_USEDITEM_PICK,
} from "./MarketDetail.queries";
import {
  IMutation,
  IMutationCreatePointTransactionOfBuyingAndSellingArgs,
  IMutationDeleteUseditemArgs,
  IMutationToggleUseditemPickArgs,
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../../../commons/types/generated/types";
import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";
import { useEffect } from "react";
import { FETCH_USEDITEMS } from "../lists/MarketLists.queries";
import { Modal } from "antd";
import {
  FETCH_POINT_TRANSACTIONS,
  FETCH_POINT_TRANSACTIONS_OF_LOADING,
} from "../../mypage/contents/point/MypagePoint.queries";
import { FETCH_USER_LOGGED_IN } from "../../mypage/Info/MypageInfo.queries";

export default function MarketDetailContainer() {
  const router = useRouter();
  const { onClickMoveToPage } = useMoveToPage();
  const { data } = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_USEDITEM, {
    variables: {
      useditemId: String(router.query.marketId),
    },
  });
  const [createPointTransactinOfBuyingAndSelling] = useMutation<
    Pick<IMutation, "createPointTransactionOfBuyingAndSelling">,
    IMutationCreatePointTransactionOfBuyingAndSellingArgs
  >(CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING);
  const [deleteUseditem] = useMutation<
    Pick<IMutation, "deleteUseditem">,
    IMutationDeleteUseditemArgs
  >(DELETE_USEDITEM);
  const [toggleUseditemPick] = useMutation<
    Pick<IMutation, "toggleUseditemPick">,
    IMutationToggleUseditemPickArgs
  >(TOGGLE_USEDITEM_PICK);

  const onClickBuy = async () => {
    try {
      await createPointTransactinOfBuyingAndSelling({
        variables: {
          useritemId: String(router.query.marketId),
        },
        refetchQueries: [
          {
            query: FETCH_USEDITEMS,
            variables: {
              useditemId: String(router.query.marketId),
            },
          },
          { query: FETCH_POINT_TRANSACTIONS, variables: { page: 1 } },
          {
            query: FETCH_POINT_TRANSACTIONS_OF_LOADING,
            variables: { page: 1 },
          },
          { query: FETCH_USER_LOGGED_IN },
        ],
      });
      Modal.success({ content: `상품을 구매하였습니다.` });
      void router.push(`/markets`);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };
  const onClickDelete = async () => {
    try {
      await deleteUseditem({
        variables: {
          useditemId: String(router.query.marketId),
        },
        refetchQueries: [
          {
            query: FETCH_USEDITEMS,
            variables: {
              useditemId: String(router.query.marketId),
            },
          },
        ],
      });
      void router.push(`/markets`);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };
  const onClickPickCount = async () => {
    try {
      await toggleUseditemPick({
        variables: {
          useditemId: String(router.query.marketId),
        },
        refetchQueries: [
          {
            query: FETCH_USEDITEM,
            variables: {
              useditemId: String(router.query.marketId),
            },
          },
        ],
      });
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };
  // 카카오맵
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=9bbd257bacbf7b1e0519291e4f771ef5&libraries=services";
    document.head.appendChild(script);
    script.onload = () => {
      window.kakao.maps.load(function () {
        const container = document.getElementById("map"); // 지도를 담을 영역의 DOM 레퍼런스
        const options = {
          center: new window.kakao.maps.LatLng(
            Number(data?.fetchUseditem.useditemAddress?.lat) ||
              37.5546788388674,
            Number(data?.fetchUseditem.useditemAddress?.lng) || 126.970606917394
          ),
          level: 3, // 지도의 레벨(확대, 축소 정도)
        };

        const map = new window.kakao.maps.Map(container, options);

        const marker = new window.kakao.maps.Marker({
          // 지도 중심좌표에 마커를 생성합니다
          position: map.getCenter(),
        });
        marker.setMap(map);

        window.kakao.maps.event.addListener(map, "click");
      });
    };
  });

  return (
    <>
      <MarketDetailPresenter
        data={data}
        onClickMoveToPage={onClickMoveToPage}
        onClickBuy={onClickBuy}
        onClickDelete={onClickDelete}
        onClickPickCount={onClickPickCount}
      />
    </>
  );
}
