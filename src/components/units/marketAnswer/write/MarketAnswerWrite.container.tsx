import { useState } from "react";
import MarketAnswerWritePresenter from "./MarketAnswerWrite.presenter";
import { useMutation } from "@apollo/client";
import {
  CREATE_USEDITEM_QUESTION_ANSWER,
  UPDATE_USEDITEM_QUESTION_ANSWER,
} from "./MarketAnswerWrite.queries";
import { FETCH_USEDITEM_QUESTIONS_ANSWERS } from "../list/MarketAnswerList.queries";
import { IMarketAnswerWriteContainerProps } from "./MarketAnswerWrite.types";
import { Modal } from "antd";

export default function MarketAnswerWriteContainer(
  props: IMarketAnswerWriteContainerProps
) {
  const [contents, setContents] = useState("");
  const [createUseditemQuestionAnswer] = useMutation(
    CREATE_USEDITEM_QUESTION_ANSWER
  );
  const [updateUseditemQuestionAnswer] = useMutation(
    UPDATE_USEDITEM_QUESTION_ANSWER
  );
  const onChangeContents = (event: any) => {
    setContents(event?.target.value);
  };

  const onClickSubmitAnswer = async () => {
    try {
      await createUseditemQuestionAnswer({
        variables: {
          useditemQuestionId: props.el?._id,
          createUseditemQuestionAnswerInput: {
            contents,
          },
        },
        refetchQueries: [
          {
            query: FETCH_USEDITEM_QUESTIONS_ANSWERS,
            variables: { useditemQuestionId: props.el?._id },
          },
        ],
      });
      console.log(".....", props.setIsAnswerEdit);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };
  const onClickUpdateAnswer = async (event: any) => {
    try {
      await updateUseditemQuestionAnswer({
        variables: {
          updateUseditemQuestionAnswerInput: { contents },
          useditemQuestionAnswerId: event.target.id,
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
      Modal.success({ content: "답변 수정을 완료하였습니다." });
      props.setIsAnswerEdit?.(false);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };
  const onClickCancel = () => {
    props.setIsAnswerEdit?.(false);
  };
  return (
    <>
      <MarketAnswerWritePresenter
        contents={contents}
        onChangeContents={onChangeContents}
        onClickSubmitAnswer={onClickSubmitAnswer}
        onClickUpdateAnswer={onClickUpdateAnswer}
        isAnswerEdit={props.isAnswerEdit}
        el={props.el}
        onClickCancel={onClickCancel}
      />
    </>
  );
}
