import { Routes, Route } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<h1>Comment-API</h1>} />
      </Routes>
      <button>Comment-List🗨️</button>
    </>
  );
};

export default Home;
