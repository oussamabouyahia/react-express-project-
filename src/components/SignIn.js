import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignIn = ({ subscribers }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const goToRequest = () => {
    if (email && password) {
      if (email==='admin@admin.com' && password==="admin123"){
        navigate("/dashboard/*")
      }
      else{
      axios
        .post("http://localhost:3001/api/users/login", {
          email: email,
          password: password,
        })
        .then((result) => {
          return result.data === "correct log in"
            ? navigate("/request")
            : setMessage("wrong password/email combination");
        });
    }}
  };
  return (
    <div className="container ">
      <input
        style={{ margin: "2%" }}
        type="email"
        className="form-control"
        placeholder="enter your email example@email.com"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        style={{ margin: "2%" }}
        type="password"
        className="form-control"
        placeholder="enter your password "
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        className="btn btn-success"
        style={{ margin: "2%" }}
        onClick={goToRequest}
      >
        Sign in{" "}
      </button>
      <p>{message}</p>
        
    </div>
  );
};

export default SignIn;
