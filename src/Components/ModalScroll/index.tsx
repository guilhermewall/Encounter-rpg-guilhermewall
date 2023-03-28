import { useOutsideClick } from "../../hooks/useOutsideClick";
import { Modal, Scroll } from "./styles";

export const ModalScroll = ({ children, callback }: any) => {
  const modalRef = useOutsideClick<HTMLDivElement>(() => callback(false));
  

  return (
    <Modal>
      <div className="overlay">
        <Scroll ref={modalRef}>
          <div className="container">{children}</div>
        </Scroll>
      </div>
    </Modal>
  );
};
