import "./modal.scss";
import { FiClipboard } from "react-icons/fi";

const Modal = (props) => {
  return (
    <div>
      <div className="backdrop" onClick={props.closeModal}></div>
      <div className="card modal">
        <header className="header">
          <h2>URL encurtada</h2>
        </header>
        <div className="content-external">
          <p>https://www.youtube.com</p>
          <div className="content-internal">
            <span>http://www.bit.ly/zazazaza</span>
            <FiClipboard size={20} className="icon" />
          </div>
        </div>
        <footer className="actions">
          <button onClick={props.closeModal}>Fechar</button>
        </footer>
      </div>
    </div>
  );
};

export default Modal;
