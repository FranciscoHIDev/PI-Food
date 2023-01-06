import React from "react";
import styled from "styled-components";

function Card({ image, name, id, healthScore, diets }) {
  return (
    <CardStyled>
      <img src={image} alt={name} />
      <p> id: {id}</p>
      <p>name: {name}</p>
      <p>healthScore: {healthScore}</p>
      {/* <p>Dietas:{diets}</p> */}
      <p>Dietas: {diets.map((diet) => diet.name).join(", ")}</p>
    </CardStyled>
  );
}


const CardStyled = styled.div`
display: flex;
flex-direction: column;
width: 300px;
height:450px;
margin:1rem;
margin-left: 1rem;
box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
border-radius:10px;
padding: 8px;

`


export default Card;
