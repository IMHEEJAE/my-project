import { ApolloQueryResult } from "@apollo/client";
import {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from "../../../../commons/types/generated/types";
import { MouseEvent } from "react";

export interface IBoardListPresenterProps {
  data?: any;
  dataBest?: Pick<IQuery, "fetchBoardsOfTheBest">;
  onChangeImageError: (event: { target: { src: string } }) => void;
  onClickDetail: (event: MouseEvent<HTMLDivElement>) => void;
  onClickMoveToPage: (path: string) => () => void;
  refetch: (
    variables?: Partial<IQueryFetchBoardsArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;
  refetchBoardsCount: (
    variables: Partial<IQueryFetchBoardsCountArgs>
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoardsCount">>>;
  count?: number;
  onChangeKeyword: (value: string) => void;
  keyword: string;
}

export interface IMatched {
  isMatched: boolean;
}
