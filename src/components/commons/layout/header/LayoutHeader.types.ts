import { MouseEvent } from "react";

export interface ILayoutHeaderProps {
  data: any;
  onClickMoveToPage: (path: string) => () => void;
  onClickLogin: () => void;
  onClickRegistPage: () => void;
  onClickLogout: () => void;
  isOpen: boolean;
  showPointModal: () => void;
  onClickMenu: (event: MouseEvent<HTMLDivElement>) => void;
}
