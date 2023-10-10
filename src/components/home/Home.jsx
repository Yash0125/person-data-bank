import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const hadlePersonList = () => {
    navigate("/PersonList");
  };
  return (
    <div>
      <button onClick={hadlePersonList}>PersonList</button>
    </div>
  );
};

export default Home;
