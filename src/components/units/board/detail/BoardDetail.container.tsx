import BoardDetailPresenter from "./BoardDetail.presenter";
import {
  FETCH_BOARD,
  LIKE_BOARD,
  DISLIKE_BOARD,
  DELETE_BOARD,
} from "./BoardDetail.queries";
import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { MouseEvent } from "react";
import {
  IMutation,
  IMutationDeleteBoardArgs,
  IMutationDislikeBoardArgs,
  IMutationLikeBoardArgs,
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../../commons/types/generated/types";
import { FETCH_BOARDS } from "../list/BoardList.queries";

export default function BoardDetailContainer() {
  const [likeBoard] = useMutation<
    Pick<IMutation, "likeBoard">,
    IMutationLikeBoardArgs
  >(LIKE_BOARD);
  const [dislikeBoard] = useMutation<
    Pick<IMutation, "dislikeBoard">,
    IMutationDislikeBoardArgs
  >(DISLIKE_BOARD);
  const [deleteBoard] = useMutation<
    Pick<IMutation, "deleteBoard">,
    IMutationDeleteBoardArgs
  >(DELETE_BOARD);
  const router = useRouter();
  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    {
      variables: { boardId: String(router.query.boardId) },
    }
  );
  const onClickBoardsList = () => {
    void router.push(`/boards`);
  };
  const onClickBoardEdit = () => {
    if (typeof router.query.boardId !== "string") return;
    void router.push(`/boards/${router.query.boardId}/edit`);
  };
  const onClickDelete = async (event: MouseEvent<HTMLButtonElement>) => {
    try {
      await deleteBoard({
        variables: { boardId: String(router.query.boardId) },
        refetchQueries: [
          {
            query: FETCH_BOARDS,
            variables: { boardId: router.query.boardId },
          },
        ],
      });
      void router.push(`/boards`);
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
  };
  const onClickLike = () => {
    if (typeof router.query.boardId !== "string") return;
    void likeBoard({
      variables: { boardId: router.query.boardId },
      refetchQueries: [
        {
          query: FETCH_BOARD,
          variables: { boardId: router.query.boardId },
        },
      ],
    });
  };

  const onClickDislike = () => {
    if (typeof router.query.boardId !== "string") return;
    void dislikeBoard({
      variables: { boardId: router.query.boardId },
      refetchQueries: [
        {
          query: FETCH_BOARD,
          variables: { boardId: router.query.boardId },
        },
      ],
    });
  };

  return (
    <BoardDetailPresenter
      data={data}
      onClickBoardsList={onClickBoardsList}
      onClickBoardEdit={onClickBoardEdit}
      onClickLike={onClickLike}
      onClickDislike={onClickDislike}
      onClickDelete={onClickDelete}
    />
  );
}
