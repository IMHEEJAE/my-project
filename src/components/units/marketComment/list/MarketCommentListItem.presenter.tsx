import { useState } from "react";
import * as S from "./MarketCommentList.styles";
import { MarketCommentListPresenterItemProps } from "./MarketCommentList.types";
import { getDate } from "../../../../commons/utils/utils";
import MarketCommentWriteContainer from "../write/MarketCommentWrite.container";
import {
  DELETE_USEDITEM_QUESTION,
  FETCH_USEDITEM_QUESTIONS,
} from "./MarketCommentList.queries";
import { useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationDeleteUseditemQuestionArgs,
} from "../../../../commons/types/generated/types";
import MarketAnswerWriteContainer from "../../marketAnswer/write/MarketAnswerWrite.container";
import MarketAnswerListContainer from "../../marketAnswer/list/MarketAnswerList.container";
import { useRouter } from "next/router";
import { Modal } from "antd";
export default function MarketCommentListItemPresenter(
  props: MarketCommentListPresenterItemProps
) {
  const router = useRouter();
  const [isQuestionEdit, setIsQuestionEdit] = useState(false);
  const [isOpenAnswer, setIsOpenAnswer] = useState(false);
  const [deleteUseditemQuestion] = useMutation<
    Pick<IMutation, "deleteUseditemQuestion">,
    IMutationDeleteUseditemQuestionArgs
  >(DELETE_USEDITEM_QUESTION);
  const onClickAnswer = () => {
    setIsOpenAnswer((prev) => !prev);
  };
  const onClickUpdate = () => {
    setIsQuestionEdit((prev) => !prev);
  };
  const onClickDelete = async () => {
    try {
      await deleteUseditemQuestion({
        variables: {
          useditemQuestionId: props.el._id,
        },
        refetchQueries: [
          {
            query: FETCH_USEDITEM_QUESTIONS,
            variables: { useditemId: String(router.query.marketId) },
          },
        ],
      });
      Modal.success({ content: "문의를 삭제합니다." });
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };
  return (
    <>
      {!isQuestionEdit && (
        <>
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
                  <S.InfoWrapper>
                    <S.Writer>{props.el?.user?.name}</S.Writer>
                    <S.DateString>{getDate(props.el?.createdAt)}</S.DateString>
                  </S.InfoWrapper>
                  <S.OptionWrapper>
                    <S.AnswerIcon
                      src="/images/icon/icon_comment.svg"
                      onClick={onClickAnswer}
                    />
                    <S.UpdateIcon
                      src="/images/icon/icon_update.png"
                      onClick={onClickUpdate}
                    />
                    <S.DeleteIcon
                      id={props.el?._id}
                      src="/images/icon/icon_delete.png"
                      onClick={onClickDelete}
                    />
                  </S.OptionWrapper>
                </S.WriterWrapper>
                <S.Contents>{props.el?.contents}</S.Contents>
              </S.MainWrapper>
            </S.FlexWrapper>
          </S.ItemWrapper>
          <MarketAnswerListContainer el={props.el} />
        </>
      )}
      {isQuestionEdit && (
        <MarketCommentWriteContainer
          isQuestionEdit={isQuestionEdit}
          setIsQuestionEdit={setIsQuestionEdit}
          el={props.el}
        />
      )}

      {isOpenAnswer && (
        <MarketAnswerWriteContainer
          el={props.el}
          setIsOpenAnswer={setIsOpenAnswer} isAnswerEdit={false} setIsAnswerEdit={undefined}        />
      )}
    </>
  );
}
