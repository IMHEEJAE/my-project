import { useRouter } from "next/router";
import styled from "@emotion/styled";
// import LayoutNavigationContainer from "./navigation/LayoutNavigation.container";
// import LayoutBannerContainer from "./banner/LayoutBanner.container";
import LayoutHeaderContainer from "./header/LayoutHeader.container";
import MyPageInfoContainer from "../../units/mypage/Info/MypageInfo.container";
import { mq } from "../../../commons/styles/globalStyles";

const Body = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #e0dcd0;
  padding-top: 72px;
`;
const Mypage = styled.div`
  min-height: 100vh;
  display: flex;
  background-color: #e0dcd0;
  padding-top: 72px;
`;
const MypageWrap = styled.div`
  position: relative;
  width: 90%;
  display: flex;
  padding: 50px 0 100px;
  max-width: 1600px;
  margin: 0 auto;
  ${mq[1]} {
    flex-direction: column;
  }
`;

const MypageContents = styled.div`
  width: 100%;
  ${mq[1]} {
    margin-top: 40px;
  }
`;
interface ILayoutProps {
  children: JSX.Element;
}
const HIDDEN_HEADER = ["/login/", "/login/regist/"];
// const HIDDEN_BANNER = ["/login", "/login/regist"];
// const HIDDEN_NAVIGATION = ["/login", "/login/regist"];
const HIDDEN_MYPAGE = [
  "/mypage/",
  "/mypage/mycart/",
  "/mypage/mypoint/",
  "/mypage/myprofile/",
];
export default function Layout(props: ILayoutProps) {
  const router = useRouter();
  const isHiddenHeader = HIDDEN_HEADER.includes(router.asPath);
  // const isHiddenBanner = HIDDEN_BANNER.includes(router.asPath);
  // const isHiddenNavigation = HIDDEN_NAVIGATION.includes(router.asPath);
  const isHiddenMypage = HIDDEN_MYPAGE.includes(router.asPath);
  // 로그인 회원가입페이지 padding-top 0
  let pageStyle = {};
  if (!isHiddenHeader && !isHiddenMypage) {
    pageStyle = {
      paddingTop: "72px",
    };
  } else {
    pageStyle = {
      paddingTop: "0",
    };
  }
  return (
    <>
      {!isHiddenHeader && <LayoutHeaderContainer />}
      {/* {!isHiddenBanner && <LayoutBannerContainer />} */}
      {/* {!isHiddenNavigation && <LayoutNavigationContainer />} */}
      {!isHiddenMypage ? (
        <Body style={pageStyle}>{props.children}</Body>
      ) : (
        <Mypage>
          <MypageWrap>
            <MyPageInfoContainer />
            <MypageContents style={pageStyle}>{props.children}</MypageContents>
          </MypageWrap>
        </Mypage>
      )}
    </>
  );
}
