import { useEffect } from "react";
import { css } from "@emotion/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import { pxToVH, pxToVW } from "../../../../commons/styles/globalStyles";

export default function HomeFirst() {
  useEffect(() => {
    let isScroll = false;
    let scrollCnt = 0;

    function setAnimation() {
      if (!isScroll) {
      }
    }

    const firstGSAP = gsap.context(() => {
      const t1 = gsap.timeline({});
      t1.to(".main_image_wrap", {
        scrollTrigger: {
          trigger: "main_wrap",
          start: "30% top",
          end: "center center",
          scrub: 5,
        },
        width: "100vw",
        top: 0,
        left: 0,
        transform: "translateX(0)",

        // scale: 0.38,
        // y: pxToVW(-40),
        ease: "power3.out",
        duration: 7,
        scrub: 1,
        // toggleAction: "play none reverse none",
      }).to("#first .main_image_wrap", {
        scrollTrigger: {
          // id: "icon",
          // trigger: "#first .main_image_wrap",
          // start: "top top",
          // end: "+=60% top",
          // pin: "#first .main_image_wrap .main_image",
          // scrub: 3,
        },
        // y: pxToVW(-600),
        // width: "100vw",
        duration: 8,
      });

      const tl2 = gsap.timeline({});
      tl2
        .to("#first .icon_wrap ", {
          duration: 4,
          rotation: -180,
        })
        .to("#first .icon_wrap .icon", {
          rotation: -180,
          duration: 2,
        });
      ScrollTrigger.create({
        id: "main_wrap",
        trigger: "#first",
        start: "bottom left",
        end: "bottom left",
        markers: true,
        pin: "#first .icon_wrap",
        scrub: 3,
        animation: tl2,
      });
    });
    return () => {
      firstGSAP.revert();
    };
  }, []);
  return (
    <>
      <section id="first" css={style.First}>
        <div className="first_wrap">
          <div className="title">MY OWN WORKSPACE</div>
          <div className="main_wrap">
            <div className="sub_title_wrap">
              <div className="sub_tit_en">
                Lorem Ipsum is simply dummy text of the printing
                <br />
                and typesetting industry. Lorem Ipsum has
                <br />
                been the unknown standard dummy text ever
                <br /> since the 1500s, when an unknown printer took a galley
              </div>
              <div className="sub_tit_ko">
                로렘 입숨(lorem ipsum; 줄여서 립숨, lipsum)은 출판이나
                <br />
                그래픽 디자인 분야에서 폰트, 타이포그래피, 레이아웃 같은 그래픽
                <br />
                요소나 시각적 연출을 보여줄 때 사용하는 표준 채우기 텍스트로,
                <br />
                최종 결과물에 들어가는 실제적인 문장 내용이 채워지기 전에
              </div>
            </div>
            <div className="main_image_wrap">
              <img
                className="main_image"
                src="/images/layout/main_image01.jpg"
                alt="main_image"
              />
            </div>
          </div>
          <div className="icon_wrap">
            <img
              className="icon"
              src="/images/layout/home_image.png"
              alt="icon"
            />
          </div>
        </div>
      </section>
      {/* <div>    but also the leap into electronic typesetting, remaining essentially unchanged.</div> */}
      {/* <div>  이런 용도로 사용할 때 로렘 입숨을 그리킹(greeking)이라고도 부르며, 때로 로렘 입숨은 공간만 차지하는 무언가를 지칭하는 용어로도 사용된다.</div> */}
    </>
  );
}

const style = {
  First: () => css`
    position: relative;
    .first_wrap {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .title {
        font-size: ${pxToVW(148)};
        margin-bottom: 100px;
        z-index: 1;
      }
      .main_wrap {
        .sub_title_wrap {
          display: flex;
          justify-content: center;
          flex-direction: column;
          align-items: center;
          text-align: center;
          margin-bottom: 20vh;
          z-index: 1;
          .sub_tit_ko {
            margin-top: 40px;
          }
        }
        .main_image_wrap {
          overflow: hidden;
          position: absolute;
          top: 60vh;
          left: 50%;
          transform: translateX(-50%);
          display: block;
          margin: auto;
          width: ${pxToVW(900)};
          height: ${pxToVH(2600)};
          will-change: transform;
          object-fit: cover;
          .main_image {
            object-fit: cover;
            filter: sepia(1);
          }
        }
      }
    }

    .icon_wrap {
      position: absolute;
      width: 85vw;
      height: 100vh;
      transform-origin: 50vw 100vh;
      .icon {
        width: 500px;
        height: auto;
        position: absolute;
        bottom: 0;
        right: 0;
        animation: rotateAni 23s linear infinite;
        isolation: isolate;
      }

      @keyframes rotateAni {
        0% {
          transform: rotate(360deg);
        }
        100% {
          transform: rotate(0deg);
        }
      }
    }
  `,
};
