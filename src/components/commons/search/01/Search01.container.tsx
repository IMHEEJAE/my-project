import Search01Presenter from "./Search01.presenter";
import { ChangeEvent } from "react";
import _ from "lodash";
import { ISearch01ContainerProps } from "./Search01.types";

export default function Search01Container(props: ISearch01ContainerProps) {
  const getDebounce = _.debounce((value) => {
    void props.refetch({ search: value, page: 1 });
    void props.refetchBoardsCount({ search: value });
    props.onChangeKeyword(value);
  }, 500);

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    getDebounce(event.target.value);
  };
  
  return (
    <>
      <Search01Presenter onChangeSearch={onChangeSearch} />
    </>
  );
}
