import { calculateInvestmentResults,formatter } from '../util/investment.js';
export default function Results({id,initialInvestment, annualInvestment, expectedReturn, duration}){
    
    const resultData =calculateInvestmentResults({
        ['initialInvestment']:initialInvestment ,
        ['annualInvestment']: annualInvestment, 
        ['expectedReturn']: expectedReturn, 
        ['duration']: duration  
    });
   
    console.log(resultData)
    return <table id={id}>
        <thead>
            <tr>
                <th>Year</th>
                <th>Investment Value</th>
                <th>Interest (Year)</th>
                <th>Total Interest</th>
                <th>Invest Capital</th>
            </tr>
        </thead>
        <tbody>
            {resultData.map(yearData =>{
                const totalInterest = yearData['valueEndOfYear']-yearData['annualInvestment'] *yearData['year']-initialInvestment;

                const totalAmountInvestment = yearData['valueEndOfYear']- totalInterest;

                return (<tr key={yearData['year']}>
                    <td>{yearData['year']}</td>
                    <td>{formatter.format(yearData['valueEndOfYear'])}</td>
                    <td>{formatter.format(yearData['interest'])}</td>
                    <td>{formatter.format(totalInterest)}</td>
                    <td>{formatter.format(totalAmountInvestment)}</td>
                </tr>);
            })}
        </tbody>
    </table>;
}