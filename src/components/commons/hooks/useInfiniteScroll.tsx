import {
  ApolloQueryResult,
  FetchMoreQueryOptions,
  OperationVariables,
} from "@apollo/client";
import {
  IQuery,
  IQueryFetchUseditemsArgs,
} from "../../../commons/types/generated/types";

interface IArgs {
  data?: any;
  fetchKey: any;
  fetchMore: <
    TFetchData = Pick<IQuery, "fetchUseditems">,
    TFetchVars extends OperationVariables = IQueryFetchUseditemsArgs
  >(
    fetchMoreOptions: FetchMoreQueryOptions<TFetchVars, TFetchData> & {
      updateQuery?: (
        previousQueryResult: TFetchData,
        options: {
          fetchMoreResult?: TFetchData | undefined;
          variables?: TFetchVars | undefined;
        }
      ) => TFetchData;
    }
  ) => Promise<ApolloQueryResult<TFetchData>>;
}

// 무한 스크롤 함수
export const useInfiniteScroll = (
  args: IArgs
): {
  onLoadMore: () => Promise<void>;
  fetchKey: string;
} => {
  const { fetchKey, data, fetchMore } = args;
  const onLoadMore = async (): Promise<void> => {
    if (data === undefined || fetchKey === undefined) return;
    await fetchMore({
      variables: {
        page: Math.ceil((data[fetchKey].length ?? 10) / 10) + 1,
      },
      updateQuery: (prev: any, { fetchMoreResult }) => {
        if (fetchMoreResult[fetchKey] === undefined) {
          return {
            [fetchKey]: [...prev[fetchKey]],
          };
        }

        return {
          [fetchKey]: [...prev[fetchKey], ...fetchMoreResult[fetchKey]],
        };
      },
    });
  };

  return {
    onLoadMore,
    fetchKey,
  };
};
