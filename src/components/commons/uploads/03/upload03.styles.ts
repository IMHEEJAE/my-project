import styled from "@emotion/styled";

export const UploadButton = styled.button`
  width: 200px;
  height: 200px;
  background-color: #999;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    background-color: #091e6f;
    color: #fff;
  }
`;

export const UploadImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 2px solid #000;
  cursor: pointer;
`;
export const UploadImageHidden = styled.input`
  display: none;
`;
