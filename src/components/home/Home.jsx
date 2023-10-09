import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const hadleCLick = () => {
    navigate("/PersonList");
  };
  return (
    <div>
      <button onClick={hadleCLick}>PersonList</button>
    </div>
  );
};

export default Home;
