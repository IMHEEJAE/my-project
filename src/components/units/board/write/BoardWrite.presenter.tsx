import ButtonsBoard from "../../../commons/buttons/board/ButtonsBoard";
import InputsBoard from "../../../commons/inputs/board/InputsBoard";
import Upload01Container from "../../../commons/uploads/01/Upload01.container";
import Validation01 from "../../../commons/validations/01/Validation01";
import * as S from "./BoardWrite.styles";
import { BoardWritePresenterProps } from "./BoardWrite.types";
import { v4 as uuidv4 } from "uuid";
export default function BoardWritePresenter(props: BoardWritePresenterProps) {
  return (
    <>
      <S.Wrapper>
        <S.MainWrap>
          <S.MainTitle>게시글 {props.isEdit ? "수정" : "등록"}</S.MainTitle>
          <S.FormWrap>
            <form
              onSubmit={props.handleSubmit(
                props.isEdit ? props.onClickUpdate : props.onClickSubmit
              )}
            >
              <S.WriterWrap>
                <S.WriterBox>
                  <S.Label>작성자</S.Label>
                  <InputsBoard
                    type="text"
                    register={props.register("writer")}
                    placeholder="이름을 적어주세요."
                    defaultValue={props.data?.fetchBoard.writer ?? ""}
                    readOnly={!!props.data?.fetchBoard.writer}
                  />
                  {props.formState.errors.writer && (
                    <Validation01
                      title={props.formState.errors.writer?.message}
                    />
                  )}
                </S.WriterBox>
                <S.WriterBox>
                  <S.Label>비밀번호</S.Label>

                  <InputsBoard
                    type="password"
                    register={props.register("password")}
                    placeholder="비밀번호를 적어주세요."
                  />

                  {props.formState.errors.password && (
                    <Validation01
                      title={props.formState.errors.password?.message}
                    />
                  )}
                </S.WriterBox>
              </S.WriterWrap>
              <S.InputWrap>
                <S.Label>제목</S.Label>
                <InputsBoard
                  type="text"
                  register={props.register("title")}
                  placeholder="제목을 작성해주세요."
                  defaultValue={props.data?.fetchBoard.title}
                />

                {props.formState.errors.title && (
                  <Validation01 title={props.formState.errors.title?.message} />
                )}
              </S.InputWrap>
              <S.InputWrap>
                <S.Label>내용</S.Label>
                <S.Textarea
                  placeholder="내용을 작성해주세요."
                  {...props.register("contents")}
                  defaultValue={props.data?.fetchBoard.contents}
                />
                {props.formState.errors.contents && (
                  <Validation01
                    title={props.formState.errors.contents?.message}
                  />
                )}
              </S.InputWrap>
              <S.InputWrap>
                <S.Label>주소</S.Label>
                <S.ZipWrap>
                  <S.ZipCode
                    type="text"
                    placeholder="07250"
                    readOnly
                    value={props.zipcode}
                  />
                  <S.ZipCodeBtn
                    type="button"
                    onClick={props.onClickAddressSearch}
                  >
                    우편번호 검색
                  </S.ZipCodeBtn>
                </S.ZipWrap>
                <S.InputBox
                  readOnly
                  value={
                    props.address ||
                    (props.data?.fetchBoard.boardAddress?.address ?? "")
                  }
                />
                <S.InputBox
                  onChange={props.onChangeAddressDetail}
                  defaultValue={
                    props.data?.fetchBoard.boardAddress?.addressDetail ?? ""
                  }
                  placeholder="상세주소를 입력해주세요."
                />
              </S.InputWrap>

              <S.Label>유튜브</S.Label>
              <InputsBoard
                type="text"
                register={props.register("youtubeUrl")}
                placeholder="링크를 복사해주세요."
                defaultValue={props.data?.fetchBoard.youtubeUrl ?? ""}
              />
              <S.Label>사진첨부</S.Label>
              <S.UploadWrap>
                {props.fileUrls.map((el, index) => (
                  <Upload01Container
                    key={uuidv4()}
                    index={index}
                    fileUrl={el}
                    onChangeFileUrls={props.onChangeFileUrls}
                  />
                ))}
              </S.UploadWrap>
              <S.SubmitWrap>
                <ButtonsBoard
                  title={props.isEdit ? "수정하기" : "등록하기"}
                  isActive={props.formState.isValid}
                />
              </S.SubmitWrap>
            </form>
          </S.FormWrap>
        </S.MainWrap>
      </S.Wrapper>
      {props.isOpen && (
        <S.ZipModal visible={true} onCancel={props.onClickAddressSearch}>
          <S.PostcodeEmbed onComplete={props.onCompleteAddressSearch} />
        </S.ZipModal>
      )}
    </>
  );
}
