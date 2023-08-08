import { useState } from "react";
import { IMarketAnswerListItemPresenterProps } from "./MarketAnswerList.types";
import * as S from "./MarketAnswerList.styles";
import MarketAnswerWriteContainer from "../write/MarketAnswerWrite.container";
import { Modal } from "antd";
import { useMutation } from "@apollo/client";
import {
  DELETE_USEDITEM_QUESTION_ANSWER,
  FETCH_USEDITEM_QUESTIONS_ANSWERS,
} from "./MarketAnswerList.queries";
import {
  IMutation,
  IMutationDeleteUseditemQuestionAnswerArgs,
} from "../../../../commons/types/generated/types";
import { useRouter } from "next/router";
export default function MarketAnswerListItemPresenter(
  props: IMarketAnswerListItemPresenterProps
) {
  const router = useRouter();
  const [isAnswerEdit, setIsAnswerEdit] = useState(false);
  const [deleteUseditemQuestionAnswer] = useMutation<
    Pick<IMutation, "deleteUseditemQuestionAnswer">,
    IMutationDeleteUseditemQuestionAnswerArgs
  >(DELETE_USEDITEM_QUESTION_ANSWER);
  const onClickEditAnswer = () => {
    setIsAnswerEdit((prev) => !prev);
  };
  const onClickDelete = async () => {
    try {
      await deleteUseditemQuestionAnswer({
        variables: {
          useditemQuestionAnswerId: props.el._id,
        },
        refetchQueries: [
          {
            query: FETCH_USEDITEM_QUESTIONS_ANSWERS,
            variables: {
              useditemQuestionId: props.el?.useditemQuestion._id,
            },
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
      {!isAnswerEdit && (
        <S.ItemWrapper>
          <S.ImgWrapper>
            <S.Arrow src="/images/icon/icon_answer.svg" />
            <S.Avatar
              src={
                props.el?.user?.picture
                  ? `https://storage.googleapis.com/${props.el.user.picture}`
                  : "/images/avatar.png"
              }
            />
          </S.ImgWrapper>
          <S.FlexWrapper>
            <S.WriterWrapper>
              <S.UserName>{props.el?.user?.name}</S.UserName>
              <S.ButtonWrapper>
                <S.Button
                  onClick={onClickEditAnswer}
                  src="/images/icon/icon_update.png"
                />
                <S.ButtonDelete
                  onClick={onClickDelete}
                  src="/images/icon/icon_delete.png"
                />
              </S.ButtonWrapper>
            </S.WriterWrapper>{" "}
            
              <S.Contents>{props.el?.contents}</S.Contents>
           
          </S.FlexWrapper>
        </S.ItemWrapper>
      )}

      {isAnswerEdit && (
        <MarketAnswerWriteContainer
          isAnswerEdit={isAnswerEdit}
          setIsAnswerEdit={setIsAnswerEdit}
          el={props.el}
          setIsOpenAnswer={undefined}
        />
      )}
    </>
  );
}
