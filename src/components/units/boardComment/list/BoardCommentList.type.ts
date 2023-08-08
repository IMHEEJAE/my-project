import { IQuery } from "../../../../commons/types/generated/types";
export interface BoardCommentListPresenterProps {
  data?: Pick<IQuery, "fetchBoardComments">;
  onLoadMore: () => void;
}

export interface BoardCommentListPresenterItemProps {
  el: any;
}
