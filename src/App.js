import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import Subscribe from "./components/Subscribe";
import SignIn from "./components/SignIn";
import NewRequest from "./components/NewRequest";
import Dashboard from "./components/Dashboard";
import Simulate from "./components/Simulate";
function App() {
  const url = "http://localhost:3001/api/users";
  const url2 = "http://localhost:3001/api/requests";
  const [subscribers, setSubscribers] = useState([]);
  const [requests, setRequests] = useState([]);
  const [allRequests, setAllRequesters] = useState([]); // only used in the filter dashboard
  React.useEffect(() => {
    axios.get(url).then((res) => setSubscribers(res.data));
    axios.get(url2).then((res) => {
      setRequests(res.data);
      setAllRequesters(res.data);
    });
  }, []);

  return (
    <div className="App">
      <h1>Insurance Program</h1>
      <nav className="nav bg-dark justify-content-center ">
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Sign up
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/signin">
              Sign in
            </Link>
          </li>
          {/* <li className="nav-item">
            <Link className="nav-link" to="/dashboard/*">
              Admin Dashboard
            </Link>
          </li> */}
          <li className="nav-item">
            <Link className="nav-link" to="/simulate">
              Pension Calculator
            </Link>
          </li>
        </ul>
      </nav>
      <Routes><Route path="/simulate/*" element={<Simulate />} />
      {/*  */}
        <Route
          path="/"
          element={
            <Subscribe
              subscribers={subscribers}
              setSubscribers={setSubscribers}
              url={url}
            />
          }
        />
        <Route
          path="/signin/*"
          element={<SignIn subscribers={subscribers} />}
        />
        <Route path="/request" element={<NewRequest />} />
        <Route
          path="/dashboard/*"
          element={
            <Dashboard
              requests={requests}
              subscribers={subscribers}
              setRequests={setRequests}
              allRequests={allRequests}
            />
          }
        />
       
      </Routes>
    </div>
  );
}

export default App;
