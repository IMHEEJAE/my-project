import MarketWriteContainer from "../../../src/components/units/market/write/MarketWrite.container";
// import { withAuth } from "../../../src/components/commons/hoc";
// const MarketsNew = () => {
//   return <MarketWriteContainer isEdit={false} />;
// };
// export default withAuth(MarketsNew);

export default function MarketsNew() {
  return <MarketWriteContainer isEdit={false} />;
}
