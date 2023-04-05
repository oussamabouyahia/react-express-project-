import React, { useReducer, useState } from "react";
import axios from "axios";
import Track from "./Track";
let initialState = {
  name: "",
  card: "",
  grossSalary: "",
  yearsToRetirement: "",
  pensionOption: "",
  monthlyPayment: "",
  adress: "",
  date: new Date(),
  status: "pending",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "setName":
      return { ...state, name: action.payload };
    case "setCard":
      return { ...state, card: action.payload };
    case "setSalary":
      return { ...state, grossSalary: action.payload };
    case "yearsTo":
      return { ...state, yearsToRetirement: action.payload };
    case "setPension":
      return { ...state, pensionOption: action.payload };
    case "setMonthly":
      return { ...state, monthlyPayment: action.payload };
    case "setAdress":
      return { ...state, adress: action.payload };
    default:
      return state;
  }
};
const NewRequest = ({requests}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [displayRequest, setDisplayRequest] = useState("");
  const [submission,setSubmission]=useState("")
  const submitRequest = async (e) => {
    e.preventDefault();
    if (
      state.name &&
      state.card &&
      state.grossSalary &&
      state.yearsToRetirement &&
      state.pensionOption &&
      state.adress
    ) {
      await axios.post("http://localhost:3001/api/requests", state);

      setDisplayRequest("request submitted with success");
    } else {
      setDisplayRequest(
        "request wasn't submitted correctly please fill all inputs"
      );
    }
  };
  return (
    <div className="container" style={{ marginTop: "3%" }}>
      <h3>Submit/track a request</h3>
      <div className="btn-group" role="group" aria-label="Basic outlined example" style={{marginLeft:"40%",marginBottom:"3%"}}>
        <button type="button" className="btn btn-outline-primary" onClick={()=>setSubmission("submit")}>
          submit request
        </button>
        <button type="button" className="btn btn-outline-primary" onClick={()=>setSubmission("track")}>
          Track my request
        </button>
      </div>
     {submission==='submit'? <form className="row g-3" onSubmit={submitRequest}>
        <div className="col-md-6">
          <label className="form-label">name</label>
          <input
            type="text"
            className="form-control"
            onChange={(event) =>
              dispatch({ type: "setName", payload: event.target.value })
            }
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">ID card Number</label>
          <input
            type="text"
            className="form-control"
            onChange={(event) =>
              dispatch({ type: "setCard", payload: event.target.value })
            }
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">gross salary</label>
          <input
            type="number"
            className="form-control"
            onChange={(event) =>
              dispatch({ type: "setSalary", payload: event.target.value })
            }
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">Years left to retirment</label>
          <input
            type="number"
            className="form-control"
            onChange={(event) =>
              dispatch({ type: "yearsTo", payload: event.target.value })
            }
          />
        </div>
        <div className="col-md-4">
          <label className="form-label">pension option</label>
          <select
            className="form-select"
            defaultValue="monthly"
            onChange={(event) =>
              dispatch({ type: "setPension", payload: event.target.value })
            }
          >
            {" "}
            <option value="monthly" disabled>
              Select a pension option
            </option>
            <option value="monthly">monthly</option>
            <option value="yearly">yearly</option>
            <option value="singlePayment">one single payment</option>
          </select>
        </div>
        <div className="col-md-6">
          <label className="form-label">monthly payment</label>
          <input
            type="number"
            className="form-control"
            onChange={(event) =>
              dispatch({ type: "setMonthly", payload: event.target.value })
            }
          />
        </div>

        <div className="col-12"></div>
        <div className="col-12">
          <label className="form-label">Address </label>
          <input
            type="text"
            className="form-control"
            onChange={(event) =>
              dispatch({ type: "setAdress", payload: event.target.value })
            }
          />
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Submit a request
          </button>
        </div>
        <p>{displayRequest}</p>
      </form>:null}
      {submission==='track'?<Track />:null}
    </div>
  );
};

export default NewRequest;
