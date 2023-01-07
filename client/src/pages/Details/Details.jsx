import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getRecipeById } from "../../redux/actions/actions";
import styled from "styled-components";

function Details() {
  const dispatch = useDispatch();
  const { recipe } = useSelector((state) => state.recipeId);
  const { id } = useParams();

  React.useEffect(() => {
    dispatch(getRecipeById(id));
  }, [dispatch, id]);

  return (
    <CardStyled>
      {recipe ? (
        <div>
          <img src={recipe[0]?.image} alt={recipe[0]?.name} />
          <p>id: {recipe[0]?.id} </p>
          <p>name:{recipe[0]?.name} </p>
          <p>dietas: {recipe[0]?.diets.map((diet) => diet.name).join(", ")}</p>
          <p>tipo de plato: {recipe[0]?.dishTypes.map((d) => d).join(", ")}</p>
          <p>health score: {recipe[0]?.healthScore}</p>
          <p>resumen: {recipe[0]?.summary}</p>
          <p>pasos:</p>{" "}
          {recipe[0]?.steps.map((s) => {
            return (
              <ul>
                <li>{s.step}</li>
              </ul>
            );
          })}
        </div>
      ) : (
        <img
          src="https://acegif.com/wp-content/uploads/loading-4.gif"
          alt="loading"
        />
      )}
    </CardStyled>
  );
}

const CardStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 900px;
  margin: 40px auto;

  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  border-radius: 5px;
  padding: 8px;

  cursor: pointer;
  &:hover {
    transform: scale(1.6);
  }
`;

export default Details;
