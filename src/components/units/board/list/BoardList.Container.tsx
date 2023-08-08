import BoardListPresenter from "./BoardList.presenter";
import { useQuery } from "@apollo/client";
import {
  FETCH_BOARDS,
  FETCH_BOARDS_COUNT,
  FETCH_BOARDS_OF_THE_BEST,
} from "./BoardList.queries";
import { MouseEvent, useState } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from "../../../../commons/types/generated/types";
import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";
import { useRouter } from "next/router";

export default function BoardListContainer() {
  const router = useRouter();
  const { data: dataBest } = useQuery<Pick<IQuery, "fetchBoardsOfTheBest">>(
    FETCH_BOARDS_OF_THE_BEST
  );

  const onChangeImageError = (event: { target: { src: string } }) => {
    event.target.src = `../../../../images/nodata_image.png`;
  };

  const onClickDetail = (event: MouseEvent<HTMLDivElement>) => {
    void router.push(`./boards/${event.currentTarget.id}`);
  };
  const [keyword, setKeyword] = useState("");
  const { onClickMoveToPage } = useMoveToPage();
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  const { data: dataBoardsCount, refetch: refetchBoardsCount } = useQuery<
    Pick<IQuery, "fetchBoardsCount">,
    IQueryFetchBoardsCountArgs
  >(FETCH_BOARDS_COUNT);

  const onChangeKeyword = (value: string) => {
    setKeyword(value);
  };
  return (
    <>
      <BoardListPresenter
        data={data}
        dataBest={dataBest}
        onChangeImageError={onChangeImageError}
        onClickDetail={onClickDetail}
        refetch={refetch}
        refetchBoardsCount={refetchBoardsCount}
        onClickMoveToPage={onClickMoveToPage}
        count={dataBoardsCount?.fetchBoardsCount}
        onChangeKeyword={onChangeKeyword}
        keyword={keyword}
      />
    </>
  );
}
