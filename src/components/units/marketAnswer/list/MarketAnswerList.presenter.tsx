import InfiniteScroll from "react-infinite-scroller";
import { IMarketAnswerListPresenterProps } from "./MarketAnswerList.types";
import MarketAnswerListItemPresenter from "./MarketAnswerListItem.presenter";
export default function MarketAnswerListPresenter(
  props: IMarketAnswerListPresenterProps
) {
  return (
    <>
      <InfiniteScroll pageStart={0} loadMore={props.onLoadMore} hasMore={true}>
        {props?.data ? (
          props.data?.fetchUseditemQuestionAnswers.map((el: any) => (
            <MarketAnswerListItemPresenter
              key={el._id}
              el={el}
            />
          ))
        ) : (
          <></>
        )}
      </InfiniteScroll>
    </>
  );
}
