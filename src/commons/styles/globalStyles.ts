import { css } from "@emotion/react";

export const breakpoints = [450, 769, 1366];
export const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);
// ${mq[0]} {
//   color: red;
// }
export const globalStyles = css`
  * {
    margin: 0;
    box-sizing: border-box;
    font-family: "MFL";
  }
  ul,
  li,
  ol {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  @font-face {
    font-family: "MFL";
    src: url("/fonts/SB_aggro_L.ttf");
  }
  @font-face {
    font-family: "MFM";
    src: url(/font/SB_aggro_M.ttf);
  }
  @font-face {
    font-family: "MFB";
    src: url(/font/SB_aggro_B.ttf);
  }

  .ant-dropdown-menu {
    .ant-dropdown-menu-item {
      padding: 0 !important;
    }
  }
  .ant-tabs-nav {
    margin: 0 auto;
    ::before {
      border-bottom: none !important;
    }
    .ant-tabs-nav-wrap {
      .ant-tabs-ink-bar-animated {
        background: #091e6f !important;
      }
    }
    .ant-tabs-tab {
      padding: 5px 0;
      :hover {
        color: #000 !important;
      }
    }
    .ant-tabs-tab-active .ant-tabs-tab-btn {
      color: #091e6f !important;
    }
  }
  ${mq[0]} {
    .ant-tabs .ant-tabs-tab + .ant-tabs-tab {
      margin-left: 10px;
    }
  }
`;

// const color = {
//   primary: "#091E6F",
//   yellow: " #E8E298",
//   white: "#E0DCD0",
//   red: "#BA664C",
//   gray: '#828282',
// };
