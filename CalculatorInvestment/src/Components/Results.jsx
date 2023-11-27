import { calculateInvestmentResults, formatter } from '../util/investment'
const Results = ({ inputValues }) => {
    const resultData = calculateInvestmentResults(inputValues);
    const initialInvest = resultData[0].valueEndOfYear - resultData[0].interest - resultData[0].annualInvestment;
    console.log(resultData)
    return (
        <table id='result'>
            <thead>
                <th>Year</th>
                <th>Invesment Value</th>
                <th>Interest (Year)</th>
                <th>Total Interest</th>
                <th>Invested Capital</th>
            </thead>
            <tbody>
                {resultData.map(result => {
                    const TotalInterest = result.valueEndOfYear - (initialInvest + result.year * result.annualInvestment);
                    const InvestedCapital = result.valueEndOfYear - TotalInterest;
                    return <tr key={result.year}>
                        <td>{result.year}</td>
                        <td>{formatter.format(result.valueEndOfYear)}</td>
                        <td>{formatter.format(result.interest)}</td>
                        <td>{formatter.format(TotalInterest)}</td>
                        <td>{formatter.format(InvestedCapital)}</td>
                    </tr>
                }

                )}
            </tbody>
        </table>
    );
}
export default Results;