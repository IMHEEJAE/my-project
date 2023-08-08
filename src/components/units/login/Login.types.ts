export interface ILoginContainerProps {
  isEdit: boolean;
}
export interface IFormData {
  email: string;
  password: string;
}
export interface ILoginPresenterProps {
  [x: string]: any;
  isEdit: boolean;
  onClickHome: () => void;
  onClickRegistPage: () => void;
  onClickSubmit: (data: IFormData) => Promise<void>;
}

export interface ILoginBtnProps {
  isActive: boolean;
}
