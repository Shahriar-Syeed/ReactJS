import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = forwardRef(function Modal({ children, buttonCaption }, ref) {
  const dialogRef = useRef();
  console.log(dialogRef);
  useImperativeHandle(ref, () => {
    return {
      open() {
        console.log("Opening modal");
        console.log(dialogRef.current);
        dialogRef.current.showModal();
      }
    };
  });
  return createPortal(
    <dialog ref={dialogRef} style={{ border: "2px solid red" }}>
      {children}
      <form method="dialog">
        <button>{buttonCaption}</button>
      </form>
    </dialog>,
    document.getElementById('modal-root')
  );
});

export default Modal;
