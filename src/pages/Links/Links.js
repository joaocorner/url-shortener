import { useState, useEffect } from "react";

import { getLinksSave } from "../services/storeLinks";

import "./Links.scss";
import { Link } from "react-router-dom";

import { BsFillTrashFill } from "react-icons/bs";
import { RiArrowGoBackFill } from "react-icons/ri";
import { MdContentPaste } from "react-icons/md";

const Links = () => {
  const [myLinks, setMyLinks] = useState([]);

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
            <MdContentPaste className="icon" size={60} />
            <p>{link.long_url}</p>
          </div>
          <BsFillTrashFill size={30} className="icon" />
        </div>
      ))}
    </body>
  );
};

export default Links;
