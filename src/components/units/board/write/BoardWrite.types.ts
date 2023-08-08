import { ChangeEvent } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface BoardWritePresenterProps {
  [x: string]: any;
  onClickSubmit: (data: IFormData) => Promise<void>;
  onClickUpdate: (data: IFormData) => Promise<void>;
  onChangeAddressDetail: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeFileUrls: (fileUrls: string, index: number) => void;
  isEdit: boolean;
  data?: Pick<IQuery, "fetchBoard">;
  isOpen: boolean;
  onClickAddressSearch: () => void;
  onCompleteAddressSearch: (data: any) => void;
  zipcode: string;
  address: string;
  addressDetail: string;
  fileUrls: string[];
}
export interface IFormData {
  writer: string;
  password: string;
  title: string;
  contents: string;
  youtubeUrl?: string;
}

export interface IUpdateBoardInput {
  title?: string;
  contents?: string;
  youtubeUrl?: string;
  boardAddress?: {
    zipcode?: string;
    address?: string;
    addressDetail?: string;
  };
  images?: string[];
}
export interface ISubmitBtnProps {
  isActive: boolean;
}
export interface BoardWriteContainerProps {
  isEdit: boolean;
  data?: Pick<IQuery, "fetchBoard">;
}
