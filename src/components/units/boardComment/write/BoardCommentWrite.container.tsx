import BoardCommentWritePresenter from "./BoardCommentWrite.presenter";
import { ChangeEvent, useState } from "react";
import { useMutation } from "@apollo/client/react";
import {
  CREATE_BOARD_COMMENT,
  UPDATE_BOARD_COMMENT,
} from "./BoardCommentWrite.queries";
import { useRouter } from "next/router";
import { FETCH_BOARD_COMMENTS } from "../list/BoardCommentList.queries";
import {
  IMutation,
  IMutationCreateBoardCommentArgs,
  IMutationUpdateBoardCommentArgs,
  IUpdateBoardCommentInput,
} from "../../../../commons/types/generated/types";
import { IBoardCommentWriteContainerProps } from "./BoardCommentWrite.type";

export default function BoardCommentWriteContainer(
  props: IBoardCommentWriteContainerProps
) {
  const router = useRouter();
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [contents, setContents] = useState("");
  const [star, setStar] = useState(0);

  const [createBoardComment] = useMutation<
    Pick<IMutation, "createBoardComment">,
    IMutationCreateBoardCommentArgs
  >(CREATE_BOARD_COMMENT);

  const [updateBoardComment] = useMutation<
    Pick<IMutation, "updateBoardComment">,
    IMutationUpdateBoardCommentArgs
  >(UPDATE_BOARD_COMMENT);

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);
  };
  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  const onChangeContents = (event: any) => {
    setContents(event.target.value);
  };
  const onClickSubmitComment = async () => {
    if (typeof router.query.boardId !== "string") return;
    if (!writer || !password || !contents) {
      alert("입력해주세요.");
    }
    if (writer && password && contents) {
      try {
        await createBoardComment({
          variables: {
            createBoardCommentInput: {
              writer,
              password,
              contents,
              rating: star,
            },
            boardId: router.query.boardId,
          },
          refetchQueries: [
            {
              query: FETCH_BOARD_COMMENTS,
              variables: {
                boardId: router.query.boardId,
              },
            },
          ],
        });
      } catch (error) {
        if (error instanceof Error) alert(error.message);
      }
    }
    setWriter("");
    setPassword("");
    setContents("");
  };
  const onClickUpdate = async () => {
    if (!contents) {
      alert("내용이 수정되지 않았습니다.");
      return;
    }
    if (!password) {
      alert("비밀번호가 입력되지 않았습니다.");
      return;
    }

    try {
      const updateBoardCommentInput: IUpdateBoardCommentInput = {};
      if (contents) updateBoardCommentInput.contents = contents;
      if (star !== props.el?.rating) updateBoardCommentInput.rating = star;

      if (typeof props.el?._id !== "string") return;
      await updateBoardComment({
        variables: {
          updateBoardCommentInput,
          password,
          boardCommentId: props.el?._id,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.boardId },
          },
        ],
      });
      props.setIsEdit?.(false);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };
  const onClickCancel = () => {
    props.setIsEdit?.(false);
  };
  return (
    <>
      <BoardCommentWritePresenter
        onClickUpdate={onClickUpdate}
        onChangeWriter={onChangeWriter}
        onChangePassword={onChangePassword}
        onChangeContents={onChangeContents}
        onClickSubmitComment={onClickSubmitComment}
        writer={writer}
        password={password}
        contents={contents}
        setStar={setStar}
        isEdit={props.isEdit}
        el={props.el}
        onClickCancel={onClickCancel}
      />
    </>
  );
}
