import { Tooltip } from "antd";
import * as S from "./MarketDetail.styles";
import Dompurify from "dompurify";
import { MarketDetailPresenterProps } from "./MarketDetail.types";
import { getDate } from "../../../../commons/utils/utils";
import { useRouter } from "next/router";
import MarketCommentWriteContainer from "../../marketComment/write/MarketCommentWrite.container";
import MarketCommentListContainer from "../../marketComment/list/MarketCommentList.container";

export default function MarketDetailPresenter(
  props: MarketDetailPresenterProps
) {
  const router = useRouter();
  return (
    <>
      <S.Wrapper>
        <S.MarketWrap>
          <S.Top>
            <S.SideA>
              <S.User>
                <S.UserLeft>
                  <S.Avatar
                    src={
                      props.data?.fetchUseditem.seller?.picture
                        ? `https://storage.googleapis.com/${props.data?.fetchUseditem.seller?.picture}`
                        : "/images/avatar.png"
                    }
                  />
                  <S.AvatarInfo>
                    <S.Writer>
                      {props.data?.fetchUseditem.seller?.name}
                    </S.Writer>
                    <S.AvatarDate>
                      {getDate(props.data?.fetchUseditem.createdAt)}
                    </S.AvatarDate>
                  </S.AvatarInfo>
                </S.UserLeft>
                <S.UserRight>
                  <Tooltip
                    placement="topRight"
                    title={`${props.data?.fetchUseditem.useditemAddress?.address} ${props.data?.fetchUseditem.useditemAddress?.addressDetail}`}
                    trigger={"click"}
                  >
                    <S.IconLocation src="/images/icon/icon_location.svg" />
                  </Tooltip>
                </S.UserRight>
              </S.User>
              <S.ContTop>
                <S.Cont>
                  <S.Title>{props.data?.fetchUseditem.name}</S.Title>
                  <S.Remark>{props.data?.fetchUseditem.remarks}</S.Remark>{" "}
                  <S.Tags>{props.data?.fetchUseditem.tags}</S.Tags>
                  <S.Price>
                    {props.data?.fetchUseditem.price.toLocaleString("ko-KR")}원
                  </S.Price>
                </S.Cont>
                <S.LikeWrap>
                  <S.LikeIcon onClick={props.onClickPickCount} />
                  <S.LikeCount>
                    {props.data?.fetchUseditem.pickedCount}
                  </S.LikeCount>
                </S.LikeWrap>
              </S.ContTop>

              {process.browser && (
                <S.Content
                  dangerouslySetInnerHTML={{
                    __html: Dompurify.sanitize(
                      props.data?.fetchUseditem.contents
                    ),
                  }}
                />
              )}
              <S.MapWrap>
                <S.Map id="map"></S.Map>
              </S.MapWrap>
              <S.ButtonWrap>
                <S.Button onClick={props.onClickMoveToPage(`/markets`)}>
                  목록으로
                </S.Button>
                <S.Button onClick={props.onClickBuy}>구매하기</S.Button>
                <S.Button
                  onClick={props.onClickMoveToPage(
                    `/markets/${router.query.marketId}/edit`
                  )}
                >
                  수정하기
                </S.Button>
                <S.Button onClick={props.onClickDelete}>삭제하기</S.Button>
              </S.ButtonWrap>
            </S.SideA>
            <S.Center>
              <S.ImgWrap>
                {props.data?.fetchUseditem.images
                  ?.filter((el: string) => el)
                  .map((el: string) => (
                    <S.Img
                      key={el}
                      src={`https://storage.googleapis.com/${el}`}
                    />
                  ))}
              </S.ImgWrap>
            </S.Center>
          </S.Top>
          <S.SideB>
            <MarketCommentWriteContainer />
            <MarketCommentListContainer />
          </S.SideB>
        </S.MarketWrap>
      </S.Wrapper>
    </>
  );
}
