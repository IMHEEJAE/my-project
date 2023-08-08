import { useMutation, useQuery } from "@apollo/client";
import MypageAvatarPresenter from "./MypageAvatar.presenter";
import {
  FETCH_USER_LOGGED_IN,
  UPDATE_USER,
  UPLOAD_FILE,
} from "./MypageAvatar.queries";
import { useState } from "react";
import { Modal } from "antd";

export default function MypageAvatarContainer() {
  const [files, setFiles] = useState(null);
  const [updateUser] = useMutation(UPDATE_USER);
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const { data } = useQuery(FETCH_USER_LOGGED_IN);

  const onChangeFileUrls = (file: any) => {
    setFiles(file);
  };

  const onClickUpdateUserPicture = async () => {
    try {
      const result = await uploadFile({
        variables: { file: files },
      });

      const myPicture = result.data?.uploadFile.url;

      await updateUser({
        variables: {
          updateUserInput: { picture: myPicture },
        },
        refetchQueries: [
          {
            query: FETCH_USER_LOGGED_IN,
          },
        ],
      });
      Modal.success({ content: `프로필이 수정 되었습니다` });
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return (
    <>
      <MypageAvatarPresenter
        data={data}
        onChangeFileUrls={onChangeFileUrls}
        onClickUpdateUserPicture={onClickUpdateUserPicture}
      />
    </>
  );
}
