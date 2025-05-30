import "./Modal.css";
import { createPortal } from "react-dom";

export function Modal({ children }) {
  return createPortal(
    <div className="modal-container">
      <div className="modal-content">{children}</div>
    </div>,
    document.getElementById("modal")
  );
}
