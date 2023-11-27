import { calculateInvestmentResults } from '../util/investment'
const Results = ({ inputValues }) => {
    const resultData = calculateInvestmentResults(inputValues);
    console.log(resultData)
    return (
        <p>Results....</p>
    );
}
export default Results;