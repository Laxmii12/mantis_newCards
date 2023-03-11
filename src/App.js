import React from "react";
import { useEffect, useState } from "react";
import Card from "./component/Card";

const App = () => {
  const [apidata, setApidata] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch("https://erp.orxaenergies.xyz/api/news");
    const data = await response.json();
    setApidata(data.results);
  };
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Orax Mantis news cards</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 30 }}>
        {apidata.map((item, idx) => (
          <Card data={item} key={idx}></Card>
        ))}
      </div>
    </div>
  );
};
export default App;
