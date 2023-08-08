import * as S from "./upload03.styles";
import { IUpload03PresenterProps } from "./upload03.types";

export default function Upload03Presenter(props: IUpload03PresenterProps) {
  return (
    <>
      {props.fileUrl || props.defaultFileUrl ? (
        <S.UploadImage
          onClick={props.onClickUpload}
          src={
            props.fileUrl ||
            `https://storage.googleapis.com/${props.defaultFileUrl}`
          }
        />
      ) : (
        <S.UploadButton onClick={props.onClickUpload}>
          <div>프로필 이미지 업로드</div>
        </S.UploadButton>
      )}
      <S.UploadImageHidden
        ref={props.fileRef}
        type="file"
        onChange={props.onChangeImage}
      />
    </>
  );
}
