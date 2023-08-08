import { ChangeEvent, RefObject } from "react";

export interface IUpload03ContainerProps {
  index: number;
  fileUrl: string;
  defaultFileUrl?: string;
  onChangeFileUrls: (file: any, index: number) => void;
}
export interface IUpload03PresenterProps {
  fileRef: RefObject<HTMLInputElement>;
  fileUrl: string;
  defaultFileUrl?: any;
  onClickUpload: () => void;
  onChangeImage: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeFileUrls: (file: any, index: number) => void;
}
