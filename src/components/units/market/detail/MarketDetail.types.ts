export interface MarketDetailPresenterProps {
  data?: any;
  onClickMoveToPage: (path: string) => () => void;
  onClickBuy: () => void;
  onClickDelete: () => void;
  onClickPickCount: () => void;
}
