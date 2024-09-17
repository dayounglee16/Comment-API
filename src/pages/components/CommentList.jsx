import styled from "styled-components";

const CommentList = () => {
  return (
    <CommentListBox className="CommentListBox">
      <h4>
        이름 <span>(이메일)</span>
      </h4>
      <p>댓글</p>
      <div>
        <button>삭제</button>
      </div>
    </CommentListBox>
  );
};

export default CommentList;

const CommentListBox = styled.div`
  border: 1px solid #eee;
  border-radius: 5px;
  padding: 20px;
  width: 100%;
  height: 600px;
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.1);

  p {
    width: 60%;
  }
`;
