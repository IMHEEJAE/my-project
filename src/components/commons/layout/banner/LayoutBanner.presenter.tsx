import * as S from "./LayoutBanner.styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function LayoutBannerPresenter() {
  const settings = {
    dots: false,
    infinite: true,
    navigation: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <S.Wrapper>
        <Slider {...settings}>
          <S.SliderItem>
            <S.SliderImage01>
              <S.SliderShadow />
            </S.SliderImage01>
            <S.SliderContent>
              <S.SliderTitle>타이틀 테스트111</S.SliderTitle>
              <S.SliderDesc>설명 테스트 설명 테스트111</S.SliderDesc>
            </S.SliderContent>
          </S.SliderItem>

          <S.SliderItem>
            <S.SliderImage02>
              <S.SliderShadow />
            </S.SliderImage02>
            <S.SliderContent>
              <S.SliderTitle>TEST 02</S.SliderTitle>
              <S.SliderDesc>CONTENTS 02</S.SliderDesc>
            </S.SliderContent>
          </S.SliderItem>
        </Slider>
      </S.Wrapper>
    </>
  );
}
