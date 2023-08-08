import { IQuery } from "../../../../commons/types/generated/types";

export interface IMarketAnswerListContainerProps {
  el?: any;
}
export interface IMarketAnswerListPresenterProps {
  data: Pick<IQuery, "fetchUseditemQuestionAnswers"> | undefined;
  onLoadMore: () => void;
}
export interface IMarketAnswerListItemPresenterProps {
  el: any;
}
