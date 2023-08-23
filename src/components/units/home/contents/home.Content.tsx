/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-useless-return */
/** @jsxImportSource @emotion/react */
import { useEffect } from "react";
import { css } from "@emotion/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { mq, pxToVW } from "../../../../commons/styles/globalStyles";
import HomeFirst from "./home.first";
import HomeSecond from "./home.Second";

export default function HomeContent() {
  const header = gsap.timeline({});
  useEffect(() => {
    window.onbeforeunload = function pushRefresh() {
      window.scrollTo(0, 0);
    };
    const contentsEl = document.body;
    if (contentsEl) contentsEl.classList.add("overflow-hidden");

    let isScroll = false;
    let scrollCnt = 0;
    let timeoutId: NodeJS.Timeout | null = null;

    function setAnimation() {
      if (!isScroll) {
        switch (scrollCnt) {
          case 0:
            scrollCnt = 1;
            if (timeoutId) clearTimeout(timeoutId);

            header
              .addLabel("first")
              .to(
                "#first",
                {
                  // filter: "sepia(0)",
                  duration: 2,
                  transition: "all 0.5s ease-out",
                },
                "first"
              )
              .to(
                ".tit1 .p1",
                {
                  opacity: 0,
                  duartion: 1,
                },
                "first"
              )
              .to(
                ".tit1 .p2",
                {
                  opacity: 0,
                  duration: 0.8,
                  delay: 0.4,
                },
                "first"
              )
              .to(
                ".tit1 .p3",
                {
                  opacity: 0,
                  duration: 0.8,
                  delay: 0.6,
                },
                "first"
              )

              .to(
                ".tit2 .p1",
                {
                  opacity: 1,
                  duration: 1,
                  delay: 1.2,
                },
                "first"
              )
              .to(
                ".tit2 .p2",
                {
                  opacity: 1,
                  duration: 0.8,
                  delay: 1.6,
                },
                "first"
              )
              .to(
                ".tit2 .p3",
                {
                  opacity: 1,
                  duration: 0.8,
                  delay: 1.8,
                },
                "first"
              );

            timeoutId = setTimeout(() => {
              if (contentsEl) {
                contentsEl.classList.remove("overflow-hidden");
              }
            }, 2000);

            return;

          case 1:
            isScroll = false;
            timeoutId = setTimeout(() => {
              if (contentsEl) {
                contentsEl.classList.remove("overflow-hidden");
              }
            }, 2000);
            return;

          default:
            return;
        }
      }
    }

    const observe = ScrollTrigger.observe({
      type: "wheel,scroll,touch,pointer",
      onDown: () => {
        setAnimation();
      },
    });

    return () => {
      observe.kill();
      const contentsEl = document.body;
      if (contentsEl) contentsEl.classList.remove("overflow-hidden");
    };
  }, []);

  return (
    <>
      <div id="home" css={style.homeContainer}>
        <div className="main">
          <div className="home_header">
            <h2 className="tit1">
              <em className="p1">IM</em> <span className="p2">HEEJAE</span>{" "}
              <span className="p3">PROJECT</span>
            </h2>
            <h2 className="tit2">
              <em className="the-text p1">MY</em>{" "}
              <span className="p2">OWN</span>{" "}
              <span className="p3">WORKSPACE</span>
            </h2>
          </div>
          <section id="main_title" css={style.MainTitle}>
            <div className="title_wrap">
              <div className="title_text_wrap">
                <div className="tit_en">
                  HI. WELCOME TO HEEJAE'S WORKSPACE
                  <br />
                  I value development and I also like to implement
                  <br />
                  beautiful interfaces and animations.
                  <br />
                  Also, I prefer an environment where
                  <br /> I can take the initiative.
                </div>
                <div className="tit_ko">
                  안녕하세요. 희재의 작업공간입니다.
                  <br />
                  저는 개발뿐만 아니라 아름다운 인터페이스와
                  <br />
                  애니메이션을 구현하는 것도 좋아합니다.
                  <br />
                  또, 주도적으로 업무를 진행할 수 있는 환경을 선호합니다.
                </div>
              </div>
            </div>
          </section>
          <HomeFirst />
          <HomeSecond />
        </div>
      </div>
    </>
  );
}

const style = {
  homeContainer: () => css`
    position: relative;
    overflow-x: hidden;
    width: 100%;
    &.bg-black,
    .bg-black,
    .bg-black:before,
    .bg-black:after {
      background-color: #000000;
      color: #e0dcd0;
      -webkit-transition: all 0.3s ease-in;
      transition: all 0.3s ease-in;
    }
    .main {
      height: 100%;
    }
    .home_header {
      padding-top: 50px;
      .tit1,
      .tit2 {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        width: 100%;
        text-align: center;
        font-size: ${pxToVW(120)};
      }

      .tit2 {
        z-index: 2;
        .p1,
        .p2,
        .p3 {
          opacity: 0;
        }
      }
    }
  `,

  MainTitle: () => css`
    padding-top: ${pxToVW(300)};
    height: calc(100vh - 72px);
    ${mq[1]} {
      padding-top: ${pxToVW(600)};
    }

    .title_wrap {
      width: 100%;
      top: 50vh;
      text-align: center;
      line-height: 30px;
      .title_text_wrap {
        line-height: 40px;
        background-color: transparent;
        color: #000;
        ${mq[1]} {
          font-size: 14px;
        }
        ${mq[0]} {
          font-size: 12px;
        }
        .tit_ko {
          margin-top: 40px;
        }
      }
    }
  `,
};
