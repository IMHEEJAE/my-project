import { useState } from "react";
import * as S from "./SearchBar.styles";
import { IProps } from "./SearchBar.types";

export default function SearchBar(props: IProps): JSX.Element {
  const [showSearch, setShowSearch] = useState("");

  const handleSearch = () => {
    if (showSearch === "") {
      setShowSearch("active");
    }
  };
  return (
    <S.SearchWrap onClick={handleSearch} className={`${showSearch}`}>
      <S.Searchbar
        placeholder={props.placeholder}
        onChange={props.onChangeSearch}
        onClick={handleSearch}
        className={`${showSearch}`}
      />
      <S.Icon src="/images/icon/icon_search.svg" />
    </S.SearchWrap>
  );
}
