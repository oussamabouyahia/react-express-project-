import React, { useReducer, useState } from "react";
import axios from 'axios'


function formReducer(state, action) {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.payload };
    case "SET_EMAIL":
      return { ...state, email: action.payload };
    case "SET_PASSWORD":
      return { ...state, password: action.payload };
    default:
      return state;
  }
}
const Subscribe = ({subscribers,setSubscribers,url}) => {
  
  const [form, dispatch] = useReducer(formReducer, {
    name: "",
    email: "",
    password: "",
  });
 const [errorSubscribe,setErrorSubscribe]=useState(false)
 const [message,setMessage]=useState("")


const noDuplicateSubscribe =()=>{
 const result= subscribers.filter(e=>e.name===form.name||e.email===form.email)
 return !result.length
}

 const isValidSubscribtion=()=>{
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(form.email)&& form.password.length>7 && form.name
 }
const subscribe = () => {
    if(isValidSubscribtion() && noDuplicateSubscribe()){
      axios.post(url,form)
      setErrorSubscribe(false)
      setMessage('you are signed up successfully, please sign to submit a request')
    }
      else{
        setErrorSubscribe(true)
        setMessage("")
      }
    
  };
  return (
    <div className=" container ">
      
      <input style={{margin:"2%"}}
        type="text"
        className="form-control"
        placeholder="enter your name"
        onChange={(event) =>
          dispatch({ type: "SET_NAME", payload: event.target.value })
        }
      />
      <input style={{margin:"2%"}}
        type="email"
        className="form-control"
        placeholder="enter your email example@email.com"
        onChange={(event) =>
          dispatch({ type: "SET_EMAIL", payload: event.target.value })
        }
      />
      <input style={{margin:"2%"}}
        type="password"
        className="form-control"
        placeholder="enter your password no less than 08 characters"
        value={form.password}
        onChange={(event) =>
          dispatch({ type: "SET_PASSWORD", payload: event.target.value })
        }
      />

      <button onClick={subscribe} className="btn btn-primary" style={{margin:"2%"}}>Subscribe</button>
      {(errorSubscribe)?<p style={{color:"red"}}><span >failed for one of the reasons below :</span><br/>
      -No respecting email/password input standard<br/> -The name/email already used</p>:null}
      {message?<p style={{color:"green"}}>{message}</p>:null}
    </div>
  );
};

export default Subscribe;
