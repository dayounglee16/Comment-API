import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { instance } from "./api/intance";

import Comment from "./components/Comment";

const Home = () => {
  const [comment, setComment] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await instance.get("/comments");
        setComment([...res.data.slice(0, 5)]);
      } catch (error) {
        console.error(`error ${error}`);
      }
    };

    getData();
  }, []);

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
        <Route path="comment" element={<Comment comment={comment} />} />
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
