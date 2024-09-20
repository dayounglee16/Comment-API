import styled from "styled-components";
import { instance } from "../api/intance";
import { useRecoilState } from "recoil";
import { CommentsState } from "../recoil/atom";

const CommentItem = ({ comment }) => {
  const [comments, setComments] = useRecoilState(CommentsState);

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
    <CommentItemBox>
      <h4>
        {comment.name}
        <span>({comment.email})</span>
      </h4>
      <p>{comment.body}</p>
      <div>
        <button onClick={() => deleteComment(comment)}>삭제</button>
      </div>
    </CommentItemBox>
  );
};

export default CommentItem;

const CommentItemBox = styled.div`
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
`;
