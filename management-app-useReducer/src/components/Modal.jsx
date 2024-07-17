import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import ButtonAdd from "./ButtonAdd";

const Modal = forwardRef(function Modal({ children, buttonCaption }, ref) {
  const dialogRef = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
       
        dialogRef.current.showModal();
      }
    };
  });
  return createPortal(
    <dialog ref={dialogRef} className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md" style={{ border: "2px solid red" }}>
      {children}
      <form method="dialog" className="mt-4 text-right">
        <ButtonAdd>{buttonCaption}</ButtonAdd>
      </form>
    </dialog>,
    document.getElementById('modal-root')
  );
});

export default Modal;
