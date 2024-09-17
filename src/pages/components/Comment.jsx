import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import CommentList from "./CommentList";

const Comment = ({ comment }) => {
  const navigate = useNavigate();
  const clickTitle = () => {
    navigate("/");
  };

  return (
    <CommentWrap>
      <h1 onClick={clickTitle}>Comment-API</h1>
      <CommentList />
    </CommentWrap>
  );
};

export default Comment;

const CommentWrap = styled.div`
  width: 100%;

  h1 {
    text-align: center;
    margin: 30px 0;
    cursor: pointer;
  }
`;
