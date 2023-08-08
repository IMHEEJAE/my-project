import dynamic from "next/dynamic";
import styled from "@emotion/styled";
import { mq } from "../../../../commons/styles/globalStyles";
const ReactQuill = dynamic(async () => await import("react-quill"), {
  ssr: false,
});
export const Wrapper = styled.div`
  position: relative;
  width: 90%;
`;
export const MainWrap = styled.div`
  max-width: 1600px;
  margin: 0 auto;
  border: 2px solid #000;
  padding: 50px;
  border-top: none;
  border-bottom: none;
  ${mq[1]} {
    padding: 20px;
  }
`;
export const MainTitle = styled.h2``;
export const FormWrap = styled.div`
  width: 100%;
`;

export const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 16px;
`;

export const Label = styled.div`
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  margin: 20px 0 10px;
`;
export const Quill = styled(ReactQuill)`
  border: 2px solid #000;
  .ql-toolbar.ql-snow {
    border-bottom: 2px solid #000;
  }
  .ql-container.ql-snow {
    height: 200px;
  }
`;

export const MapWrap = styled.div`
  display: flex;
  ${mq[2]} {
    flex-direction: column;
  }
`;
export const MapBox = styled.div``;
export const MapImg = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  height: 230px;
  margin-right: 26px;
  border: 2px solid #000;
  ${mq[2]} {
    width: 100%;
  }
`;
export const KakaoMap = styled.div`
  width: 100%;
  height: 100%;
`;
export const MapDesc = styled.div`
  width: 100%;
`;
export const ImgWrap = styled.div``;
export const ImgBox = styled.div`
  display: flex;
`;
export const Gps = styled.div`
  display: flex;
  align-items: center;
`;
export const GpsInput = styled.input`
  width: 100%;
  height: 52px;
  border: 1px solid #bdbdbd;
  padding: 0 12px;
  box-sizing: border-box;
  background: #e0dcd0;
  border: 2px solid #000;
`;

export const GpsIcon = styled.img`
  margin: 0 10px;
`;
export const Address = styled.div`
  width: 100%;
`;
export const PT20 = styled.div`
  display: block;
  padding-top: 20px;
`;
export const SubmitWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;
