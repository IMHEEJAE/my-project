import { ChangeEvent, useState } from "react";
import _ from "lodash";
import { ApolloQueryResult } from "@apollo/client";
import { IQuery } from "../../../commons/types/generated/types";

interface IUseSearchMypageArgs {
  refetch: (
    variables?: Partial<any> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, any>>>;
}

export const useSearchMypage = (
  args: IUseSearchMypageArgs
): {
  keyword: string;
  onChangeSearchMypage: (event: ChangeEvent<HTMLInputElement>) => void;
} => {
  const [keyword, setKeyword] = useState("");

  const getDebounce = _.debounce((value: string) => {
    void args.refetch({ search: value, page: 1 });
    setKeyword(value);
  }, 500);

  const onChangeSearchMypage = (event: ChangeEvent<HTMLInputElement>): void => {
    getDebounce(event.target.value);
  };

  return {
    keyword,
    onChangeSearchMypage,
  };
};
