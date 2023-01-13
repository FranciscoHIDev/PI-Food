import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getRecipeById } from "../../redux/actions/actions";
import styled from "styled-components";
import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import Footer from  "../../components/Footer/Footer"

function Details() {
  const dispatch = useDispatch();
  const { recipe } = useSelector((state) => state.recipeId);
  const { id } = useParams();

  React.useEffect(() => {
    dispatch(getRecipeById(id));
  }, [dispatch, id]);

  return (
    <>
      <NavBar />
      <CardStyled>
        {recipe ? (
          <div>
            <img src={recipe[0]?.image} alt={recipe[0]?.name} />
            <p>id: {recipe[0]?.id} </p>
            <p>Name: {recipe[0]?.name} </p>
            <p>Dietas: {recipe[0]?.diets.map((diet) => diet).join(", ")}</p>
            <p>
              Tipo de plato:
              {Array.isArray(recipe[0].dishTypes) ? (
                recipe[0]?.dishTypes.map((d) => {
                  return <p>{d}</p>;
                })
              ) : (
                <p>---------------------------------------------------</p>
              )}
            </p>
            <p>Health score: {recipe[0]?.healthScore}</p>
            <p>Resumen: {recipe[0]?.summary}</p>
            <p>Pasos: </p>{" "}
            {Array.isArray(recipe[0].steps) ? (
              recipe[0]?.steps.map((s) => {
                return (
                  <ul key={crypto.randomUUID()}>
                    <li>{s.step}</li>
                  </ul>
                );
              })
            ) : (
              <ul key={crypto.randomUUID()}>
                <li>{recipe[0].steps}</li>
              </ul>
            )}
            <Link to={"/home"}>
              <button>back Home</button>
            </Link>
          </div>
        ) : (
          <img
            src="https://acegif.com/wp-content/uploads/loading-4.gif"
            alt="loading"
          />
        )}
      </CardStyled>
      <Footer/>
    </>
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
    transform: scale(1.1);
  }
`;

export default Details;
