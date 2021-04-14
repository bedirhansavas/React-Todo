import React from "react";
import Card from "../components/Card";
import Profile from "../components/Profile";
const CardPage = () => {
  const [cardArray, setCardArray] = React.useState([]);

  const addCard = () => {
    setCardArray([...cardArray, { title: "", newTitle: "" }]);
  };

  return (
    <div className="mainscreen">
      <div className="profileArea">
        <Profile />
      </div>
      <div className="mainscreen">
        <Card cardArray={cardArray} setCardArray={setCardArray} />
      </div>
      <div className="card-container">
        <div className="buttonstyle">
          <button onClick={addCard} className="addButton">
            CREATE
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardPage;
