import { useState, useRef } from "react";
import ResultsModal from "./ResultsModal";
const TimerChallenge = ({ title, targetTime }) => {
    const timer = useRef();
    const resultRef = useRef();
    const [tempsRestant, setTempsRestant] = useState(targetTime * 1000);
    let timerIsActive = (tempsRestant > 0) && (tempsRestant < targetTime * 1000);
    if (tempsRestant <= 0) {
        clearInterval(timer.current);
        resultRef.current.open();
    }

    const HandleReset = () => {
        setTempsRestant(targetTime * 1000);
    }
    const HandleStart = () => {
        timer.current = setInterval(() => {
            setTempsRestant((prev) => { return (prev - 10) });
        }, 10);
    }
    const HandleStop = () => {
        clearInterval(timer.current);
        resultRef.current.open();
    }
    return (
        <section className="challenge">
            <ResultsModal ref={resultRef} targetTime={targetTime} tempsRestant={tempsRestant} HandleReset={HandleReset} />
            <h2>{title}</h2>
            <p className="challenge-time">
                {targetTime} second{targetTime > 1 ? "s" : ""}
            </p>
            <p>
                <button onClick={timerIsActive ? HandleStop : HandleStart}>
                    {timerIsActive ? "Stop" : "Start"} Challenge
                </button>
            </p>
            <p>
                {timerIsActive ? "Time is running..." : "Time is inactive"}
            </p>
        </section>
    );
}
export default TimerChallenge;
