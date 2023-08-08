export interface ILoginRegistContainerProps {
  isEdit: boolean;
}
export interface IFormData {
  email: string;
  name: string;
  password: string;
  // passwordConfirmation:string;
}
export interface ILoginRegistPresenterProps {
  [x: string]: any;
  isEdit: boolean;
  onClickLoginPage: () => void;
  onClickSubmit: any;
}
export interface ILoginRegistBtnProps {
  isActive: boolean;
}
