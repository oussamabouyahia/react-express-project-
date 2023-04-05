import React from 'react'

const SubTable = ({subscribers}) => {
  return (<div>
    <h3>Registred users</h3>
        <table className="table table-dark table-striped">
    <thead>
      <tr>
        <th>id</th>
        <th>Name</th>
        <th>Card ID</th>
        </tr>
        </thead>
        <tbody>
      {subscribers.map((e) => {
        return (
          <tr key={e.idusers}>
            <td>{e.idusers}</td>
            <td>{e.name}</td>
            <td>{e.email}</td>
            </tr>)})}
        </tbody>
        </table>
        
        </div>)
  
}

export default SubTable