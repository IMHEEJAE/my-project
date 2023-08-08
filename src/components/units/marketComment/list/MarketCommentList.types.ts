import { IQuery } from "../../../../commons/types/generated/types";

export interface IMarketCommentListContainerProps {
  el?: any;
}
export interface IMarketCommentListPresenterProps {
  data?: Pick<IQuery, "fetchUseditemQuestions">;
  onLoadMore: () => void;
}
export interface MarketCommentListPresenterItemProps {
  el: any;
}
