import { UploadButton, UploadFileHidden, UploadImage } from "./Upload01.styles";
import { IUpload01PresenterProps } from "./Upload01.types";

export default function Uploads01Presenter(props: IUpload01PresenterProps) {
  return (
    <>
      {props.fileUrl ? (
        <UploadImage
          onClick={props.onClickUpload}
          src={`https://storage.googleapis.com/${props.fileUrl}`}
        />
      ) : (
        <UploadButton type="button" onClick={props.onClickUpload}>
          <div>+ Upload</div>
        </UploadButton>
      )}
      <UploadFileHidden
        type="file"
        ref={props.fileRef}
        onChange={props.onChangeFile}
      />
    </>
  );
}
