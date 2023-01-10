import React from "react";
import Search from "./../Search/Search";
import {
  FilterDiets,
  FilterScore,
  FilterOrder,
} from "../../components/Filtros";

function SideBar() {
  return (
    <>
      <h2>Las mejores recetas</h2>
      <Search />
      {/* <FilterDiets /> */}
    </>
  );
}

export default SideBar;
