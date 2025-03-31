import "./ModalUi.css";

export const ModalUi = ({ children, onClose }) => {
  return (
    <div className="modal" onClick={onClose}>
      <div className="content-modal" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};
