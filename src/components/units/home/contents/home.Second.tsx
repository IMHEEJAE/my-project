/** @jsxImportSource @emotion/react */
import { useEffect } from "react";
import { css } from "@emotion/react";
import gsap from "gsap";
import { mq, pxToVW } from "../../../../commons/styles/globalStyles";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

export default function HomeSecond() {
  const resortPC = "https://www.hanwharesort.co.kr/irsweb/resort3/index_.do";
  const resortMobile = "https://m2.hanwharesort.co.kr/index.do";
  const localLive = "https://www.local-live.co.kr/main.do";
  const localLiveMobile = "https://www.local-live.co.kr/main.do";
  useEffect(() => {
    const SecondGSAP = gsap.context(() => {
      const tl = gsap.timeline({});
      tl.to("#First, #Second", {
        scrollTrigger: {
          trigger: "#Second",
          start: "top +=10%",
          end: "+=10000%",
          scrub: true,
          toggleClass: { className: "bg-black", targets: "#Second" },
        },
      });
    });
    return () => {
      SecondGSAP.revert();
    };
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (window.innerWidth > 768) {
      const left1TL = gsap.timeline({
        scrollTrigger: {
          trigger: ".left1",
          start: "top 150%",
          end: "20% top",
          scrub: true,
        },
      });

      left1TL.fromTo(
        ".left1",
        { x: "-50%", opacity: 0 },
        { x: "0%", opacity: 1 }
      );

      const right1TL = gsap.timeline({
        scrollTrigger: {
          trigger: ".right1",
          start: "top 150%",
          end: "20% top",
          scrub: true,
        },
      });

      right1TL.fromTo(
        ".right1",
        { x: "50%", opacity: 0 },
        { x: "0%", opacity: 1 }
      );

      const left2TL = gsap.timeline({
        scrollTrigger: {
          trigger: ".left2",
          start: "top 200%",
          end: "20% top",
          scrub: true,
        },
      });

      left2TL.fromTo(
        ".left2",
        { x: "-50%", opacity: 0 },
        { x: "0%", opacity: 1 }
      );

      const right2TL = gsap.timeline({
        scrollTrigger: {
          trigger: ".right2",
          start: "top 150%",
          end: "40% top",
          scrub: true,
        },
      });

      right2TL.fromTo(
        ".right2",
        { x: "50%", opacity: 0 },
        { x: "0%", opacity: 1 }
      );
    }
  }, []);
  return (
    <>
      <section id="Second" css={style.Second}>
        <div className="intro">
          <p>System Management</p>
          <p className="year">2022.01 - 2022.11</p>
          <p>운영</p>
        </div>
        <div className="box">
          <div className="left_wrap left1">
            <img src="/images/project/hanwharesort.jpg" />
            <div className="text_wrap">
              <span className="title">한화리조트 PC</span>

              <p
                onClick={() => {
                  window.open(resortPC);
                }}
                className="url"
              >
                https://www.hanwharesort.co.kr/irsweb/resort3/index_.do
              </p>
            </div>
          </div>
          <div className="right_wrap right1">
            <img src="/images/project/locallive.jpg" />
            <div className="text_wrap">
              <span className="title">로컬라이브 PC</span>

              <p
                onClick={() => {
                  window.open(localLive);
                }}
                className="url"
              >
                https://www.local-live.co.kr/main.do
              </p>
            </div>
          </div>
        </div>
        <div className="box type2">
          <div className="left_wrap left2">
            <img src="/images/project/hanwharesortMobile.png" />
            <div className="text_wrap">
              <span className="title">한화리조트 Mobile</span>

              <p
                onClick={() => {
                  window.open(resortMobile);
                }}
                className="url"
              >
                https://m2.hanwharesort.co.kr/index.do
              </p>
            </div>
          </div>
          <div className="right_wrap right2">
            <img src="/images/project/localliveMobile.png" />
            <div className="text_wrap">
              <span className="title">로컬라이브 Mobile</span>

              <p
                onClick={() => {
                  window.open(localLiveMobile);
                }}
                className="url"
              >
                https://www.local-live.co.kr/main.do
              </p>
            </div>
          </div>
        </div>
        <div className="btn_wrap">
          <button type="button" className="button">
            <span className="button_inner">
              <span className="button_text">
                WOULD YOU LIKE TO START WITH ME?
              </span>
            </span>
          </button>
        </div>
      </section>
    </>
  );
}
const style = {
  Second: () => css`
    width: 100%;
    -webkit-transition: all 0.3s ease-in;
    transition: all 0.3s ease-in;
    padding: ${pxToVW(600)} ${pxToVW(20)} ${pxToVW(200)};
    ${mq[1]} {
      padding: ${pxToVW(600)} ${pxToVW(80)} ${pxToVW(200)};
    }
    .intro {
      font-size: ${pxToVW(150)};
    }
    .box {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
      &.type2 {
        .left_wrap {
          img {
            width: ${pxToVW(800)};
          }
        }
        .right_wrap {
          margin-top: ${pxToVW(200)};
          img {
            width: ${pxToVW(1000)};
          }
        }
      }
      .left_wrap {
        img {
          width: ${pxToVW(1000)};
        }
      }
      .right_wrap {
        margin-top: ${pxToVW(300)};
        img {
          width: ${pxToVW(600)};
        }
      }
      .text_wrap {
        display: flex;
        flex-direction: column;
        .title {
        }

        .url {
          font-size: 12px;
          cursor: pointer;
        }
      }

      ${mq[1]} {
        flex-direction: column;

        &.type2 {
          .left_wrap {
            img {
              margin-bottom: 10px;
              width: 100%;
            }
          }
          .right_wrap {
            margin-top: 40px;
            img {
              margin-bottom: 10px;
              width: 100%;
            }
          }
        }
        .left_wrap {
          margin-top: 40px;
          img {
            margin-bottom: 10px;
            width: 100%;
          }
        }
        .right_wrap {
          margin-top: 40px;
          img {
            margin-bottom: 10px;
            width: 100%;
          }
        }
        .text_wrap {
          display: flex;
          flex-direction: column;
          .title {
            font-size: 24px;
          }

          .url {
            font-size: 12px;
            cursor: pointer;
          }
        }
      }
    }
    .btn_wrap {
      width: 100%;
      margin-top: ${pxToVW(200)};
      .button {
        &:hover {
          border-radius: 30px;
        }
        display: flex;
        width: 100%;
        justify-content: center;
        align-items: center;
        height: 238px;
        border-radius: 96px;
        border: 2px solid #e0dcd0;
        transition: all 0.3s ease;
        background: #000;
        ${mq[0]} {
          height: 80px;
        }
        .button_inner {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100%;
          color: #e0dcd0;
          font-size: ${pxToVW(60)};
        }
      }
    }
  `,
};
