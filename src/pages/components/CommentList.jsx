import styled from "styled-components";
import CommentInput from "./CommentInput";

const CommentList = () => {
  return (
    <>
      <CommentListBox className="CommentListBox">
        <div className="commentList">
          <h4>
            이름 <span>(이메일)</span>
          </h4>
          <p>댓글</p>
          <div>
            <button>삭제</button>
          </div>
        </div>
        <CommentInput />
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
  height: 650px;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  box-shadow: 0 0 25px rgba(0, 0, 0, 0.1);

  .commentList {
    display: flex;
    justify-content: space-between;
    gap: 20px;

    p {
      width: 60%;
    }
  }
`;
