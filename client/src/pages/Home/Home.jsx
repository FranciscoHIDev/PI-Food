import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../components/Card/Card";
import { getAllRecipes, getAllDiets } from "../../redux/actions/actions";
import image from "../../img/loading.gif";
import styled from "styled-components";
import Paginated from "../../components/Paginated/Paginated";
import NavBar from "../../components/NavBar/NavBar";
function Home() {
  const dispatch = useDispatch();
  const recetas = useSelector((state) => state.recipes);
  const diets = useSelector((state) => state.diets);

  // ----------> paginado <---------- //
  const [page, setPage] = useState(1);
  const [recipesPage, setRecipesPage] = useState(9);
  const lastRecipe = page * recipesPage;
  const firstRecipe = lastRecipe - recipesPage;
  const currentRecipes = recetas.result?.slice(firstRecipe, lastRecipe);
  const paginated = (pageNumber) => {
    setPage(pageNumber);
  };

  // ----------> ciclo de vida <---------- //
  useEffect(() => {
    dispatch(getAllRecipes());
    dispatch(getAllDiets());
  }, [dispatch]);

  // ----------> renderizado <---------- //
  return (
    <>
      <NavBar />
      <div>
        <Paginated
          recipesPage={recipesPage}
          recetas={recetas?.result?.length}
          paginated={paginated}
        />
      </div>

      <ContainerStyled>
        {currentRecipes ? (
          currentRecipes.map((e) => {
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
      <div>
        <Paginated
          recipesPage={recipesPage}
          recetas={recetas?.result?.length}
          paginated={paginated}
        />
      </div>
    </>
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
