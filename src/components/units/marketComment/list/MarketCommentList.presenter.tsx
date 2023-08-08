// import * as S from "./MarketCommentList.styles";
import InfiniteScroll from "react-infinite-scroller";
import { IMarketCommentListPresenterProps } from "./MarketCommentList.types";
import MarketCommentListItemPresenter from "./MarketCommentListItem.presenter";
export default function MarketCommentListPresenter(
  props: IMarketCommentListPresenterProps
) {
  return (
    <>
      <InfiniteScroll pageStart={0} loadMore={props.onLoadMore} hasMore={true}>
        {props?.data ? (
          props.data?.fetchUseditemQuestions.map((el) => (
            <MarketCommentListItemPresenter key={el._id} el={el} />
          ))
        ) : (
          <></>
        )}
      </InfiniteScroll>
    </>
  );
}
