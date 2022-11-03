import "./home.scss";
import Nav from "../../components/Nav";

const Home = () => {
  return (
    <div>
      <Nav />
      <div className="container">
        <h1>URL Shortener</h1>
        <form action="">
          <div className="container-input">
            <input type="text" />
            <button type="submit">Encurtar URL</button>
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