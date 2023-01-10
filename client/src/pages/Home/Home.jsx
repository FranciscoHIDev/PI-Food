import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../components/Card/Card";
import {
  getAllRecipes,
  getAllDiets,
  filterByScore,
  orderByName,
  filterByDiets,
} from "../../redux/actions/actions";
import image from "../../img/loading.gif";
import styled from "styled-components";
import Paginated from "../../components/Paginated/Paginated";
import NavBar from "../../components/NavBar/NavBar";
import SideBar from "../../components/SideBar/SideBar";
function Home() {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipes);
  const diets = useSelector((state) => state.diets);

  // ----------> paginado <---------- //
  const [page, setPage] = useState(1);
  const [recipesPage, setRecipesPage] = useState(9);
  const [order, setOrder] = useState("");
  const lastRecipe = page * recipesPage;
  const firstRecipe = lastRecipe - recipesPage;
  const currentRecipes = recipes?.slice(firstRecipe, lastRecipe);
  const paginated = (pageNumber) => {
    setPage(pageNumber);
  };

  // ----------> ciclo de vida <---------- //
  useEffect(() => {
    dispatch(getAllRecipes());
    dispatch(getAllDiets());
  }, [dispatch]);

  function handleDiets(e) {
    e.preventDefault();
    dispatch(filterByDiets(e.target.value));
  }

  function handleOrderScore(e) {
    e.preventDefault();
    dispatch(filterByScore(e.target.value));
    setPage(1);
    setOrder(`Sorted ${e.target.value}`);
  }

  function handleOrderName(e) {
    e.preventDefault();
    dispatch(orderByName(e.target.value));
    setPage(1);
    setOrder(`Sorted${e.target.value}`);
  }

  // ----------> renderizado <---------- //
  return (
    <>
      <NavBar />
      <div>
        <SideBar />
      </div>
      <select onChange={(e) => handleDiets(e)}>
        <option disabled selected value="">
          ----Dietas----
        </option>
        {diets?.map((d) => {
          return (
            <option key={d.id} value={d.name}>
              {d.name}
            </option>
          );
        })}
      </select>

      <select onChange={(e) => handleOrderScore(e)}>
        <option disabled selected value=" ">
          ----healthScore----
        </option>
        <option value="min">Menor Score</option>
        <option value="max">Mayor Score</option>
      </select>

      <select onChange={(e) => handleOrderName(e)}>
        <option disabled selected value=" ">
          ----Orden----
        </option>
        <option value="asc">A-Z</option>
        <option value="desc">Z-A</option>
      </select>

      <div>
        <Paginated
          recipesPage={recipesPage}
          recetas={recipes?.length}
          paginated={paginated}
        />
      </div>

      <ContainerStyled>
        {currentRecipes.length !== 0 ? (
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
      {/* <div>
        <Paginated
          recipesPage={recipesPage}
          recetas={recipes?.result?.length}
          paginated={paginated}
        />
      </div> */}
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
