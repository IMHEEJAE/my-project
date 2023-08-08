import styled from "@emotion/styled";
import { Tabs } from "antd";
import { mq } from "../../../../../commons/styles/globalStyles";

export const Wrapper = styled.div``;
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const Table = styled.table`
  width: 100%;
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;
  border-collapse: collapse;
`;
export const Thead = styled.thead``;
export const Tr = styled.tr``;
export const TheadNumber = styled.th`
  padding: 16px 12px;
  ${mq[0]} {
    font-size: 13px;
  }
`;
export const TheadTh = styled.th`
  padding: 16px 12px;
  width: 25%;
  ${mq[0]} {
    font-size: 13px;
  }
`;
export const TheadTitle = styled.th`
  padding: 16px 12px;
`;
export const Tbody = styled.tbody``;
export const TbodyNumber = styled.th`
  padding: 14px 12px;
  border-top: 1px solid #bdbdbd;
  font-weight: 400;
  ${mq[0]} {
    font-size: 13px;
  }
`;
export const TbodyTitle = styled.th`
  padding: 14px 12px;
  border-top: 1px solid #bdbdbd;
  font-weight: 400;
  ${mq[0]} {
    font-size: 13px;
  }
`;
export const TbodyTh = styled.th`
  padding: 14px 12px;
  border-top: 1px solid #bdbdbd;
  font-weight: 400;
  font-size: 14px;
  word-break: break-all;
  ${mq[0]} {
    font-size: 13px;
  }
`;
export const TbodyThRed = styled.th`
  padding: 14px 12px;
  border-top: 1px solid #bdbdbd;
  font-weight: normal;
  color: red;
  ${mq[0]} {
    font-size: 13px;
  }
`;
export const TbodyThBlue = styled.th`
  padding: 14px 12px;
  border-top: 1px solid #bdbdbd;
  font-weight: normal;
  color: #091e6f;
  ${mq[0]} {
    font-size: 13px;
  }
`;
export const Bottom = styled.div``;
export const Tab = styled(Tabs)`
  padding: 0 0 20px;
  .ant-tabs-nav {
    width: auto;
  }
`;
