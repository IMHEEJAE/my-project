import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { MouseEvent, useState, ChangeEvent } from "react";
import {
  IMutation,
  IMutationDeleteBoardCommentArgs,
} from "../../../../commons/types/generated/types";
import {
  FETCH_BOARD_COMMENTS,
  DELETE_BOARD_COMMENT,
} from "./BoardCommentList.queries";
import * as S from "./BoardCommentList.styles";
import { getDate } from "../../../../commons/utils/utils";
import { BoardCommentListPresenterItemProps } from "./BoardCommentList.type";
import BoardCommentWriteContainer from "../write/BoardCommentWrite.container";
export default function BoardCommentListItemPresenter(
  props: BoardCommentListPresenterItemProps
) {
  const router = useRouter();
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [myPassword, setMyPassword] = useState("");
  const [myBoardCommentId, setMyBoardCommentId] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [deleteBoardComment] = useMutation<
    Pick<IMutation, "deleteBoardComment">,
    IMutationDeleteBoardCommentArgs
  >(DELETE_BOARD_COMMENT);

  const handleCancel = (event: MouseEvent<HTMLElement>) => {
    setIsOpenDeleteModal(false);
  };
  const onClickDeleteModal = (event: MouseEvent<HTMLElement>) => {
    if (!(event.target instanceof HTMLImageElement)) return;
    setMyBoardCommentId(event.target.id);
    setIsOpenDeleteModal(true);
  };

  const onClickDelete = async (event: MouseEvent<HTMLButtonElement>) => {
    try {
      await deleteBoardComment({
        variables: {
          boardCommentId: myBoardCommentId,
          password: myPassword,
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
      if (error instanceof Error) {
        alert(error.message);
      }
    }
  };
  const onChangeDeletePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setMyPassword(event.target.value);
  };

  const onClickUpdate = () => {
    setIsEdit(true);
  };
  return (
    <>
      {isOpenDeleteModal && (
        <S.PasswordModal
          visible={true}
          onOk={onClickDelete}
          onCancel={handleCancel}
        >
          <div>비밀번호 입력: </div>
          <S.PasswordInput type="password" onChange={onChangeDeletePassword} />
        </S.PasswordModal>
      )}
      {!isEdit && (
        <S.ItemWrapper>
          <S.FlexWrapper>
            <S.Avatar
              src={
                props.el?.user?.picture
                  ? `https://storage.googleapis.com/${props.el.user.picture}`
                  : "/images/avatar.png"
              }
            />
            <S.MainWrapper>
              <S.WriterWrapper>
                <S.Writer>{props.el?.writer}</S.Writer>
                <S.Star value={props.el?.rating} disabled />
              </S.WriterWrapper>
              <S.Contents>{props.el?.contents}</S.Contents>
            </S.MainWrapper>
            <S.OptionWrapper>
              <S.UpdateIcon
                src="/images/icon/icon_update.png"
                onClick={onClickUpdate}
              />
              <S.DeleteIcon
                id={props.el?._id}
                src="/images/icon/icon_delete.png"
                onClick={onClickDeleteModal}
              />
            </S.OptionWrapper>
          </S.FlexWrapper>
          <S.DateString>{getDate(props.el?.createdAt)}</S.DateString>
        </S.ItemWrapper>
      )}

      {isEdit && (
        <BoardCommentWriteContainer
          isEdit={true}
          setIsEdit={setIsEdit}
          el={props.el}
        />
      )}
    </>
  );
}
