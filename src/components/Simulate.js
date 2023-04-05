import React,{useState} from "react";

const Simulate = () => {
    const[pay,setPay]=useState(0)
    const[yearsLeft,setYearsLeft]=useState(0)
    const [option,setOption]=useState("monthly")
    const[result,setResult]=useState(0)
    const[display,setDisplay]=useState(false)
  
    const calculatePension=(event)=>{
   event.preventDefault()
   setDisplay(true) 
  if(option==="monthly") setResult(pay*1.1)
  else if (option==="yearly") setResult(pay*12*1.07)
  else setResult(pay*12*yearsLeft*1.05)
  
  }


  return (
    <div className="container" style={{marginTop:"5%"}}>
      <form onSubmit={calculatePension} >
        <div className="mb-3">
          <label className="form-label">Monthly contribution</label>
          <input type="number" className="form-control" onChange={(e)=>setPay(e.target.value)}/>
        </div>
        <div className="mb-3">
          <label className="form-label">
            Total years left before retirement
          </label>
          <input type="number" className="form-control" onChange={(e)=>setYearsLeft(e.target.value)}/>
        </div>
        <div className="mb-3">
          <label className="form-label">Pension option</label>
          <select className="form-select" defaultValue="monthly" onChange={(e)=>setOption(e.target.value)} >
          <option disabled>choose pension option</option>
            <option value="monthly">monthly</option>
            <option value="yearly">yearly</option>
            <option value="one single payment"> one single payment</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary">
          Get your Pension
        </button>
       {display?<p style={{color:'Green'}}> <span>your pension will be </span> {result} paid  {option} </p>:null}
      </form>
    </div>
  );
};

export default Simulate;
