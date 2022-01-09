import React from "react";
import { ImCross } from "react-icons/im";
import { useGlobalContext } from "./UseContext";

const Modal = () => {
  const { CloseModal, isModal } = useGlobalContext();
  return (
    <div className={`modal-overlay ${isModal ? "show-modal" : null}`}>
      <div className="modal-container">
        <div className="cross-container">
          <ImCross className="cross-icon" onClick={CloseModal} />
        </div>

        <h1 className="modal-heading">Modal Content</h1>
        <p className="modal-content">
          One Piece is a Japanese manga series written and illustrated by
          Eiichiro Oda. It has been serialized in Shueisha's shōnen manga
          magazine Weekly Shōnen Jump since July 1997, with its individual
          chapters compiled into 101 tankōbon volumes as of December 2021
        </p>
      </div>
    </div>
  );
};

export default Modal;
