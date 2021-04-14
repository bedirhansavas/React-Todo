import React from "react";

const Categories = ({
  todoArray,
  categoryNameArray,
}) => {
  const [categoryCheck, setCategoryCheck] = React.useState([]);

  const TodoCategories = (category, index) => {
    const handleChange = (e) => {
      const newCategoryCheckArray = [...categoryCheck];
      newCategoryCheckArray[index] = e.target.checked;
      setCategoryCheck(newCategoryCheckArray);
    };

    return (
      <div className="input-todo">
        <input
          className="checkboxStyle"
          type="checkbox"
          id="todoinput"
          placeholder="Add new todo subject"
          name="categoryCheck"
          value={categoryCheck[index]}
          onChange={handleChange}
        ></input>
        <span className="category">{categoryNameArray[index]}</span>

        {}
      </div>
    );
  };

  return <div>{todoArray.map(TodoCategories)}</div>;
};

export default Categories;
