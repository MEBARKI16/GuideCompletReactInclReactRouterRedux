import { forwardRef, useImperativeHandle, useRef } from "react";

const ResultsModal = forwardRef(({ targetTime, result }, ref) => {
    const dialogRef = useRef();
    useImperativeHandle(ref, () => {
        return {
            open() {
                dialogRef.current.showModal();
            }
        }
    })
    return (
        <dialog ref={dialogRef} className="result-modal">
            <h2>You {result}</h2>
            <p>
                The target time was <strong>{targetTime} seconds.</strong>
            </p>
            <p>
                You stopped the timer with <strong>x seconds left</strong>
            </p>
            <form>
                <button>close</button>
            </form>
        </dialog>
    );
})
export default ResultsModal;