import React from "react";
import { Users } from "./users";

const Table = ({ data }) => {
  const filteredUsers = data.search(Users); // Filter the users based on search query

  return (
    <table style={{ borderCollapse: "collapse", margin: "20px 0" }}>
      <thead>
        <tr>
          <th style={{ background: "lightblue", color: "black", padding: "10px", borderBottom: "1px solid gray", lineHeight: "1.5" }}>Name</th>
          <th style={{ background: "lightgreen", color: "black", padding: "10px", borderBottom: "1px solid gray", lineHeight: "1.5" }}>Surname</th>
          <th style={{ background: "lightpink", color: "black", padding: "10px", borderBottom: "1px solid gray", lineHeight: "1.5" }}>Email</th>
        </tr>
      </thead>
      <tbody>
        {filteredUsers.map((item) => (
          <tr key={item.id}>
            <td style={{ padding: "10px", borderBottom: "1px solid gray", lineHeight: "1.5" }}>{item.first_name}</td>
            <td style={{ padding: "10px", borderBottom: "1px solid gray", lineHeight: "1.5" }}>{item.last_name}</td>
            <td style={{ padding: "10px", borderBottom: "1px solid gray", lineHeight: "1.5" }}>{item.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
