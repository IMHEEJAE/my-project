import { Searchbar, SearchbarWrapper } from "./SearchMypage.styles";
import { IProps } from "./SearchMypage.types";

export default function SearchMypage(props: IProps) {
  return (
    <SearchbarWrapper>
      <Searchbar
        placeholder="검색어를 입력해 주세요."
        onChange={props.onChangeSearchMypage}
      ></Searchbar>
    </SearchbarWrapper>
  );
}
