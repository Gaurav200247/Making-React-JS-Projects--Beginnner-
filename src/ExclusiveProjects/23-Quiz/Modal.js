import React from "react";
import { useGlobalstate } from "./Context";

const Modal = () => {
  const { isModalOpen, correct, questions, CloseModal } = useGlobalstate();
  return (
    <div className={`modal-screen ${isModalOpen ? "show-modal" : null}`}>
      <div className="modal-container">
        <h1 className="modal-heading">Congrats!</h1>
        <span className="modal-info">
          You answered {((correct / questions.length) * 100).toFixed(0)}% of
          questions correctly
        </span>
        <button
          className="btn btn-warning modal-submit-btn"
          onClick={() => CloseModal()}
        >
          Play Again
        </button>
      </div>
    </div>
  );
};

export default Modal;
