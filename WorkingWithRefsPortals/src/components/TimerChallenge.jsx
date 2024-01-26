import { useState, useRef } from "react";
import ResultsModal from "./ResultsModal";
const TimerChallenge = ({ title, targetTime }) => {
    const timer = useRef();
    const resultRef = useRef();
    const [isStart, setIsStart] = useState(false)
    const HandleStart = () => {
        timer.current = setTimeout(() => {
            resultRef.current.open();
            setIsStart(false);
        }, targetTime * 1000);
        setIsStart(true)
    }
    const HandleStop = () => {
        clearTimeout(timer.current);
        setIsStart(false)
    }
    return (
        <section className="challenge">
            <ResultsModal ref={resultRef} result="low" targetTime={targetTime} />
            <h2>{title}</h2>
            <p className="challenge-time">
                {targetTime} second{targetTime > 1 ? "s" : ""}
            </p>
            <p>
                <button onClick={isStart ? HandleStop : HandleStart}>
                    {isStart ? "Stop" : "Start"} Challenge
                </button>
            </p>
            <p>
                {isStart ? "Time is running..." : "Time is inactive"}
            </p>
        </section>
    );
}
export default TimerChallenge;
