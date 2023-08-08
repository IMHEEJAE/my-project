import * as S from "./MarketCommentWrite.styles";
import { IMarketCommentWritePresenterProps } from "./MarketCommentWrite.types";
export default function MarketCommentWritePresenter(
  props: IMarketCommentWritePresenterProps
) {
  return (
    <>
      <S.Wrapper>
        {!props.isQuestionEdit && (
          <>
            <S.WrapperTitle>문의하기</S.WrapperTitle>
          </>
        )}

        <S.ContentsWrapper>
          <S.Contents
            maxLength={100}
            placeholder="내용을 입력하세요."
            onChange={props.onChangeContents}
            value={props.contents || (props.el?.contents ?? "")}
          />
          <S.BottomWrapper>
            <S.ContentsLength>
              {(props.contents
                ? props.contents.length
                : props.el?.contents.length) ?? 0}
              /100
            </S.ContentsLength>
            {props.isQuestionEdit ? (
              <S.Button onClick={props.onClickCancel}>취소</S.Button>
            ) : (
              ""
            )}
            <S.Button
              onClick={
                props.isQuestionEdit
                  ? props.onClickUpdateComment
                  : props.onClickSubmitComment
              }
            >
              {props.isQuestionEdit ? "수정하기" : "문의하기"}
            </S.Button>
          </S.BottomWrapper>
        </S.ContentsWrapper>
      </S.Wrapper>
    </>
  );
}
