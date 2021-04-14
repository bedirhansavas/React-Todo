import React, { useState } from "react";
import "../css/Card.css";
import Categories from "./Categories";
function Card({ cardArray, setCardArray }) {
  const [titleArray, setTitle] = React.useState([]);
  const [newTitle, setNewTitle] = React.useState([]);
  const [todo, setTodo] = React.useState([]);
  const [category, setCategory] = React.useState([]);
  const [categoryIndex, setCategoryIndex] = React.useState(0);

  const deleteCard = (index) => {
    const tempTitleArray = [...titleArray];
    tempTitleArray.splice(index, 1);
    setTitle(tempTitleArray);
    const newTitleTempArray = [...newTitle];
    newTitleTempArray.splice(index, 1);
    setNewTitle(newTitleTempArray);
    const newArray = [...cardArray];
    newArray.splice(index, 1);
    setCardArray(newArray);
  };

  const RenderCard = (card, index) => {

    const handleChange = (e) => {
      let newTitleArray = [...titleArray];
      newTitleArray[index] = e.target.value;
      setTitle(newTitleArray);
    };
    const addTitle = () => {
      let newTitleArray = [...newTitle];
      newTitleArray[index] = titleArray[index];
      setNewTitle(newTitleArray);
    };
    const addTodoButton = (e) => {
      setTodo([...todo, { categories: "" }]);
      let index = categoryIndex;
      index = index + 1;
      setCategoryIndex(index);
    
    };
    const addCategoryName = (e) => {
      let newCategory =[...category];
      newCategory[categoryIndex] = e.target.value;
      setCategory(newCategory);
    }

    return (
      <div className="card-container" id="card">
        <button
          onClick={() => deleteCard(index)}
          className="deleteButton"
        ></button>
        <div className="card-title">
          <h3 className="titleStyle">{newTitle[index]}</h3>
        </div>
        <div class="titleAre">
          <div className="input-todo">
            <input
              className="inputArea"
              type="text"
              id="todoinput"
              placeholder="Add new todo subject"
              name="text"
              value={titleArray[index]}
              onChange={handleChange}
            />
          </div>
          <button onClick={addTitle} className="addButton">
            Add Title
          </button>
        </div>
        <div className="input-todo">
            <input
              className="inputArea"
              type="text"
              id="todoinput"
              placeholder="Add new todo subject"
              name="category"
              value={category[categoryIndex]}
              onChange={addCategoryName}
            />
          </div>
        <button onClick={addTodoButton} className="addButton">
          Add Todo
        </button>
        {todo.length > 0 && (
        <Categories todoArray={todo} categoryNameArray={category} categoryIndex={categoryIndex} setTodoArray={setTodo} setCategoryNameArray={setCategory} setCategoryIndex={setCategoryIndex} />

        )}
      </div>
    );
  };
  return <div>{cardArray.map(RenderCard)}</div>
}

export default Card;
