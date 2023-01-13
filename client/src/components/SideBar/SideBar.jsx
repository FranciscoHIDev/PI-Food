import React from "react";
import Search from "./../Search/Search";
import {
  FilterDiets,
  FilterScore,
  FilterOrder,
  Reset
} from "../../components/Filtros";


function SideBar() {
  return (
    <>
      <h2>Las mejores recetas</h2>
      <Search />
      <FilterDiets />
      <FilterScore />
      <FilterOrder />
      <Reset />
    </>
  );
}

export default SideBar;
