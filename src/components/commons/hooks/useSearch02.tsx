import { ChangeEvent, useState } from "react";
import _ from "lodash";
import { ApolloQueryResult } from "@apollo/client";
import { IQuery } from "../../../commons/types/generated/types";

interface IUseSearch02Args {
  refetch: (
    variables?: Partial<any> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, any>>>;
}

export const useSearch02 = (
  args: IUseSearch02Args
): {
  keyword02: string;
  onChangeSearch02: (event: ChangeEvent<HTMLInputElement>) => void;
} => {
  const [keyword02, setKeyword02] = useState("");

  const getDebounce = _.debounce((value: string) => {
    void args.refetch({ search: value, page: 1 });
    setKeyword02(value);
    console.log("keyword02", keyword02);
  }, 500);

  const onChangeSearch02 = (event: ChangeEvent<HTMLInputElement>): void => {
    getDebounce(event.target.value);
  };

  return {
    keyword02,
    onChangeSearch02,
  };
};
