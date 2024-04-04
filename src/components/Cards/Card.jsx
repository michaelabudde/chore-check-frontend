import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  /* Common styles for all cards */
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: box-shadow 0.3s ease;
`;

const Card = ({ card, onCardClick }) => {
  return <CardContainer onClick={() => onCardClick(card)}></CardContainer>;
};

export default Card;
