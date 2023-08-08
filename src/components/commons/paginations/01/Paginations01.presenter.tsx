import { Page } from "./Paginations01.styles";
import { IPaginations01PresenterProps } from "./Paginations01.types";

export default function Paginations01Presenter(
  props: IPaginations01PresenterProps
) {
  return (
    <>
      <div>
        <Page onClick={props.onClickPrevPage}>{`<`}</Page>
        {Array(5)
          .fill(1)
          .map((_, index) => {
            if (props.startPage + index <= props.lastPage) {
              return (
                <Page
                  key={props.startPage + index}
                  onClick={props.onClickPage}
                  id={String(props.startPage + index)}
                  isActive={props.startPage + index === props.activePage}
                >
                  {props.startPage + index}
                </Page>
              );
            } else {
              return <span key={props.startPage + index}></span>;
            }
          })}
        <Page onClick={props.onClickNextPage}>{`>`}</Page>
      </div>
    </>
  );
}
