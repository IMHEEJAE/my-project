import { Modal } from "antd";
import { useRouter } from "next/router";
import { useEffect } from "react";

export const withAuth = (Component: any) => (props: any) => {
  const router = useRouter();

  useEffect(() => {
    const accessToken = localStorage.getItem("refreshToken");
    if (!accessToken) {
      Modal.error({ content: "로그인 한 사람만 입장가능합니다." });
      void router.push("/");
    }
  }, []);

  return <Component {...props} />;
};
