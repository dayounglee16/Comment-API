import { useRecoilState } from "recoil";
import styled from "styled-components";
import { CommentsInputState } from "./recoil/atom";

const CommentInput = ({ addCommentItem }) => {
  const [CommentsInput, setCommentsInput] = useRecoilState(CommentsInputState);

  const onChangeCommentInput = (e) => {
    setCommentsInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addCommentItem();
  };

  return (
    <CommentInputBox className="comment-inputBox" onSubmit={handleSubmit}>
      <input
        type="text"
        value={CommentsInput}
        onChange={onChangeCommentInput}
      />
      <button type="submit">게시</button>
    </CommentInputBox>
  );
};

export default CommentInput;

const CommentInputBox = styled.form`
  text-align: center;
  display: flex;
  gap: 10px;

  input {
    outline: none;
    flex: 1;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
`;
