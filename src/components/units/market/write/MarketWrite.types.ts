import { ChangeEvent } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface IFormData {
  name: string;
  remarks: string;
  contents: string;
  price: number;
  tags: string;
  address?: string;
  addressDetail?: string;
  lat?: number;
  lng?: number;
}

export interface IMarketWriteContainerProps {
  data?: any;
  isEdit: boolean;
}
export interface IMarketWritePresenterProps {
  fileUrls: string[];
  [x: string]: any;
  data?: Pick<IQuery, "fetchUseditem">;
  contents: string;
  addressLat: any;
  addressLng: any;
  onChangeContents: (value: string) => void;
  onClickSubmit: (data: IFormData) => Promise<void>;
  onClickUpdate: (data: IFormData) => Promise<void>;
  onChangeFileUrls: (fileUrls: string, index: number) => void;
  onChangeAddressDetail: (event: ChangeEvent<HTMLInputElement>) => void;
}
