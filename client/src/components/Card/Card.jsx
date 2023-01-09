import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Card({ id, image, name, healthScore, diets, dishTypes }) {
  return (
    <CardStyled>
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <h5>healthScore: {healthScore}</h5>
      <h5>Dietas: {diets.map((diet) => diet).join(", ")}</h5>
      {/* <p>Tipo de plato: {dishTypes.map((d) => d).join(", ")}</p> */}
      <Link to={`/details/${id}`}>
        <button>Ir a detalles</button>
      </Link>
    </CardStyled>
  );
}

const CardStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 450px;
  margin: 1rem;
  margin-left: 1rem;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  border-radius: 10px;
  padding: 8px;
`;

export default Card;
