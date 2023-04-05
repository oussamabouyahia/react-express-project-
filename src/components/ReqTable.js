import React from 'react'

const ReqTable = ({requests,updateStatus}) => {
  return (
    <div><h3>Requests </h3>
        <table className="table table-primary">
        
    <thead>
      <tr>
        <th>id</th>
        <th>Name</th>
        <th>Card ID</th>
        <th>Years to retire</th>
        <th>Pension Option</th>
        <th>Monthly Payment</th>
        <th>Gross Salary</th>
        <th>Adress</th>
        <th>Submission Date</th>
        <th>Request Status</th>
        <th>confirm response </th>
      </tr>
    </thead>
    <tbody>
      {requests.map((e) => {
        return (
          <tr key={e.idrequest} style={(e.status==='accept')?{backgroundColor:"green"}:null} >
            <td>{e.idrequest}</td>
            <td>{e.name}</td>
            <td>{e.idcard}</td>
            <td>{e.leftYears}</td>
            <td>{e.pensionOption}</td>
            <td>{e.monthlyPayment}</td>
            <td>{e.grossSalary}</td>
            <td>{e.adress}</td>
            <td>{e.date}</td>
            <td>
              <select
                className="form-select"
                defaultValue="pending"
                onChange={(event) => (e.status = event.target.value)}
              >
                <option value="pending">pending</option>
                <option value="reject">rejected</option>
                <option value="accept">accepted</option>
              </select>
            </td>
            <td>
              <button
                className="btn btn-outline-success"
                onClick={() => updateStatus(e.idrequest, e.status)}
              >
                complete
              </button>
            </td>
          </tr>
        );
      })}
    </tbody>
  </table></div>
  )
}

export default ReqTable