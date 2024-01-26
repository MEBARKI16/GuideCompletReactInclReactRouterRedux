import { forwardRef } from "react";

const ResultsModal = forwardRef(({ targetTime, result }, ref) => {
    return (
        <dialog ref={ref} className="result-modal">
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