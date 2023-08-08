import styled from "@emotion/styled";

// export const InputsLogin = styled(Input)`
//   width: 100%;
//   border: 1px solid #ffffff;
//   border-radius: 16px;
//   height: 64px;
//   background: transparent;
//   color: #fff;
//   :hover,
//   :focus {
//     border-color: #D4ADFC !important;
//     box-shadow: none !important;
//   }
//   ::-webkit-input-placeholder {
//     color: #fff;
//   }
//   & + .ant-input {
//     margin-top: 20px;
//   }
// `;
export const InputsLogin = styled.input`
  width: 100%;
  height: 64px;
  padding: 4px 15px;
  border: 1px solid #fff;
  font-size: 14px;
  border-radius: 16px;
  background: transparent;
  color: #fff;
  :hover,
  :focus {
    border-color: #ba664c !important;
    box-shadow: none !important;
    border-inline-end-width: 1px;
    outline: 0;
  }
  ::-webkit-input-placeholder {
    color: #fff;
  }
  & + input {
    margin-top: 20px;
  }
`;
