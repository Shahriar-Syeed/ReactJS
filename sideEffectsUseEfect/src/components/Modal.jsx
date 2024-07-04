import { forwardRef, useImperativeHandle, useRef, useEffect } from "react";
import { createPortal } from "react-dom";

// const Modal = forwardRef(function Modal({ children }, ref) {
//   const dialog = useRef();

//   useImperativeHandle(ref, () => {
//     return {
//       open: () => {
//         dialog.current.showModal();
//       },
//       close: () => {
//         dialog.current.close();
//       },
//     };
//   });

//   return createPortal(
//     <dialog className="modal" ref={dialog}>
//       {children}
//     </dialog>,
//     document.getElementById('modal')
//   );
// });
export default function Modal({ open,onClose, children }) {
  const dialog = useRef();

  useEffect(() => {
    if (open) {
      console.log(dialog.current.showModal);
      dialog.current.showModal();//fault: bracket not written '()'
    } else {
      dialog.current.close();
    }
  }, [open]);

  return createPortal(
    <dialog ref={dialog} className="modal" onClose={onClose}>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
};


