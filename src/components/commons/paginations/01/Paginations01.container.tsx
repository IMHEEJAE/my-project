import Paginations01Presenter from "./Paginations01.presenter";
import { useState, MouseEvent } from "react";
import { IPaginations01Props } from "./Paginations01.types";

export default function Paginations01Container(props: IPaginations01Props) {
  const [startPage, setStartPage] = useState(1);
  const [activePage, setActivePage] = useState(1);
  const lastPage = props.count != null ? Math.ceil(props.count / 5) : 0;

  const onClickPage = (event: MouseEvent<HTMLSpanElement>) => {
    const activePage = Number(event.currentTarget.id);
    setActivePage(activePage);
    void props.refetch({ page: activePage });
  };

  const onClickPrevPage = () => {
    if (startPage === 1) return;
    setStartPage(startPage - 5);
    setActivePage(startPage - 5);
    void props.refetch({ page: startPage - 5 });
  };

  const onClickNextPage = () => {
    if (startPage + 5 <= lastPage) {
      setStartPage(startPage + 5);
      setActivePage(startPage + 5);
      void props.refetch({ page: startPage + 5 });
    }
  };

  return (
    <>
      <Paginations01Presenter
        startPage={startPage}
        lastPage={lastPage}
        activePage={activePage}
        onClickPage={onClickPage}
        onClickPrevPage={onClickPrevPage}
        onClickNextPage={onClickNextPage}
      />
    </>
  );
}
