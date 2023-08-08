import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  ApolloLink,
  fromPromise,
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { onError } from "@apollo/client/link/error";
import {
  accessTokenState,
  restoreAccessTokenLoadable,
} from "../../../commons/store";
import { useRecoilState, useRecoilValueLoadable } from "recoil";
import { useEffect } from "react";
import { getAccessToken } from "../../../commons/libraries/getAccessToken";

const GLOBAL_STATE = new InMemoryCache();

interface IApolloSettingProps {
  children: JSX.Element;
}

export default function ApolloSetting(props: IApolloSettingProps) {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const restoreAccess = useRecoilValueLoadable(restoreAccessTokenLoadable);

  useEffect(() => {
    // 로컬스토리지에 저장
    void restoreAccess.toPromise().then((newAccessToken) => {
      console.log("newAccessToken---------------------------", newAccessToken);
      setAccessToken(newAccessToken ?? "");
    });
  }, []);

  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    // 1. 에러 캐치
    if (typeof graphQLErrors !== "undefined") {
      for (const err of graphQLErrors) {
        // 1-2. 해당 에러가 토큰만료 에러인지 체크(UNAUTHENTICATED)
        if (err.extensions.code === "UNAUTHENTICATED") {
          return fromPromise(
            // 2. refreshToken으로 accessToken을 재발급 받기
            getAccessToken().then((newAccessToken) => {
              setAccessToken(newAccessToken ?? "");
              // 3. 재발급 받은 accessToken으로 방금 실패한 쿼리 재요청하기
              operation.setContext({
                headers: {
                  ...operation.getContext().headers, //  Authorization: `Bearer ${accessToken}`  => 만료된 토큰이 추가되어 있는 상태
                  // 3-2 토큰만 새걸로 바꿔치기
                  Authorization: `Bearer ${newAccessToken}`,
                },
              });
              // 3-3. 방금 수정한 쿼리 재요청하기
            })
          ).flatMap(() => forward(operation));
        }
      }
    }
  });

  const uploadLink = createUploadLink({
    uri: "https://backend-practice.codebootcamp.co.kr/graphql",
    headers: { Authorization: `Bearer ${accessToken}` },
    credentials: "include",
  });
  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink as unknown as ApolloLink, errorLink]),
    cache: GLOBAL_STATE, // 페이지 전환(_APP.tsx리랜더) 되어도 캐시 유지!!
  });
  return (
    <>
      <ApolloProvider client={client}>{props.children}</ApolloProvider>
    </>
  );
}
