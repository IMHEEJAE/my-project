import { Dispatch, SetStateAction } from "react";

export interface IMarketCommentWriteContainerProps {
  isEdit?: boolean;
  setIsEdit?: Dispatch<SetStateAction<boolean>>;
  el?: any;
  isQuestionEdit?: boolean;
  setIsQuestionEdit?: Dispatch<SetStateAction<boolean>>;
}

export interface IMarketCommentWritePresenterProps {
  el?: any;
  isQuestionEdit?: boolean;
  contents: string;
  onChangeContents: any;
  onClickSubmitComment: () => void;
  onClickUpdateComment: () => void;
  onClickCancel: () => void;
}
