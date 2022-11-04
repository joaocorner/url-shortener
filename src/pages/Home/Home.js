import "./home.scss";
import Nav from "../../components/Nav";
import Modal from "../../components/Modal";
import { useState } from "react";
import api from "../services/api";

const Home = () => {
  const [savedLink, setSavedLink] = useState("");
  const [showModal, setShowModal] = useState(false);

  const shortenLink = async (e) => {
    try {
      const response = await api.post("/shorten", {
        long_url: savedLink,
      });

      console.log(response);
    } catch {
      alert("Erro ao gerar o link");
    }
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
        {showModal && <Modal closeModal={() => setShowModal(false)} />}
      </div>
    </div>
  );
};

export default Home;
