import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useHistory } from "react-router-dom";
const TodoForm = () => {
  const [name, setName] = React.useState("");
  const [surname, setSurname] = React.useState("");
  const history = useHistory();
  const handleSubmit = (e) => {
    localStorage.setItem("name", name);
    localStorage.setItem("surname", surname);

    history.push("/todo");
  };

  return (
    <Router>
      <div class="container">
        <div className="header">LOGIN</div>
        <input
          type="text"
          placeholder="Name"
          value={name}
          name="text"
          onChange={(event) => setName(event.target.value)}
          className="authInput"
        />
        <input
          type="text"
          placeholder="Surname"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
          name="text"
          className="authInput"
        />
       
        <button onClick={handleSubmit} class="addButton">
          Add New Person
        </button>
        
      </div>
    </Router>
  );
};

export default TodoForm;
