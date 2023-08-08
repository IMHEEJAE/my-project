import { TabsProps } from "antd";
import { getDate } from "../../../../../commons/utils/utils";
import * as S from "./MypagePoint.styles";
import { IMypagePointPresenterProps } from "./MypagePoint.types";
export default function MypagePointPresenter(
  props: IMypagePointPresenterProps
) {
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: `전체내역`,
      children: (
        <S.Table>
          <S.Thead>
            <S.Tr>
              <S.TheadTh>날짜</S.TheadTh>
              <S.TheadTh>내용</S.TheadTh>
              <S.TheadTh>거래 및 충전 내역</S.TheadTh>
              <S.TheadTh>잔액</S.TheadTh>
            </S.Tr>
          </S.Thead>
          <S.Tbody>
            {props.data?.fetchPointTransactions.map((el: any, index: any) => (
              <S.Tr key={el._id}>
                <S.TbodyTh>{getDate(el.createdAt)}</S.TbodyTh>
                {el.amount > 0 ? (
                  <S.TbodyThBlue>{el.status}</S.TbodyThBlue>
                ) : (
                  <S.TbodyThRed>{el.status}</S.TbodyThRed>
                )}
                {el.amount > 0 ? (
                  <S.TbodyThBlue>
                    {el.amount.toLocaleString("ko-KR")}원
                  </S.TbodyThBlue>
                ) : (
                  <S.TbodyThRed>
                    {el.amount.toLocaleString("ko-KR")}원
                  </S.TbodyThRed>
                )}
                <S.TbodyTh>{el.balance.toLocaleString("ko-KR")}원</S.TbodyTh>
              </S.Tr>
            ))}
          </S.Tbody>
        </S.Table>
      ),
    },
    {
      key: "2",
      label: `충전내역`,
      children: (
        <S.Table>
          <S.Thead>
            <S.Tr>
              <S.TheadTh>충전일</S.TheadTh>
              <S.TheadTh>결제 ID</S.TheadTh>
              <S.TheadTh>충전내역</S.TheadTh>
              <S.TheadTh>충전 후 잔액</S.TheadTh>
            </S.Tr>
          </S.Thead>
          <S.Tbody>
            {props.dataLoading?.fetchPointTransactionsOfLoading.map(
              (el: any, index: any) => (
                <S.Tr key={el._id}>
                  <S.TbodyTh>{getDate(el.createdAt)}</S.TbodyTh>
                  <S.TbodyTh>{el.impUid}</S.TbodyTh>
                  <S.TbodyThBlue>
                    {el.amount.toLocaleString("ko-KR")}원
                  </S.TbodyThBlue>
                  <S.TbodyTh>{el.balance.toLocaleString("ko-KR")}원</S.TbodyTh>
                </S.Tr>
              )
            )}
          </S.Tbody>
        </S.Table>
      ),
    },
    {
      key: "3",
      label: `구매내역`,
      children: (
        <S.Table>
          <S.Thead>
            <S.Tr>
              <S.TheadTh>거래일</S.TheadTh>
              <S.TheadTh>상품명</S.TheadTh>
              <S.TheadTh>거래내역</S.TheadTh>
              <S.TheadTh>거래 후 잔액</S.TheadTh>
            </S.Tr>
          </S.Thead>
          <S.Tbody>
            {props.dataBuying?.fetchPointTransactionsOfBuying.map(
              (el: any, index: any) => (
                <S.Tr key={el._id}>
                  <S.TbodyTh>{getDate(el.createdAt)}</S.TbodyTh>
                  <S.TbodyTh>{el.useditem.name}</S.TbodyTh>
                  <S.TbodyThRed>
                    {el.amount.toLocaleString("ko-KR")}원
                  </S.TbodyThRed>
                  <S.TbodyTh>{el.balance.toLocaleString("ko-KR")}원</S.TbodyTh>
                </S.Tr>
              )
            )}
          </S.Tbody>
        </S.Table>
      ),
    },
    {
      key: "4",
      label: `판매내역`,
      children: (
        <S.Table>
          <S.Thead>
            <S.Tr>
              <S.TheadTh>거래일</S.TheadTh>
              <S.TheadTh>상품명</S.TheadTh>
              <S.TheadTh>거래내역</S.TheadTh>
              <S.TheadTh>거래 후 잔액</S.TheadTh>
            </S.Tr>
          </S.Thead>
          <S.Tbody>
            {props.dataSelling?.fetchPointTransactionsOfSelling.map(
              (el: any, index: any) => (
                <S.Tr key={el._id}>
                  <S.TbodyTh>{getDate(el.createdAt)}</S.TbodyTh>
                  <S.TbodyTh>{el.useditem.name}</S.TbodyTh>
                  <S.TbodyThBlue>
                    {el.amount.toLocaleString("ko-KR")}원
                  </S.TbodyThBlue>
                  <S.TbodyTh>{el.balance.toLocaleString("ko-KR")}원</S.TbodyTh>
                </S.Tr>
              )
            )}
          </S.Tbody>
        </S.Table>
      ),
    },
  ];
  return (
    <>
      <S.Wrapper>
        <S.Tab defaultActiveKey="1" items={items} />
      </S.Wrapper>
    </>
  );
}
