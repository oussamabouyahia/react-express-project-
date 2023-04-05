import React from "react";
import { PieChart, Pie, Tooltip, Legend } from "recharts";

const DataViz = ({ subscribers, requests }) => {
  const data = [
    { name: "registred users", value: subscribers.length },
    { name: "requests", value: requests.length },
  ];
  const data2 = [
    {
      name: "monthly",
      value: requests.filter((e) => e.pensionOption === "monthly").length,
    },
    {
      name: "yearly",
      value: requests.filter((e) => e.pensionOption === "yearly").length,
    },
    {
      name: "single payment",
      value: requests.filter((e) => e.pensionOption === "singlePayment").length,
    },
  ];
  const data3 = [
    {
      name: "Current monthly total",
      value: requests.reduce((total, e) => (total += Number(e.monthlyPayment)), 0),
    },
    {
      name: "total expectation",
      value: 200*50,
    },
  ];
  return (
    <div className="row">
      <div className="col-md-4 ">
      
        <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={true}
            data={data}
            cx={200}
            cy={200}
            outerRadius={80}
            fill="#8884d8"
            label
          />
          <Tooltip />
        </PieChart>
        <Legend />
      </div>
      <div className="col-md-4 ">
        
        <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            data={data2}
            cx={200}
            cy={200}
            innerRadius={40}
            outerRadius={80}
            fill="#82ca9d"
          />
          <Tooltip />
        </PieChart>
        <Legend />
      </div>
      <div className="col-md-4 ">
        <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={true}
            data={data3}
            cx={200}
            cy={200}
            outerRadius={80}
            fill="#0088FE"
            label
          />
          <Tooltip />
        </PieChart>
        <Legend />
      </div>
    </div>
  );
};

export default DataViz;
