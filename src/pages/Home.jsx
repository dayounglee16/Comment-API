import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { instance } from "./api/intance";
import { useRecoilState } from "recoil";

import Comment from "./components/Comment";
import { CommentsState } from "./components/recoil/atom";

const Home = () => {
  const [, setComments] = useRecoilState(CommentsState);

  //데이터 조회
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await instance.get("/comments");
        setComments([...res.data.slice(0, 5)]);
      } catch (error) {
        console.error(`error ${error}`);
      }
    };

    getData();
  }, [setComments]);

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
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 30px;

  header {
    display: flex;
    justify-content: space-between;
  }
`;
