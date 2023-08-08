import { useRouter } from "next/router";
import styled from "@emotion/styled";
// import LayoutNavigationContainer from "./navigation/LayoutNavigation.container";
// import LayoutBannerContainer from "./banner/LayoutBanner.container";
import LayoutHeaderContainer from "./header/LayoutHeader.container";
import MyPageInfoContainer from "../../units/mypage/Info/MypageInfo.container";
import { mq } from "../../../commons/styles/globalStyles";

const Body = styled.div`
  min-height: calc(100vh - 72px);
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #e0dcd0;
`;
const Mypage = styled.div`
  min-height: calc(100vh - 72px);
  display: flex;
  background-color: #e0dcd0;
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
const HIDDEN_HEADER = ["/login", "/login/regist"];
// const HIDDEN_BANNER = ["/login", "/login/regist"];
// const HIDDEN_NAVIGATION = ["/login", "/login/regist"];
const HIDDEN_MYPAGE = [
  "/mypage",
  "/mypage/mycart",
  "/mypage/mypoint",
  "/mypage/myprofile",
];
export default function Layout(props: ILayoutProps) {
  const router = useRouter();
  const isHiddenHeader = HIDDEN_HEADER.includes(router.asPath);
  // const isHiddenBanner = HIDDEN_BANNER.includes(router.asPath);
  // const isHiddenNavigation = HIDDEN_NAVIGATION.includes(router.asPath);
  const isHiddenMypage = HIDDEN_MYPAGE.includes(router.asPath);

  return (
    <>
      {!isHiddenHeader && <LayoutHeaderContainer />}
      {/* {!isHiddenBanner && <LayoutBannerContainer />} */}
      {/* {!isHiddenNavigation && <LayoutNavigationContainer />} */}
      {!isHiddenMypage && <Body>{props.children}</Body>}
      {isHiddenMypage && (
        <Mypage>
          <MypageWrap>
            <MyPageInfoContainer />
            <MypageContents>{props.children}</MypageContents>
          </MypageWrap>
        </Mypage>
      )}
    </>
  );
}
