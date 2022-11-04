import "./modal.scss";
import { FiClipboard } from "react-icons/fi";

const Modal = (props) => {
  const copyLink = async () => {
    await navigator.clipboard.writeText(props.content.link);
  };

  return (
    <div>
      <div className="backdrop" onClick={props.closeModal}></div>
      <div className="card modal">
        <header className="header">
          <h2>URL encurtada</h2>
        </header>
        <div className="content-external">
          <p>{props.content.long_url}</p>
          <div className="content-internal">
            <span>{props.content.link}</span>
            <FiClipboard size={20} className="icon" onClick={copyLink} />
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
