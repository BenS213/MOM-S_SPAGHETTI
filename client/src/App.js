import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getCards() {
      const res = await fetch("http://localhost:5001/");
      const data = await res.text();
      console.log(data);
      setData(data);
    };
    getCards();
  }, []);

  return <div className="App">{data}</div>;
}

export default App;
