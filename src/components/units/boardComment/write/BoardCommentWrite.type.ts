import { ChangeEvent, Dispatch, SetStateAction } from "react";

export interface BoardCommentWritePresenterProps {
  onClickUpdate: () => void;
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: any;
  onClickSubmitComment: () => void;
  writer: string;
  password: string;
  contents: string;
  setStar: Dispatch<SetStateAction<number>>;
  isEdit?: boolean;
  el?: any;
  onClickCancel: () => void;
}

export interface IBoardCommentWriteContainerProps {
  isEdit?: boolean;
  setIsEdit?: Dispatch<SetStateAction<boolean>>;
  el?: any;
}
export interface IUpdateBoardCommentInput {
  contents?: string;
  rating?: number;
}
