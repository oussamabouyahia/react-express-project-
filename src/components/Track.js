import React, { useState,useEffect } from "react";
import axios from "axios";
const Track = () => {
  const [name, setName] = useState("");
  const [cardId, setCardId] = useState("");
  const [requests,setRequests]=useState([])
  const [trackMessage,setTrackMessage]=useState({})
  const[wrong,setWrong]=useState("")

  useEffect(()=>{
    axios.get('http://localhost:3001/api/requests').then((res) => {
        setRequests(res.data)
  })},[])
  const findRequest = (event) => {
    event.preventDefault();
    if(name&&cardId){
        let result = requests.find((e) => e.name === name && e.idcard === cardId);
        setTrackMessage(result)
    }
    else{
        setWrong("wrong name/card id  combination")
    }
    
  };
  return (
    <div className="container">
      <form className="row g-3" onSubmit={findRequest}>
        <input
          className="form-control"
          type="text"
          placeholder="enter your name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="form-control"
          type="text"
          placeholder="enter your card id"
          onChange={(e) => setCardId(e.target.value)}
        />
        <button type="submit" className="btn btn-primary">
          Find my request
        </button>
      </form>
      {trackMessage.name?(<div style={{color:"green",margin:"5%"}}><ul>
        <li>your request number is:{trackMessage.idrequest}</li>
      <li> submitted on: {trackMessage.date}</li>
      <li>status: {trackMessage.status} </li>
      </ul>
      </div>):null}
      {wrong && <p style={{color:"red",margin:"5%"}}>{wrong}</p>}
    </div>
  );
};

export default Track;
