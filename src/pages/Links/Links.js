import { useState, useEffect } from "react";

import { getLinksSave, deleteLink } from "../services/storeLinks";

import "./Links.scss";
import Modal from "../../components/Modal";

import { Link } from "react-router-dom";

import { BsFillTrashFill } from "react-icons/bs";
import { RiArrowGoBackFill } from "react-icons/ri";
import { MdContentPaste } from "react-icons/md";

const Links = () => {
  const [myLinks, setMyLinks] = useState([]);
  const [data, setData] = useState({});
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    async function getLinks() {
      const result = await getLinksSave("@shortLinks");

      if (result.length === 0) {
        console.log("No links stored");
      }

      setMyLinks(result);
    }

    getLinks();
  }, []);

  function handleOpenLink(link) {
    setData(link);
    setShowModal(true);
  }

  async function handleDelete(id) {
    const result = await deleteLink(myLinks, id);

    if (result.length === 0) {
      //if there are no links saved, return
      console.log("No links stored");
    }

    setMyLinks(result);
  }

  return (
    <body className="container-links">
      <header>
        <Link to="/home">
          <RiArrowGoBackFill className="icon" size={30} />
        </Link>
        <h2>Links armazenados</h2>
      </header>
      {myLinks.map((link) => (
        <div key={link.id} className="container-external">
          <div className="container-internal">
            <MdContentPaste
              className="icon"
              size={60}
              onClick={() => handleOpenLink(link)}
            />
            <p>{link.long_url}</p>
          </div>
          <BsFillTrashFill
            size={30}
            onClick={() => handleDelete(link.id)}
            className="icon"
          />
        </div>
      ))}
      {showModal && (
        <Modal closeModal={() => setShowModal(false)} content={data} />
      )}
    </body>
  );
};

export default Links;
