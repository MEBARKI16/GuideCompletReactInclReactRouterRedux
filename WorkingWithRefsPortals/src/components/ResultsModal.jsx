import { forwardRef, useImperativeHandle, useRef } from "react";

const ResultsModal = forwardRef(({ targetTime, tempsRestant, HandleReset }, ref) => {
    const x = (tempsRestant / 1000).toFixed(2);
    const isLow = tempsRestant <= 0;
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
            {isLow && <h2>You Low</h2>}
            <p>
                The target time was <strong>{targetTime} seconds.</strong>
            </p>
            <p>
                You stopped the timer with <strong>{x} seconds left</strong>
            </p>
            <form>
                <button onClick={HandleReset}>close</button>
            </form>
        </dialog>
    );
})
export default ResultsModal;