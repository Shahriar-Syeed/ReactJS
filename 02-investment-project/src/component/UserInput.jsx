

export default function UserInput({ objectOfData }){
    // console.log(objectOfData['initial'].setFunction(Number(200)));
    // const newObjOfData = {...objectOfData};
   
    return <form id="user-input">
        
   
        <div className="input-group">
            <p>
                <label>Initial Investment</label>
                <input type="number" value={objectOfData.initial.value} onChange={(e)=>
                     objectOfData['initial'].setFunction(Number(e.target.value))} required />
            </p>
            <p>
                <label>Annual Investment</label>
                <input type="number" value={objectOfData.annual.value} 
                onChange={(e)=>
                    objectOfData.annual.setFunction(Number(e.target.value))} required />
            </p>
        </div>
        <div className="input-group">
            <p>
                <label>Expected Return</label>
                <input type="number" value={objectOfData.returns.value} 
                onChange={(e)=>
                     objectOfData['returns'].setFunction(Number(e.target.value))} required />
            </p>
            <p>
                <label>Duration</label>
                <input type="number" value={objectOfData.duration.value} onChange={(e)=>
                     objectOfData.duration.setFunction(Number(e.target.value))} required />
            </p>
        </div>
        
    </form>
}