import { useState, useRef } from "react";
const TimerChallenge = ({ title, targetTime }) => {
    const timer = useRef();
    const [isLost, setIsLost] = useState(false)
    const [isStart, setIsStart] = useState(false)
    const HandleStart = () => {
        setIsLost(false);
        timer.current = setTimeout(() => {
            setIsLost(true);
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
            <h2>{title}</h2>
            {isLost && <p>You Lost</p>}
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
