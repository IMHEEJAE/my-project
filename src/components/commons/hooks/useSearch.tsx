import { ChangeEvent, useState } from "react";
import _ from "lodash";
import { ApolloQueryResult } from "@apollo/client";
import { IQuery } from "../../../commons/types/generated/types";

interface IUseSearchArgs {
  refetch: (
    variables?: Partial<any> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, any>>>;
}

export const useSearch = (
  args: IUseSearchArgs
): {
  keyword: string;
  onChangeSearch: (event: ChangeEvent<HTMLInputElement>) => void;
} => {
  const [keyword, setKeyword] = useState("");

  const getDebounce = _.debounce((value: string) => {
    void args.refetch({ search: value, page: 1 });
    setKeyword(value);
    console.log("keyword", keyword);
  }, 500);

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>): void => {
    getDebounce(event.target.value);
  };

  return {
    keyword,
    onChangeSearch,
  };
};
