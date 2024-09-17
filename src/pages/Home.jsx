import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import Comment from "./components/Comment";

const Home = () => {
  const navigate = useNavigate();

  const clickCommentList = () => {
    navigate("/comment");
  };

  return (
    <Container>
      <Routes>
        <Route
          path="/"
          element={
            <header>
              <h1>Comment-API</h1>
              <button onClick={clickCommentList}>Comment ⟫</button>
            </header>
          }
        />
        <Route path="comment" element={<Comment />} />
      </Routes>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  margin-top: 30px;

  header {
    display: flex;
    justify-content: space-between;
  }
`;
