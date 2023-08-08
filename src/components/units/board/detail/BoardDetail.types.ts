import { MouseEvent } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface BoardDetailPresenterProps {
  data?: Pick<IQuery, "fetchBoard">;
  onClickBoardsList: () => void;
  onClickBoardEdit: () => void;
  onClickLike: () => void;
  onClickDislike: () => void;
  onClickDelete: (event: MouseEvent<HTMLButtonElement>) => void;
}
