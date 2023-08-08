import { ChangeEvent, useRef, useState } from "react";
import { IUpload03ContainerProps } from "./upload03.types";
import { checkValidationImage } from "../01/Upload01.validation";
import { Modal } from "antd";
import Upload03Presenter from "./upload03.presenter";

export default function Upload03Container(props: IUpload03ContainerProps) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [fileUrl, setFileUrl] = useState("");

  const onClickUpload = () => {
    fileRef.current?.click();
  };
  const onChangeImage = (event: ChangeEvent<HTMLInputElement>) => {
    const file = checkValidationImage(event.target.files?.[0]);
    if (!file) return;

    try {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = (data: any) => {
        setFileUrl(data.target.result);
        props.onChangeFileUrls(file, props.index);
      };
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }

    // FileReader 사용자의 파일의내용을 사용자의 컴퓨터에 저장하는 것을 가능하게 해준다.
  };
  return (
    <Upload03Presenter
      fileRef={fileRef}
      fileUrl={fileUrl}
      defaultFileUrl={props.defaultFileUrl}
      onClickUpload={onClickUpload}
      onChangeImage={onChangeImage}
      onChangeFileUrls={props.onChangeFileUrls}
    />
  );
}
