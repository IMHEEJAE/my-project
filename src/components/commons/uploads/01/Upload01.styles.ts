import styled from "@emotion/styled";

export const UploadImage = styled.img`
  width: 80px;
  height: 80px;
  margin-left: 24px;
  cursor: pointer;
  :first-child {
    margin-left: 0;
  }
`;

export const UploadButton = styled.button`
  width: 80px;
  height: 80px;
  background-color: #828282;
  color: #e8e298;
  margin-left: 24px;
  outline: none;
  border: none;
  cursor: pointer;
  border: 2px solid #000;
  :first-child {
    margin-left: 0;
  }
`;

export const UploadFileHidden = styled.input`
  display: none;
`;
