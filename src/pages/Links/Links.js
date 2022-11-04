import "./Links.scss";
import { Link } from "react-router-dom";

import { BsFillTrashFill } from "react-icons/bs";
import { RiArrowGoBackFill } from "react-icons/ri";
import { MdContentPaste } from "react-icons/md";

const Links = () => {
  return (
    <body className="container-links">
      <header>
        <Link to="/home">
          <RiArrowGoBackFill className="icon" size={30} />
        </Link>
        <h2>Links armazenados</h2>
      </header>
      <div className="container-external">
        <div className="container-internal">
          <MdContentPaste className="icon" size={30} />
          <p>https://www.youtube.com/</p>
        </div>
        <BsFillTrashFill size={30} className="icon" />
      </div>
      <div className="container-external">
        <div className="container-internal">
          <MdContentPaste className="icon" size={30} />
          <p>https://www.facebook.com/</p>
        </div>
        <BsFillTrashFill size={30} className="icon" />
      </div>
    </body>
  );
};

export default Links;
