import "./Card.css";
import { React, useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext.jsx";
import { AuthContext } from "../../contexts/AuthContext.jsx";

const Card = ({ item, onCardClick }) => {
  const { currentUser } = useContext(CurrentUserContext);
  const { isLoggedIn } = useContext(AuthContext);

  return (
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
  );
};
export default Card;