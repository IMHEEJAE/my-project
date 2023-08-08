import * as S from "./Validation01.styles";
import { IValidation01Props } from "./Validation01.types";

export default function Validation01(props: IValidation01Props) {
  return (
    <>
      <S.Validation01>{props.title}</S.Validation01>
    </>
  );
}
