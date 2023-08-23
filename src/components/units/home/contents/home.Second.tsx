/** @jsxImportSource @emotion/react */
import { useEffect } from "react";
import { css } from "@emotion/react";
import gsap from "gsap";
import { pxToVW } from "../../../../commons/styles/globalStyles";
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
  return (
    <>
      <section id="Second" css={style.Second}>
        <div className="intro">
          <p>System Management</p>
          <p className="year">2022.01 - 2022.11</p>
          <p>운영</p>
        </div>
        <div className="box">
          <div className="left_wrap">
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
          <div className="right_wrap">
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
          <div className="left_wrap">
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
          <div className="right_wrap">
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
    padding: ${pxToVW(400)} ${pxToVW(20)};
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
        .year {
          font-size: 12px;
        }
        .url {
          font-size: 12px;
          cursor: pointer;
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
