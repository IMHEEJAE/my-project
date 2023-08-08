import * as S from "./MarketAnswerWrite.styles";
import { IMarketAnswerWritePresenterProps } from "./MarketAnswerWrite.types";
export default function MarketAnswerWritePresenter(
  props: IMarketAnswerWritePresenterProps
) {
  return (
    <>
      <S.Wrapper>
        <S.Arrow src="/images/icon/icon_answer.svg" />
        <S.ContentsWrapper>
          <S.Contents onChange={props.onChangeContents} />
          <S.BottomWrapper>
            <S.ContentsLength>
              {(props.contents
                ? props.contents.length
                : props.el?.contents.length) ?? 0}
              /100
            </S.ContentsLength>
            {props.isAnswerEdit ? (
              <S.Button onClick={props.onClickCancel}>취소</S.Button>
            ) : (
              ""
            )}
            <S.Button
              id={props.el?._id}
              onClick={
                props.isAnswerEdit
                  ? props.onClickUpdateAnswer
                  : props.onClickSubmitAnswer
              }
            >
              {props.isAnswerEdit ? "수정하기" : "답변하기"}
            </S.Button>
          </S.BottomWrapper>
        </S.ContentsWrapper>
      </S.Wrapper>
    </>
  );
}
