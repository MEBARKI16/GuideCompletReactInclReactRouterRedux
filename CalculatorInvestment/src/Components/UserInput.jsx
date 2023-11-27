import { useState } from "react";
const UserInput = () => {
    const [inputValues, setInputValues] = useState({ initial: '', annual: '', expected: '', duration: '' });
    const HandleChange = (x, y) => {
        setInputValues((prev) => { return { ...prev, [x]: y } })
        console.log(inputValues);
    }
    return (
        <form id="user-input">
            <div className="input-group">
                <p>
                    <label>Initial Investment</label>
                    <input type="number" value={inputValues.initial} onChange={(e) => { HandleChange("initial", e.target.value) }} required />
                </p>
                <p>
                    <label>Annual Investment</label>
                    <input type="number" value={inputValues.annual} onChange={(e) => { HandleChange("annual", e.target.value) }} required />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>Expected Return</label>
                    <input type="number" value={inputValues.expected} onChange={(e) => { HandleChange("expected", e.target.value) }} required />
                </p>
                <p>
                    <label>Duration</label>
                    <input type="number" value={inputValues.duration} onChange={(e) => { HandleChange("duration", e.target.value) }} required />
                </p>
            </div>
        </form>
    );
}
export default UserInput;