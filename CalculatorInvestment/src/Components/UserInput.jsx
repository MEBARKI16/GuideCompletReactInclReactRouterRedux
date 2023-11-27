const UserInput = ({ setInputValues, inputValues }) => {
    const HandleChange = (x, y) => {
        setInputValues((prev) => { return { ...prev, [x]: y } })
        console.log(inputValues);
    }
    return (
        <form id="user-input">
            <div className="input-group">
                <p>
                    <label>Initial Investment</label>
                    <input type="number" value={inputValues.initialInvestment} onChange={(e) => { HandleChange("initialInvestment", e.target.value) }} required />
                </p>
                <p>
                    <label>Annual Investment</label>
                    <input type="number" value={inputValues.annualInvestment} onChange={(e) => { HandleChange("annualInvestment", e.target.value) }} required />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>Expected Return</label>
                    <input type="number" value={inputValues.expectedReturn} onChange={(e) => { HandleChange("expectedReturn", e.target.value) }} required />
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