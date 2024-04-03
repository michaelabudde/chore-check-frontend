import "./Card.css";
import { React, useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { AuthContext } from "../../contexts/AuthContext";
import Card from "./Card";

const ChoreCard = ({ item, onCardClick }) => {
  const { currentUser } = useContext(CurrentUserContext);
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <Card>
      <div className="card__element">
        <div className="card__title-container">
          <h2 className="card__name"> {item.name}</h2>
        </div>
        <img
          src={item.imageUrl}
          className="card__image"
          onClick={() => onCardClick(item)}
          alt={item.name}
        />
      </div>
    </Card>
  );
};
export default ChoreCard;
