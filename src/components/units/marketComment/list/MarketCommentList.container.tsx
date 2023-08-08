import { useQuery } from "@apollo/client";
import MarketCommentListPresenter from "./MarketCommentList.presenter";
import { FETCH_USEDITEM_QUESTIONS } from "./MarketCommentList.queries";
import {
  IQuery,
  IQueryFetchUseditemQuestionsArgs,
} from "../../../../commons/types/generated/types";
import { useRouter } from "next/router";
import { IMarketCommentListContainerProps } from "./MarketCommentList.types";

export default function MarketCommentListContainer(
  props: IMarketCommentListContainerProps
) {
  const router = useRouter();
  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchUseditemQuestions">,
    IQueryFetchUseditemQuestionsArgs
  >(FETCH_USEDITEM_QUESTIONS, {
    variables: {
      useditemId: String(router.query.marketId),
    },
  });

  const onLoadMore = () => {
    if (data === undefined) return;
    void fetchMore({
      variables: {
        page: Math.ceil(data?.fetchUseditemQuestions.length / 10) + 1,
      },
      updateQuery: (prev: any, { fetchMoreResult }) => {
        return {
          fetchUseditemQuestions: [
            ...prev.fetchUseditemQuestions,
            ...fetchMoreResult.fetchUseditemQuestions,
          ],
        };
      },
    });
  };

  return (
    <>
      <MarketCommentListPresenter data={data} onLoadMore={onLoadMore} />
    </>
  );
}
