import "./home.scss";
import Nav from "../../components/Nav";
import { useState } from "react";

const Home = () => {
  const [savedLink, setSavedLink] = useState("");

  const shortenLink = (e) => {
    e.preventDefault();
    console.log(savedLink);
  };

  return (
    <div>
      <Nav />
      <div className="container">
        <h1>URL Shortener</h1>
        <form action="">
          <div className="container-input">
            <input
              type="text"
              placeholder="Cole seu link aqui"
              value={savedLink}
              onChange={(e) => setSavedLink(e.target.value)}
            />
            <button type="submit" onClick={shortenLink}>
              Encurtar URL
            </button>
          </div>
        </form>
        <div className="container-output">
          <p className="long-link">https://www.youtube.com/</p>
          <p className="shortener-link">https://www.yt.com/</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
