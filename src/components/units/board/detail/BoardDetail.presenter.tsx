import { getDate } from "../../../../commons/utils/utils";
import { Tooltip } from "antd";
import * as S from "./BoardDetail.styles";
import { BoardDetailPresenterProps } from "./BoardDetail.types";
import BoardCommentWriteContainer from "../../boardComment/write/BoardCommentWrite.container";
import BoardCommentListContainer from "../../boardComment/list/BoardCommentList.container";
export default function BoardDetailPresenter(props: BoardDetailPresenterProps) {
  return (
    <>
      <S.Wrapper>
        <S.BorderWrap>
          <S.SideA>
            <S.Header>
              <S.HeaderLeft>
                <S.Avatar
                  src={
                    props.data?.fetchBoard.user?.picture
                      ? `https://storage.googleapis.com/${props.data?.fetchBoard.user?.picture}`
                      : "/images/avatar.png"
                  }
                />
                <S.AvatarInfo>
                  <S.Writer>{props.data?.fetchBoard.writer}</S.Writer>
                  <S.AvatarDate>
                    {getDate(props.data?.fetchBoard.createdAt)}
                  </S.AvatarDate>
                </S.AvatarInfo>
              </S.HeaderLeft>
              <S.HeaderRight>
                <Tooltip
                  placement="topRight"
                  title={`${props.data?.fetchBoard.youtubeUrl ?? ""}`}
                  trigger={"click"}
                >
                  <S.IconClip src="/images/icon/icon_clip.svg" />
                </Tooltip>
                <Tooltip
                  placement="topRight"
                  title={`${
                    props.data?.fetchBoard.boardAddress?.address ?? ""
                  } ${
                    props.data?.fetchBoard.boardAddress?.addressDetail ?? ""
                  }`}
                  trigger={"click"}
                >
                  <S.IconLocation src="/images/icon/icon_location.svg" />
                </Tooltip>
              </S.HeaderRight>
            </S.Header>
            <S.Body>
              <S.ContTop>
                <S.Title>{props.data?.fetchBoard.title}</S.Title>
                <S.CountWrap>
                  <S.LikeWrap>
                    <S.LikeIcon onClick={props.onClickLike} />
                    <S.LikeCount>
                      
                      {props.data?.fetchBoard.likeCount}
                    </S.LikeCount>
                  </S.LikeWrap>
                  <S.LikeWrap>
                    <S.DisLikeIcon onClick={props.onClickDislike} />
                    <S.DisLikeCount>
                      {props.data?.fetchBoard.dislikeCount}
                    </S.DisLikeCount>
                  </S.LikeWrap>
                </S.CountWrap>
              </S.ContTop>
              <S.Contents>{props.data?.fetchBoard.contents}</S.Contents>
              <S.ImgWrap>
                {props.data?.fetchBoard.images
                  ?.filter((el: string) => el)
                  .map((el: string) => (
                    <S.Img
                      key={el}
                      src={`https://storage.googleapis.com/${el}`}
                    />
                  ))}
              </S.ImgWrap>
            </S.Body>
            <S.ButtonWrap>
              <S.Button onClick={props.onClickBoardsList}>목록으로</S.Button>
              <S.Button onClick={props.onClickBoardEdit}>수정하기</S.Button>
              <S.Button onClick={props.onClickDelete}>삭제하기</S.Button>
            </S.ButtonWrap>
          </S.SideA>
          <S.SideB>
            <BoardCommentWriteContainer />
            <BoardCommentListContainer />
          </S.SideB>
        </S.BorderWrap>
      </S.Wrapper>
    </>
  );
}
