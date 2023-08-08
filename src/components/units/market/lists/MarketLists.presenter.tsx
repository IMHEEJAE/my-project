import * as S from "./MarketLists.styles";
import type { TabsProps } from "antd";
import SearchBar from "../../../commons/search/searchBar/SearchBar";
import { IMarketPresenterProps } from "./MarketLists.types";
import { v4 as uuidv4 } from "uuid";
import SearchBar02 from "../../../commons/search/searchBar02/SearchBar02";
export default function MarketsListsPresenter(props: IMarketPresenterProps) {
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: `판매중상품`,
      children: (
        <>
          <SearchBar
            onChangeSearch={props.onChangeSearch}
            placeholder="판매중상품 검색"
          />
          <S.List>
            <S.ScrollWrap>
              <S.InfiniScroll
                pageStart={0}
                loadMore={props.onLoadMoreSoldOutFalse}
                hasMore={true}
                useWindow={false}
              >
                {props.SoldOutFalseData ? (
                  props.SoldOutFalseData?.fetchUseditems.map((el: any) => (
                    <S.ListItem
                      id={el._id}
                      key={el._id}
                      onClick={props.onClickMoveToPage(`/markets/${el._id}`)}
                    >
                      <S.ListLeft>
                        <S.Image
                          src={
                            el?.images[0]
                              ? `https://storage.googleapis.com/${el?.images[0]}`
                              : "/images/no_image.png"
                          }
                        />
                        <S.ContentWrapper>
                          <S.Content>
                            <S.ItemTitle>
                              {el.name
                                .replaceAll(
                                  props.keyword,
                                  `!@#$%${props.keyword}!@#$%`
                                )
                                .split("!@#$%")
                                .map((el: any) => (
                                  <S.StrongText
                                    key={uuidv4()}
                                    isMatched={props.keyword === el}
                                  >
                                    {el}
                                  </S.StrongText>
                                ))}
                            </S.ItemTitle>
                            {/* <S.Desc>{el.remarks}</S.Desc> */}
                            {/* <S.Tags>{el.tags}</S.Tags> */}
                            <S.MarketPrice>
                              {el.price.toLocaleString("ko-KR")}원
                            </S.MarketPrice>
                          </S.Content>
                          <S.SellerWrap>
                            <S.Seller>
                              <S.Avatar
                                src={
                                  el?.seller?.picture
                                    ? `https://storage.googleapis.com/${el?.seller?.picture}`
                                    : "/images/avatar.png"
                                }
                              />
                              {el.seller.name}
                            </S.Seller>
                            <S.PickCount>
                              <S.LickCount />
                              {el.pickedCount}
                            </S.PickCount>
                          </S.SellerWrap>{" "}
                        </S.ContentWrapper>
                      </S.ListLeft>
                    </S.ListItem>
                  ))
                ) : (
                  <></>
                )}
              </S.InfiniScroll>
            </S.ScrollWrap>
          </S.List>
        </>
      ),
    },
    {
      key: "2",
      label: `판매된상품`,
      children: (
        <>
          <SearchBar02
            onChangeSearch02={props.onChangeSearch02}
            placeholder="판매된상품 검색"
          />
          <S.List>
            <S.ScrollWrap>
              <S.InfiniScroll
                pageStart={0}
                loadMore={props.onLoadMoreSoldOutTrue}
                hasMore={true}
                useWindow={false}
              >
                {props.SoldOutTrueData ? (
                  props.SoldOutTrueData?.fetchUseditems.map((el: any) => (
                    <S.ListItem
                      id={el._id}
                      key={el._id}
                      onClick={props.onClickMoveToPage(`/markets/${el._id}`)}
                    >
                      <S.ListLeft>
                        <S.Image
                          src={
                            el?.images[0]
                              ? `https://storage.googleapis.com/${el?.images[0]}`
                              : "/images/no_image.png"
                          }
                        />
                        <S.ContentWrapper>
                          <S.Content>
                            <S.ItemTitle>
                              {el.name
                                .replaceAll(
                                  props.keyword02,
                                  `!@#$%${props.keyword02}!@#$%`
                                )
                                .split("!@#$%")
                                .map((el: any) => (
                                  <S.StrongText
                                    key={uuidv4()}
                                    isMatched={props.keyword02 === el}
                                  >
                                    {el}
                                  </S.StrongText>
                                ))}
                            </S.ItemTitle>
                            {/* <S.Desc>{el.remarks}</S.Desc> */}
                            {/* <S.Tags>{el.tags}</S.Tags> */}
                            <S.MarketPrice>
                              {el.price.toLocaleString("ko-KR")}원
                            </S.MarketPrice>
                          </S.Content>
                          <S.SellerWrap>
                            <S.Seller>
                              <S.Avatar
                                src={
                                  el?.seller?.picture
                                    ? `https://storage.googleapis.com/${el?.seller?.picture}`
                                    : "/images/avatar.png"
                                }
                              />
                              {el.seller.name}
                            </S.Seller>
                            <S.PickCount>
                              <S.LickCount />
                              {el.pickedCount}
                            </S.PickCount>
                          </S.SellerWrap>{" "}
                        </S.ContentWrapper>
                      </S.ListLeft>
                    </S.ListItem>
                  ))
                ) : (
                  <></>
                )}
              </S.InfiniScroll>
            </S.ScrollWrap>
          </S.List>
        </>
      ),
    },
  ];
  return (
    <>
      <S.Wrapper>
        <S.MainWrap>
          <S.BestWrap>
            <S.MainTitle>베스트 상품</S.MainTitle>
            <S.BestCard>
              {props.BestItemData?.fetchUseditemsOfTheBest.map((el: any) => (
                <S.CardBox
                  key={el._id}
                  hoverable
                  id={el._id}
                  onClick={props.onClickDetail}
                >
                  <S.CardImgWrap>
                    {el.images
                      .slice(0, 1)
                      ?.filter((el: string) => el)
                      .map((el: string) => (
                        <S.CardImg
                          key={el}
                          src={`https://storage.googleapis.com/${el}`}
                        />
                      ))}
                  </S.CardImgWrap>
                  <S.CardContent>
                    <S.TopWrap>
                      <S.Title>{el.name}</S.Title>
                      <S.Remark>{el.remarks}</S.Remark>
                    </S.TopWrap>
                    <S.BottomWrap>
                      <S.Price>{el.price.toLocaleString()}원</S.Price>
                      <S.LickBox>
                        <S.LickIcon />
                        <S.LickCountBest>{el.pickedCount}</S.LickCountBest>
                      </S.LickBox>
                    </S.BottomWrap>
                  </S.CardContent>
                </S.CardBox>
              ))}
            </S.BestCard>
          </S.BestWrap>
          <S.ListWrap>
            <S.ListTitle>상품 리스트</S.ListTitle>
            <S.Tabss defaultActiveKey="1" items={items} />
            <S.Bottom>
              <S.EditBtn onClick={props.onClickMoveToPage(`./markets/new`)}>
                <S.EditIcon src="/images/icon/icon_edit.svg" /> 게시물 등록하기
              </S.EditBtn>
            </S.Bottom>
          </S.ListWrap>
        </S.MainWrap>
      </S.Wrapper>
    </>
  );
}
