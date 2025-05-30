import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { Modal } from "../components/Modal/Modal";

const ModalContext = createContext();

export function ModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState({
    title: "",
    text: "",
  });
  const [resolveCallback, setResolveCallback] = useState(null);

  const openModal = ({ title, text }) => {
    setContent({ title, text });
    setIsOpen(true);

    return new Promise((resolve) => {
      setResolveCallback(() => resolve);
    });
  };

  const closeModal = (confirmed) => {
    setIsOpen(false);
    setContent({ title: "", text: "" });

    if (resolveCallback) {
      resolveCallback(confirmed);
    }
  };

  return (
    <ModalContext.Provider
      value={{
        isOpen,
        openModal,
        closeModal,
      }}
    >
      {children}

      {isOpen && (
        <Modal>
          <h2>{content.title}</h2>

          <p>{content.text}</p>

          <div>
            <button onClick={() => closeModal(true)}>Confirmar</button>
            <button onClick={() => closeModal(false)}>Cancelar</button>
          </div>
        </Modal>
      )}
    </ModalContext.Provider>
  );
}

export const useModal = () => useContext(ModalContext);
