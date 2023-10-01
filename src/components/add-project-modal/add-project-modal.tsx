import { useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";

import Portal from "../portal/portal";

import "./add-project-modal.scss";

type TProps = {
  isOpen: boolean;
  onClose: () => void;
};

const AddProjectModal = ({ isOpen, onClose }: TProps) => {
  const modalRef = useRef(null);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <Portal wrapperId="portal">
      <CSSTransition
        in={isOpen}
        nodeRef={modalRef}
        timeout={120}
        classNames="modal-transition"
        unmountOnExit
      >
        <div className="modal" ref={modalRef}>
          <div className="add-project">
            <div className="add-project__body">
              <div className="add-project__title">Новый проект</div>
              {/* <div className="add-project__name">Название</div> */}
              <input type="text" className="add-project__name" placeholder="Название" />
              {/* <div className="add-project__description">
                Несколько слов о проекте
              </div> */}
              <input type="text" className="add-project__description" placeholder="Несколько слов о проекте" />
            </div>
            <div className="add-projects__btns">
              <button className="btn" onClick={onClose}>
                Отмена
              </button>
              <button className="btn btn__ok" onClick={onClose}>
                Создать
              </button>
            </div>
          </div>
        </div>
      </CSSTransition>
    </Portal>
  );
};

export default AddProjectModal;
