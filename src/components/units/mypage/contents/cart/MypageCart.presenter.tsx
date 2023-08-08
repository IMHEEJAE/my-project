/* eslint-disable @typescript-eslint/restrict-plus-operands */
import { TabsProps } from "antd";
import { getDate } from "../../../../../commons/utils/utils";
import * as S from "./MypageCart.styles";
import { IMypageCartPresenterProps } from "./MypageCart.types";
export default function MypageCartPresenter(props: IMypageCartPresenterProps) {
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: `나의상품`,
      children: (
        <S.Table>
          <S.Thead>
            <S.Tr>
              <S.TheadNumber>번호</S.TheadNumber>
              <S.TheadTitle>상품명</S.TheadTitle>
              <S.TheadSold></S.TheadSold>
              <S.TheadPrice>판매가격</S.TheadPrice>
              <S.TheadDay>날짜</S.TheadDay>
            </S.Tr>
          </S.Thead>
          <S.Tbody>
            {props.data?.fetchUseditemsISold.map((el: any, index: any) => (
              <S.Tr key={el._id}>
                <S.TbodyNumber>{index + 1}</S.TbodyNumber>
                <S.TbodyTitle>{el.name}</S.TbodyTitle>
                <S.TbodySold>{el?.buyer?.name && "판매완료"}</S.TbodySold>
                <S.TbodyPrice>
                  {el.price.toLocaleString("ko-KR")}원
                </S.TbodyPrice>
                <S.TbodyDay>{getDate(el.createdAt)}</S.TbodyDay>
              </S.Tr>
            ))}
          </S.Tbody>
        </S.Table>
      ),
    },
    {
      key: "2",
      label: `마이찜`,
      children: (
        <S.Table>
          <S.Thead>
            <S.Tr>
              <S.TheadNumber>번호</S.TheadNumber>
              <S.TheadTitle>상품명</S.TheadTitle>
              <S.TheadSold></S.TheadSold>
              <S.TheadPrice>판매가격</S.TheadPrice>
              <S.TheadSeller>판매자</S.TheadSeller>
              <S.TheadDay>날짜</S.TheadDay>
            </S.Tr>
          </S.Thead>
          <S.Tbody>
            {props.dataPick?.fetchUseditemsIPicked.map(
              (el: any, index: any) => (
                <S.Tr key={el._id} id={el._id}>
                  <S.TbodyNumber>{index + 1}</S.TbodyNumber>
                  <S.TbodyTitle>{el.name}</S.TbodyTitle>
                  <S.TbodySold>{el?.buyer?.name && "판매완료"}</S.TbodySold>
                  <S.TbodyPrice>
                    {el.price.toLocaleString("ko-KR")}원
                  </S.TbodyPrice>
                  <S.TbodySeller>{el.seller.name}</S.TbodySeller>
                  <S.TbodyDay>{getDate(el.createdAt)}</S.TbodyDay>
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
