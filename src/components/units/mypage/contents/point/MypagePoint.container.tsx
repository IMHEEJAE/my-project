import { useQuery } from "@apollo/client";
import MypagePointPresenter from "./MypagePoint.presenter";
import {
  FETCH_POINT_TRANSACTIONS,
  FETCH_POINT_TRANSACTIONS_OF_BUYING,
  FETCH_POINT_TRANSACTIONS_OF_LOADING,
  FETCH_POINT_TRANSACTIONS_OF_SELLING,
} from "./MypagePoint.queries";

export default function MypagePointContainer() {
  const { data } = useQuery(FETCH_POINT_TRANSACTIONS, {
    variables: { page: 1 },
  });
  const { data: dataBuying } = useQuery(FETCH_POINT_TRANSACTIONS_OF_BUYING, {
    variables: { page: 1 },
  });
  const { data: dataLoading } = useQuery(FETCH_POINT_TRANSACTIONS_OF_LOADING, {
    variables: { page: 1 },
  });
  const { data: dataSelling } = useQuery(FETCH_POINT_TRANSACTIONS_OF_SELLING, {
    variables: { page: 1 },
  });
  return (
    <>
      <MypagePointPresenter
        data={data}
        dataBuying={dataBuying}
        dataLoading={dataLoading}
        dataSelling={dataSelling}
      />
    </>
  );
}
