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
  max-width: 800px;
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
