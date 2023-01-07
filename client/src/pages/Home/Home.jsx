import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../components/Card/Card";
import { getAllRecipes, getAllDiets } from "../../redux/actions/actions";
import image from "../../img/loading.gif";
import styled from "styled-components";

function Home() {
  const dispatch = useDispatch();
  const { result } = useSelector((state) => state.recipes);
  //const diets = useSelector((state) => state.diets);

  useEffect(() => {
    dispatch(getAllRecipes());
    // dispatch(getAllDiets());
  }, [dispatch]);

  return (
    <ContainerStyled>
      {result ? (
        result.map((e) => {
          return (
            <Card
              key={e.id}
              id={e.id}
              name={e.name}
              image={e.image}
              healthScore={e.healthScore}
              dishTypes={e.dishTypes}
              diets={e.diets}
            />
          );
        })
      ) : (
        <>
          <h1>Cargando recetas...</h1>
          <img src={image} alt={"cargando..."} />
        </>
      )}
    </ContainerStyled>
  );
}

const ContainerStyled = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  align-content: center;
  background-color: OldLace;
  margin-top: 5px;
  padding-top: 20px;
  padding-bottom: 20px;
`;

export default Home;
