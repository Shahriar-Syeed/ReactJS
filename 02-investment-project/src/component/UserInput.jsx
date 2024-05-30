

export default function UserInput({onChanges, initialInvestment, annualInvestment, expectedReturn, duration, setInitialInvestment, setAnnualInvestment, setExpectedReturn, setDuration }){
   
    return <form id="user-input">
        
        <p>{initialInvestment}</p>
        <div className="input-group">
            <p>
                <label>Initial Investment</label>
                <input type="number" value={initialInvestment} onChange={(e)=>setInitialInvestment(e.target.value)} required />
            </p>
            <p>
                <label>Annual Investment</label>
                <input type="number" value={annualInvestment} onChange={(e)=>setAnnualInvestment(e.target.value)} required />
            </p>
        </div>
        <div className="input-group">
            <p>
                <label>Expected Return</label>
                <input type="number" value={expectedReturn} onChange={(e)=>setExpectedReturn(e.target.value)} required />
            </p>
            <p>
                <label>Duration</label>
                <input type="number" value={duration} onChange={(e)=>setDuration(e['target']['value'])} required />
            </p>
        </div>
        
    </form>
}