// import "./Links.scss";

import { BsFillTrashFill } from "react-icons/bs";
import { RiArrowGoBackFill } from "react-icons/ri";
import { MdContentPaste } from "react-icons/md";

const Links = () => {
  return (
    <body className="container-links">
      <header>
        <RiArrowGoBackFill className="icon" size={30} />
        <h1>Links armazenados</h1>
      </header>
      <div className="container-external">
        <div className="container-internal">
          <MdContentPaste className="icon" size={30} />
          <p>https://www.youtube.com/</p>
        </div>
        <BsFillTrashFill size={30} className="icon" />
      </div>
    </body>
  );
};

export default Links;
