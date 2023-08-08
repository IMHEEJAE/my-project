import { useState } from "react";
import * as S from "./PointModal.styles";
import { IPointModalProps } from "./PointModal.types";
import Head from "next/head";
import { useMutation, useQuery } from "@apollo/client";
import { CREATE_POINT_TRANSACTION_OF_LOADING } from "./PointModal.queries";
import { Modal } from "antd";
import { IQuery } from "../../../../commons/types/generated/types";
import { FETCH_USER_LOGGED_IN } from "../../layout/header/LayoutHeader.queries";
declare const window: typeof globalThis & {
  IMP: any;
};

export default function PointModal(props: IPointModalProps) {
  const [myPoint, setMyPoint] = useState<any>();

  const [createPointTransactionOfLoading] = useMutation(
    CREATE_POINT_TRANSACTION_OF_LOADING
  );
  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);

  const onChangeMyPoint = (event: any) => {
    setMyPoint(event.target.value);
  };

  const onClickPayment = (): void => {
    if (myPoint === "" || isNaN(myPoint)) {
      Modal.error({ content: "숫자를 입력해주세요!" });
      return;
    }
    if (myPoint < 100) {
      Modal.error({ content: "100원 이상 결제 가능합니다" });
      return;
    }

    const IMP = window.IMP; // 생략 가능
    IMP.init("imp49910675"); // 빽엔드 2차확인.

    IMP.request_pay(
      {
        // param
        pg: "kakaopay",
        pay_method: "card",
        // 주문번호
        // merchant_uid: "ORD20180131-0000011",
        name: `포인트 ${myPoint} 원`,
        amount: myPoint,
        // m_redirect_url: "http://localhost:3000", // 모바일 결제 시 페이지 주소가 바뀜. 결제 끝나고 돌아 갈 주소
      },
      async (rsp: any) => {
        if (rsp.success === true) {
          // 결제 성공 시 로직,
          // 백엔드에 결제관련 데이터 넘겨주기 => 즉, 뮤테이션 실행하기기
          await createPointTransactionOfLoading({
            variables: {
              impUid: rsp.imp_uid,
            },
            refetchQueries: [{ query: FETCH_USER_LOGGED_IN }],
          });
          Modal.success({ content: `포인트 ${myPoint} 원이 충전되었습니다` });
          console.log(rsp);
        } else {
          // 결제 실패 시 로직,
          Modal.error({ content: `결제를 실패하였습니다.` });
        }
      }
    );
  };

  return (
    <>
      <Head>
        <script src="https://cdn.iamport.kr/v1/iamport.js"></script>
      </Head>
      <S.PointWrap>
        <S.PointIcon src="/images/icon/icon_point.svg" />
        <S.PointTitle>충전할 포인트를 입력하세요</S.PointTitle>
        <span>
          현재 보유 중 인 포인트는{" "}
          {data?.fetchUserLoggedIn.userPoint?.amount.toLocaleString("ko-KR")} 원
          입니다.
        </span>
        <S.PointInput
          type="text"
          placeholder="금액을 입력하세요."
          onChange={onChangeMyPoint}
        />
        <S.PointBtn onClick={onClickPayment} mypoint={myPoint}>
          충전하기
        </S.PointBtn>
      </S.PointWrap>
    </>
  );
}
