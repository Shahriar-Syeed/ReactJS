// export default function ResultModal({ref, result, targetTime}){
//     return (
//         <dialog className="result-modal" refs={ref} >
//             <h2>You {result}! </h2>
//             <p>The target time was <strong>{targetTime} second{targetTime > 1 && 's'}</strong></p>
//             <p>You stopped the timer with <strong> X seconds left.</strong></p>
//             <form method="dialog">
//                 <button>Close</button>
//             </form>
//         </dialog>
//     )
// }
import { forwardRef, useImperativeHandle, useRef } from "react";
const ResultModal = forwardRef(function ResultModal(
  { result, targetTime },
  ref
) {

  const dialogModal= useRef();

  useImperativeHandle(ref, ()=>{
    return{
      open(){
        dialogModal.current.showModal();
      }
    };
  });
  return (
    <dialog className="result-modal" 
    // ref={ref}
    ref={dialogModal}
    >
      <h2>You {result}! </h2>
      <p>
        The target time was{" "}
        <strong>
          {targetTime} second{targetTime > 1 && "s"}
        </strong>
      </p>
      <p>
        You stopped the timer with <strong> X seconds left.</strong>
      </p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
});
export default ResultModal;
