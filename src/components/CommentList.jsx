import styled from "styled-components";
import CommentInput from "./CommentInput";
import { instance } from "../api/intance";
import { useRecoilState } from "recoil";
import { CommentsInputState, CommentsState } from "../recoil/atom";
import { useRef } from "react";
import CommentItem from "./CommentItem";

const CommentList = () => {
  const [commentsInput, setCommentsInput] = useRecoilState(CommentsInputState);
  const [comments, setComments] = useRecoilState(CommentsState);

  const idRef = useRef(6);

  //추가
  const addCommentItem = async () => {
    const newComment = {
      id: idRef.current++,
      name: "dayoung",
      email: "id46827@gmail.com",
      body: commentsInput,
    };

    try {
      if (commentsInput === "") {
        return;
      }
      const res = await instance.post("/comments", newComment);
      setComments([...comments, res.data]);
      setCommentsInput("");
    } catch (error) {
      console.error(`error ${error}`);
    }
  };

  return (
    <>
      <CommentListBox className="CommentListBox">
        {comments.map((comment, i) => {
          return <CommentItem comment={comment} key={i + 1} />;
        })}

        <CommentInput addCommentItem={addCommentItem} />
      </CommentListBox>
    </>
  );
};

export default CommentList;

const CommentListBox = styled.div`
  border: 1px solid #eee;
  border-radius: 5px;
  padding: 20px;
  width: 100%;
  min-height: 700px;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;
