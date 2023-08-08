import { useState } from "react";
import * as S from "./SearchBar02.styles";
import { IProps } from "./SearchBar02.types";

export default function SearchBar02(props: IProps): JSX.Element {
  const [showSearch, setShowSearch] = useState("");

  const handleSearch = () => {
    if (showSearch === "") {
      setShowSearch("active");
    }
  };
  return (
    <S.SearchWrap02 onClick={handleSearch} className={`${showSearch}`}>
      <S.Searchbar02
        placeholder={props.placeholder}
        onChange={props.onChangeSearch02}
        onClick={handleSearch}
        className={`${showSearch}`}
      />
      <S.Icon src="/images/icon/icon_search.svg" />
    </S.SearchWrap02>
  );
}
