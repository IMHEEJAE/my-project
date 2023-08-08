import { useQuery } from "@apollo/client";
import { FETCH_USEDITEM_QUESTIONS_ANSWERS } from "./MarketAnswerList.queries";
import { IMarketAnswerListContainerProps } from "./MarketAnswerList.types";
import MarketAnswerListPresenter from "./MarketAnswerList.presenter";
import {
  IQuery,
  IQueryFetchUseditemQuestionAnswersArgs,
} from "../../../../commons/types/generated/types";

export default function MarketAnswerListContainer(
  props: IMarketAnswerListContainerProps
) {
  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchUseditemQuestionAnswers">,
    IQueryFetchUseditemQuestionAnswersArgs
  >(FETCH_USEDITEM_QUESTIONS_ANSWERS, {
    variables: {
      useditemQuestionId: props.el?._id,
    },
  });

  const onLoadMore = () => {
    if (data === undefined) return;
    void fetchMore({
      variables: {
        page: Math.ceil(data?.fetchUseditemQuestionAnswers.length / 10) + 1,
      },
      updateQuery: (prev: any, { fetchMoreResult }) => {
        return {
          fetchUseditemQuestionAnswers: [
            ...prev.fetchUseditemQuestionAnswers,
            ...fetchMoreResult.fetchUseditemQuestionAnswers,
          ],
        };
      },
    });
  };

  return (
    <>
      <MarketAnswerListPresenter data={data} onLoadMore={onLoadMore} />
    </>
  );
}
