export interface IMyPageInfoPresenterProps {
  data: any;
  onClickMoveToPage: (path: string) => () => void;
}
