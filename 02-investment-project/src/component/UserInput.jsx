

export default function UserInput({onChanges, inputOfUser}){
   
    return <form id="user-input">
        
        <p>{inputOfUser.initialInvestment}</p>
        <div className="input-group">
            <p>
                <label>Initial Investment</label>
                <input type="number" value={inputOfUser['initialInvestment']} onChange={(e)=>onChanges('initialInvestment', e.target.value)} required />
            </p>
            <p>
                <label>Annual Investment</label>
                <input type="number" value={inputOfUser['annualInvestment']} onChange={(e)=>onChanges('annualInvestment', e.target.value)} required />
            </p>
        </div>
        <div className="input-group">
            <p>
                <label>Expected Return</label>
                <input type="number" value={inputOfUser['expectedReturn']} onChange={(e)=>onChanges('expectedReturn', e.target.value)} required />
            </p>
            <p>
                <label>Duration</label>
                <input type="number" value={inputOfUser['duration']} onChange={(e)=>onChanges('duration', e['target']['value'])} required />
            </p>
        </div>
        
    </form>
}