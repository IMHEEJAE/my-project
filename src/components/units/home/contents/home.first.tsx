/** @jsxImportSource @emotion/react */
import { useEffect } from "react";
import { css } from "@emotion/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { mq, pxToVW } from "../../../../commons/styles/globalStyles";
export default function HomeFirst() {
  useEffect(() => {
    // ScrollTrigger를 초기화합니다.
    gsap.registerPlugin(ScrollTrigger);

    // 각 상자에 대한 ScrollTrigger를 만듭니다.
    const createBoxScrollTrigger = (boxSelector: any, startOffset: any) => {
      gsap.to(boxSelector, {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: boxSelector,
          start: `top ${startOffset}%`,
          end: "20% top",
          scrub: 0.5,
        },
      });
    };

    createBoxScrollTrigger(".box1", 90);
    createBoxScrollTrigger(".box2", 70);
    createBoxScrollTrigger(".box3", 90);
    createBoxScrollTrigger(".box4", 90);
  }, []);
  const sk00700 = "https://www.00700.com/";
  const insightWeb = "https://www.hanwhasolutions-insight.com";
  const insightMobile = "https://m.hanwhasolutions-insight.com/kr/main.do";
  const jadeWeb = "https://www.jadepalacegc.com/kr/main.do";
  const jadeMobile = "https://m.jadepalacegc.com/";
  return (
    <>
      <section id="First" css={style.First}>
        <div className="intro">
          <p>I want a company that</p>
          <p>can grow up like me.</p>
          <p>If you want to do it </p>
          <p>with me after looking </p>
          <p>at the contents</p>
        </div>
        <div className="inner">
          <h5 className="tit">구축</h5>
          <div className="box box1">
            <div className="img">
              <img src="/images/project/seegene.jpg" />
            </div>
            <div className="info">
              <div className="text_box">
                <span className="title">씨젠 관리자 (PC)</span>
                <div className="text">React</div>
                <p className="desc">
                  react-hook-form, react-redux 를 이용한 회원가입 페이지 작업
                  <br />
                  axios로 서버 통신
                  <br />
                  material-ui를 이용한 styleGuide 작업
                  <span className="sub">
                    * 씨젠 관리자의 관리자 페이지라 링크 없음😅
                  </span>
                </p>
              </div>
              <span className="year">2021.09 - 12</span>
            </div>
          </div>

          <div className="box type2 box2">
            <div className="info">
              <div className="text_box">
                <span className="title">SK텔링크 00700 국제전화 WEB / APP</span>
                <div className="text">Vue2</div>
                <p className="desc">
                  PC, Mobile : lounge, charge 페이지
                  <br />
                  APP : 메인페이지 (인터렉션) / 이벤트 / 공지사항 페이지
                  <span className="sub url">
                    <p
                      onClick={() => {
                        window.open(sk00700);
                      }}
                    >
                      https://www.00700.com/
                    </p>
                  </span>
                </p>
              </div>
              <span className="year">2022.06 , 2022.10</span>
            </div>
            <div className="img">
              <img src="/images/project/00700.png" />
            </div>
          </div>

          <div className="box box3">
            <div className="img">
              <img src="/images/project/insight.png" />
            </div>
            <div className="info">
              <div className="text_box">
                <span className="title">한화 인사이트 (PC,Mobile)</span>
                <div className="text">HTML, CSS, JQUERY</div>
                <p className="desc">
                  PC : company / sustainable /promotion / weather 페이지
                  <br />
                  Mobile : Header(메뉴) / company / business / promotion /
                  weather페이지
                  <span className="sub url">
                    <p
                      onClick={() => {
                        window.open(insightWeb);
                      }}
                    >
                      https://www.hanwhasolutions-insight.com
                    </p>

                    <p
                      onClick={() => {
                        window.open(insightMobile);
                      }}
                    >
                      https://m.hanwhasolutions-insight.com/kr/main.do
                    </p>
                  </span>
                </p>
              </div>
              <span className="year">2022.07 - 08</span>
            </div>
          </div>

          <div className="box type2 box4">
            <div className="info">
              <div className="text_box">
                <span className="title">제이드팰리스 (PC,Mobile)</span>
                <div className="text">HTML, CSS, JQUERY</div>
                <p className="desc">
                  PC : main / login / about / clubhouse / info / mypage 페이지
                  작업
                  <br />
                  Mobile : main / menu / login / about / member / mypage 페이지
                  작업
                  <span className="sub url">
                    <p
                      onClick={() => {
                        window.open(jadeWeb);
                      }}
                    >
                      https://www.jadepalacegc.com/kr/main.do
                    </p>

                    <p
                      onClick={() => {
                        window.open(jadeMobile);
                      }}
                    >
                      https://m.jadepalacegc.com/
                    </p>
                  </span>
                </p>
              </div>
              <span className="year">2022.06 , 2022.10</span>
            </div>
            <div className="img">
              <img src="/images/project/jade.jpg" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
const style = {
  First: () => css`
    position: relative;
    width: 100%;
    padding-top: ${pxToVW(200)};
    word-break: break-word;
    .intro {
      text-transform: uppercase;
      font-size: ${pxToVW(80)};
      padding-bottom: 150px;
    }
    .inner {
      .tit {
        position: relative;
        display: flex;
        flex-direction: column;
        text-align: center;
        font-size: ${pxToVW(150)};
        color: #091e6f;
        margin-bottom: ${pxToVW(150)};
      }
      .box {
        position: relative;
        justify-content: center;
        display: flex;
        align-items: center;
        opacity: 0;
        padding: 0 ${pxToVW(80)} ${pxToVW(100)};
        &:after {
          content: "";
          position: absolute;
          left: 50%;
          width: 1px;
          height: 100%;
          background: #000;
        }
        & > div {
          flex: 1;
          width: 50%;
          &:first-child {
            margin-right: ${pxToVW(80)};
          }
          &:nth-child(2) {
            margin-left: ${pxToVW(80)};
          }
        }

        .img {
          position: relative;
          img {
            width: 100%;
          }
        }
        .info {
          align-self: center;
          .title {
            font-size: 30px;
          }
          .text {
            font-weight: 300;
            font-size: 14px;
            margin-bottom: 30px;
          }
          .desc {
            .sub {
              display: block;
              margin-top: 5px;
              font-weight: 300;
              font-size: 14px;
              color: #999;
              &.url {
                cursor: pointer;
              }
            }
          }
          .year {
            position: absolute;
            left: 50%;
            top: 50%;
            background: #e0dcd0;
            display: block;
            padding: 5px 36px;
            margin: -27px 0 0 -65px;
            transform: rotate(-90deg);
            font-size: 10px;
            z-index: 2;
            font-weight: 100;
          }
        }
        &.type2 {
          .info {
            padding: 0 0 0 ${pxToVW(100)};
            .year {
              margin: -27px 0 0 -80px;
            }
          }
        }

        ${mq[0]} {
          display: flex;
          flex-direction: column;
          margin-bottom: 40px;
          &:after {
            display: none;
          }
          & > div {
            width: 100%;
            &:first-child {
              margin-right: 0;
            }
            &:nth-child(2) {
              margin-left: 0;
            }
          }
          .img {
            margin-bottom: 20px;
          }
          .info {
            .title {
              font-size: 24px;
            }
            .text {
              font-size: 12px;
              margin-bottom: 10px;
            }
            .desc {
              font-size: 14px;
              .sub {
                font-size: 12px;
                color: #999;
                &.url {
                  cursor: none;
                }
              }
            }

            .year {
              display: none;
            }
          }
          &.type2 {
            flex-direction: column-reverse;
            .info {
              padding: 0;
            }
          }
        }
      }
    }

    //     height: ${pxToVW(400)};
  `,
};
