import { useState } from "react";
import MarketCommentWritePresenter from "./MarketCommentWrite.presenter";
import { IMarketCommentWriteContainerProps } from "./MarketCommentWrite.types";
import { useMutation } from "@apollo/client";
import {
  CREATE_USEDITEM_QUESTION,
  UPDATE_USEDITEM_QUESTION,
} from "./MarketCommentWrite.queries";
import { useRouter } from "next/router";
import { FETCH_USEDITEM_QUESTIONS } from "../list/MarketCommentList.queries";

export default function MarketCommentWriteContainer(
  props: IMarketCommentWriteContainerProps
) {
  const router = useRouter();
  const [contents, setContents] = useState("");
  const [createUseditemQuestion] = useMutation(CREATE_USEDITEM_QUESTION);
  const [updateUseditemQuestion] = useMutation(UPDATE_USEDITEM_QUESTION);

  const onChangeContents = (event: any) => {
    setContents(event.target.value);
  };

  const onClickSubmitComment = async () => {
    try {
      await createUseditemQuestion({
        variables: {
          useditemId: String(router.query.marketId),
          createUseditemQuestionInput: {
            contents,
          },
        },
        refetchQueries: [
          {
            query: FETCH_USEDITEM_QUESTIONS,
            variables: { useditemId: String(router.query.marketId) },
          },
        ],
      });
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };
  const onClickUpdateComment = async () => {
    try {
      await updateUseditemQuestion({
        variables: {
          updateUseditemQuestionInput: {
            contents,
          },
          useditemQuestionId: props.el?._id,
        },
        refetchQueries: [
          {
            query: FETCH_USEDITEM_QUESTIONS,
            variables: { useditemId: String(router.query.marketId) },
          },
        ],
      });
      props.setIsQuestionEdit?.(false);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };
  const onClickCancel = () => {
    props.setIsQuestionEdit?.(false);
  };
  return (
    <>
      <MarketCommentWritePresenter
        el={props.el}
        isQuestionEdit={props.isQuestionEdit}
        contents={contents}
        onChangeContents={onChangeContents}
        onClickSubmitComment={onClickSubmitComment}
        onClickUpdateComment={onClickUpdateComment}
        onClickCancel={onClickCancel}
      />
    </>
  );
}
