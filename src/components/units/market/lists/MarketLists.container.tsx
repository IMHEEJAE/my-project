import { useQuery } from "@apollo/client";
import {
  FETCH_USEDITEMS,
  FETCH_USEDITEMS_OF_THE_BEST,
} from "./MarketLists.queries";
import { useSearch } from "../../../commons/hooks/useSearch";
import MarketsListsPresenter from "./MarketLists.presenter";
import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";
import { IQuery } from "../../../../commons/types/generated/types";
import { useSearch02 } from "../../../commons/hooks/useSearch02";
import { useRouter } from "next/router";

export default function MarketsListsContainer() {
  const { onClickMoveToPage } = useMoveToPage();
  const router = useRouter();
  const { data: BestItemData } = useQuery<
    Pick<IQuery, "fetchUseditemsOfTheBest">
  >(FETCH_USEDITEMS_OF_THE_BEST);

  const {
    data: SoldOutTrueData,
    refetch: SoldOutTrueRefetch,
    fetchMore: SoldOutTrueRetchMore,
  } = useQuery(FETCH_USEDITEMS, {
    variables: { isSoldout: true },
  });
  const {
    data: SoldOutFalseData,
    refetch: SoldOutFalseRefetch,
    fetchMore: SoldOutFalseRetchMore,
  } = useQuery(FETCH_USEDITEMS, {
    variables: { isSoldout: false },
  });

  const { onChangeSearch, keyword } = useSearch({
    refetch: SoldOutFalseRefetch,
  });
  const { onChangeSearch02, keyword02 } = useSearch02({
    refetch: SoldOutTrueRefetch,
  });
  const onClickDetail = (event: { currentTarget: { id: any } }) => {
    void router.push(`./markets/${event.currentTarget.id}`);
  };
  const onLoadMoreSoldOutTrue = () => {
    if (SoldOutTrueData === undefined) return;
    void SoldOutTrueRetchMore({
      variables: {
        page:
          Math.ceil((SoldOutTrueData?.fetchUseditems.length ?? 10) / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (fetchMoreResult.fetchUseditems === undefined) {
          return {
            fetchUseditems: [...prev.fetchUseditems],
          };
        }
        return {
          fetchUseditems: [
            ...prev.fetchUseditems,
            ...fetchMoreResult.fetchUseditems,
          ],
        };
      },
    });
  };
  const onLoadMoreSoldOutFalse = () => {
    if (SoldOutFalseData === undefined) return;
    void SoldOutFalseRetchMore({
      variables: {
        page:
          Math.ceil((SoldOutFalseData?.fetchUseditems.length ?? 10) / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (fetchMoreResult.fetchUseditems === undefined) {
          return {
            fetchUseditems: [...prev.fetchUseditems],
          };
        }
        return {
          fetchUseditems: [
            ...prev.fetchUseditems,
            ...fetchMoreResult.fetchUseditems,
          ],
        };
      },
    });
  };

  const onChangeImageError = (event: { target: { src: string } }) => {
    const defaultImage = `../../../../images/nodata_image.png`;
    event.target.src = defaultImage;
  };

  return (
    <>
      <MarketsListsPresenter
        BestItemData={BestItemData}
        SoldOutTrueData={SoldOutTrueData}
        SoldOutTrueRefetch={SoldOutTrueRefetch}
        SoldOutTrueRetchMore={SoldOutTrueRetchMore}
        SoldOutFalseData={SoldOutFalseData}
        SoldOutFalseRefetch={SoldOutFalseRefetch}
        SoldOutFalseRetchMore={SoldOutFalseRetchMore}
        onChangeImageError={onChangeImageError}
        onChangeSearch={onChangeSearch}
        onChangeSearch02={onChangeSearch02}
        onLoadMoreSoldOutTrue={onLoadMoreSoldOutTrue}
        onLoadMoreSoldOutFalse={onLoadMoreSoldOutFalse}
        keyword={keyword}
        keyword02={keyword02}
        onClickMoveToPage={onClickMoveToPage}
        fetchMore={undefined}
        onClickDetail={onClickDetail}
      />
    </>
  );
}
