import styled from "styled-components";
import CommentInput from "./CommentInput";
import { instance } from "../api/intance";
import { useRecoilState } from "recoil";
import { CommentsInputState, CommentsState } from "./recoil/atom";
import { useRef } from "react";

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

  //삭제
  const deleteComment = async (comment) => {
    try {
      await instance.delete(`/comments/${comment}`);
      const filteredComment = comments.filter(
        (deleteComment) => deleteComment !== comment
      );
      setComments(filteredComment);
    } catch (error) {
      console.error(`error ${error}`);
    }
  };

  return (
    <>
      <CommentListBox className="CommentListBox">
        {comments.map((comment, i) => {
          return (
            <div className="commentList" key={i + 1}>
              <h4>
                {i + 1}. {comment.name}
                <span>({comment.email})</span>
              </h4>
              <p>{comment.body}</p>
              <div>
                <button onClick={() => deleteComment(comment)}>삭제</button>
              </div>
            </div>
          );
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
  height: 700px;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.1);

  .commentList {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 30px;

    h4 {
      border-right: 1px solid #ccc;
      padding-right: 20px;
      white-space: nowrap;
    }

    p {
      flex: 1;
    }
  }
`;
