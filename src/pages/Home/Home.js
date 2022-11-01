import React from "react";
import "./home.scss";

const Home = () => {
  return (
    <div>
      <div>
        <form action="">
          <div className="container-input">
            <input type="text" />
            <button type="submit">Encurtar URL</button>
          </div>
        </form>
      </div>
      <div className="container-output">
        <p className="long-link"></p>
        <p className="shortener-link"></p>
      </div>
    </div>
  );
};

export default Home;
