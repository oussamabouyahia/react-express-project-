import React,{useState} from "react";
// import { Link, Route, Routes } from "react-router-dom";
import axios from "axios";
import DataViz from "./DataViz";
import ReqTable from "./ReqTable";
import SubTable from "./SubTable";


const Dashboard = ({ subscribers, requests, setRequests, allRequests }) =>
 {
  const [reqTable,setReqTable]=useState(false)
  const [users,setUsers]=useState(false)
  const filterRequests = (event) => {
    event.target.value !== "All"
      ? setRequests(
          allRequests.filter((e) => e.pensionOption === event.target.value)
        )
      : setRequests(allRequests);
  };

  const updateStatus = (id, status) => {
    axios.put(`http://localhost:3001/api/requests/${id}`, { status: status });
    alert('request status updated!')
  };
  return (
    <div className="container">
     
      <div className="row"> 
        <div
          className="col-md-2 column-separator"
          style={{borderRight: "1px solid #ccc",marginTop:"5%"}}
        >
          <div className="btn-group-vertical" role="group" aria-label="Basic example">
          <button className="btn btn-outline-primary" onClick={()=>setReqTable(!reqTable)} >Review requests</button>
          <button className="btn btn-outline-primary" onClick={()=>setUsers(!users)}>Registred users </button></div>
          <h6 style={{marginTop:"10%"}}>requests by pension option </h6>
          <select
            className="form-select"
            defaultValue="All"
            onChange={filterRequests}
          >
            <option disabled>filter pension option</option>
            <option value="All">All</option>
            <option value="monthly">monthly</option>
            <option value="yearly">yearly</option>
            <option value="singlePayment"> one single payment</option>
          </select>
        </div>
        <div className="col-md-10"> <h3 style={{color:"Green",justifyContent:"center",margin:"5%"}}>Admin Dashboard</h3>
            <DataViz subscribers={subscribers} requests={requests}/>
           {reqTable?<ReqTable requests={requests} updateStatus={updateStatus}/>:null} 
           {users?<SubTable subscribers={subscribers}/>:null}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
