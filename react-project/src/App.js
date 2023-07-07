import { useEffect, useState } from "react";
import { Users, users } from "./users";
import "./App.css";
import Table from "./Table";
import axios from "axios";

function App() {
  const [query, setQuery] = useState("");

  const search = (data) => {
    return data.filter((item) =>
      item.first_name.toLowerCase().includes(query.toLowerCase())
    );
  };

  return (
    <div className="app">
      <input
        type="text"
        placeholder="Search..."
        className="search"
        onChange={(e) => setQuery(e.target.value)}
      />

      <Table data={{ search }} />
    </div>
  );
}

export default App;