import "./home.scss";
import Nav from "../../components/Nav";
import Modal from "../../components/Modal";
import { useState } from "react";
import api from "../services/api";

const Home = () => {
  const [link, setLink] = useState("");
  const [data, setData] = useState({});
  const [showModal, setShowModal] = useState(false);

  const shortenLink = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("/shorten", {
        long_url: link,
      });

      setData(response.data);
      setShowModal(true);
      setLink("");
    } catch {
      alert("Erro ao gerar o link");
      setLink("");
    }
  };

  return (
    <div>
      <Nav />
      <div className="container">
        <h1>URL Shortener</h1>
        <p>Insira abaixo o seu link para ser encurtado</p>
        <form action="">
          <div className="container-input">
            <input
              type="text"
              placeholder="Cole seu link aqui"
              value={link}
              onChange={(e) => setLink(e.target.value)}
            />
            <button onClick={shortenLink}>Encurtar</button>
          </div>
        </form>
        {showModal && (
          <Modal closeModal={() => setShowModal(false)} content={data} />
        )}
      </div>
    </div>
  );
};

export default Home;
