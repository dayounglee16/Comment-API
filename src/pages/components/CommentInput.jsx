import styled from "styled-components";

const CommentInput = () => {
  return (
    <CommentInputBox className="comment-inputBox">
      <input type="text" />
      <button>게시</button>
    </CommentInputBox>
  );
};

export default CommentInput;

const CommentInputBox = styled.form`
  input {
    outline: none;
  }
`;
