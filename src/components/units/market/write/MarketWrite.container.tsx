import { useForm } from "react-hook-form";
import MarketWritePresenter from "./MarketWrite.presenter";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { IFormData, IMarketWriteContainerProps } from "./MarketWrite.types";
import { useMutation } from "@apollo/client";
import { CREATE_USEDITEM, UPDATE_USEDITEM } from "./MarketWrite.queries";
import {
  IMutation,
  IMutationCreateUseditemArgs,
  IMutationUpdateUseditemArgs,
} from "../../../../commons/types/generated/types";
import { Modal } from "antd";
// import { FETCH_USEDITEMS } from "../list/MarketList.queries";
import { useRouter } from "next/router";
import "react-quill/dist/quill.snow.css";
import { ChangeEvent, useEffect, useState } from "react";
import { FETCH_USEDITEMS } from "../lists/MarketLists.queries";
import { FETCH_USEDITEM } from "../detail/MarketDetail.queries";

const schema = yup.object({
  name: yup.string().required("상품명을 입력해주세요"),
  remarks: yup.string().required("한줄요약을 입력해주세요"),
  contents: yup.string().required("설명을 입력해주세요"),
  price: yup
    .number()
    .transform((value) => (isNaN(value) ? undefined : value))
    .required("판매가격을 숫자로 입력해주세요"),
  tags: yup.string().required("태그를 입력해주세요"),
});

declare global {
  interface Window {
    kakao: any;
    maps: string;
  }
}
export default function MarketWriteContainer(
  props: IMarketWriteContainerProps
) {
  const router = useRouter();
  const [createUseditem] = useMutation<
    Pick<IMutation, "createUseditem">,
    IMutationCreateUseditemArgs
  >(CREATE_USEDITEM);
  const [updateUseditem] = useMutation<
    Pick<IMutation, "updateUseditem">,
    IMutationUpdateUseditemArgs
  >(UPDATE_USEDITEM);

  const [addressLat, setAddressLat] = useState<number>(0);
  const [addressLng, setAddressLng] = useState<number>(0);
  const [address, setAddress] = useState("");
  const [addressDetail, setAddressDetail] = useState("");

  const [contents, setContents] = useState("");
  const [fileUrls, setFileUrls] = useState(["", "", ""]);
  const { register, handleSubmit, formState, setValue, trigger } =
    useForm<IFormData>({
      resolver: yupResolver(schema),
      mode: "onChange",
    });

  const onChangeContents = (value: string) => {
    setValue("contents", value === "<p><br></p>" ? "" : value);
    setContents(
      value === "<p><br>p>" ? props.data?.fetchUseditem.contents ?? "" : value
    );
    void trigger("contents");
  };

  const onChangeFileUrls = (fileUrl: string, index: number) => {
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = fileUrl;
    setFileUrls(newFileUrls);
  };

  useEffect(() => {
    if (props.data?.fetchUseditem.images?.length) {
      setFileUrls([...props.data?.fetchUseditem.images]);
    }
  }, [props.data]);

  const onChangeAddressDetail = (event: ChangeEvent<HTMLInputElement>) => {
    setAddressDetail(event.target.value);
  };

  useEffect(() => {
    if (props.isEdit && props.data?.fetchUseditem) {
      setValue("name", props.data?.fetchUseditem.name);
      setValue("remarks", props.data?.fetchUseditem.remarks);
      setValue("contents", props.data?.fetchUseditem.contents);
      setValue("price", props.data?.fetchUseditem.price);
      setValue("tags", props.data?.fetchUseditem.tags);
    }
  }, [props.isEdit, props.data?.fetchUseditem]);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=f2400c45d63389ba72ae0f127645b6ec&libraries=services";
    document.head.appendChild(script);
    script.onload = () => {
      window.kakao.maps.load(function () {
        const container = document.getElementById("map"); // 지도를 담을 영역의 DOM 레퍼런스
        const options = {
          // 지도를 생성할 때 필요한 기본 옵션
          center: new window.kakao.maps.LatLng(
            37.5546788388674,
            126.970606917394
          ), // 지도의 중심좌표.
          level: 3, // 지도의 레벨(확대, 축소 정도)
        };

        const map = new window.kakao.maps.Map(container, options);

        console.log(map);

        const marker = new window.kakao.maps.Marker({
          // 지도 중심좌표에 마커를 생성합니다
          position: map.getCenter(),
        });
        const geocoder = new window.kakao.maps.services.Geocoder();
        console.log(geocoder);
        // const coord = new window.kakao.maps.LatLng(myLat, myLng);
        const test = function (coords: any, callback: any) {
          geocoder.coord2Address(coords.getLng(), coords.getLat(), callback);
        };
        marker.setMap(map);

        window.kakao.maps.event.addListener(
          map,
          "click",
          function (mouseEvent: { latLng: any }) {
            // 클릭한 위도, 경도 정보를 가져옵니다
            test(mouseEvent.latLng, function (result: any, status: any) {
              if (status === window.kakao.maps.services.Status.OK) {
                setAddress(result[0].address.address_name);
              }
            });

            const latlng = mouseEvent.latLng;

            // 마커 위치를 클릭한 위치로 옮깁니다
            marker.setPosition(latlng);

            // const message =
            //   "클릭한 위치의 위도는 " +
            //   latlng.getLat() +
            //   " 이고, " +
            //   "경도는 " +
            //   latlng.getLng() +
            //   " 입니다";
            // alert(message);
            setAddressLat(latlng.getLat());
            setAddressLng(latlng.getLng());
            setAddress(geocoder.coord2Address);
          }
        );
      });
    };
  }, []);
  const onClickSubmit = async (data: IFormData) => {
    try {
      const result = await createUseditem({
        variables: {
          createUseditemInput: {
            name: data.name,
            remarks: data.remarks,
            contents,
            price: data.price,
            tags: data.tags
              .replaceAll(" ", "")
              .split("#")
              .filter((el: string) => el !== "")
              .map((el) => "#" + el),
            useditemAddress: {
              address,
              addressDetail,
              lat: addressLat,
              lng: addressLng,
            },
            images: [...fileUrls],
          },
        },
        refetchQueries: [
          {
            query: FETCH_USEDITEMS,
            variables: { useditemId: String(router.query.marketId) },
          },
        ],
      });
      console.log("result", result);
      alert("성공!!");
      void router.push(`/markets`);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };
  const onClickUpdate = async (data: IFormData) => {
    try {
      const result = await updateUseditem({
        variables: {
          updateUseditemInput: {
            name: data.name,
            remarks: data.remarks,
            contents,
            price: data.price,
            tags: data.tags
              .replaceAll(" ", "")
              .split("#")
              .filter((el: string) => el !== "")
              .map((el) => "#" + el),
            useditemAddress: {
              address,
              addressDetail,
              lat: addressLat,
              lng: addressLng,
            },
            images: [...fileUrls],
          },
          useditemId: String(router.query.marketId),
        },
        refetchQueries: [
          {
            query: FETCH_USEDITEM,
            variables: { useditemId: router.query.marketId },
          },
        ],
      });
      if (typeof result.data?.updateUseditem._id !== "string") {
        alert("일시적인 오류가 있습니다. 다시 시도해 주세요.");
        return;
      }
      console.log("제발제발", result);
      void router.push(`/markets`);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return (
    <>
      <MarketWritePresenter
        fileUrls={fileUrls}
        isEdit={props.isEdit}
        data={props.data}
        register={register}
        handleSubmit={handleSubmit}
        formState={formState}
        setValue={setValue}
        trigger={trigger}
        contents={contents}
        address={address}
        addressLat={addressLat}
        addressLng={addressLng}
        onChangeContents={onChangeContents}
        onChangeFileUrls={onChangeFileUrls}
        onClickSubmit={onClickSubmit}
        onClickUpdate={onClickUpdate}
        onChangeAddressDetail={onChangeAddressDetail}
      />
    </>
  );
}
