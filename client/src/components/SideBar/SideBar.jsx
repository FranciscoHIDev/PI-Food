import React from "react";
import Search from "./../Search/Search";
import {
  FilterDiets,
  FilterScore,
  FilterOrder,
  Reset,
} from "../../components/Filtros";
import styled from "styled-components";

function SideBar() {
  return (
    <>
      <Search />
      <FilterDiets />
      <FilterScore />
      <FilterOrder />
      <Reset />
    </>
  );
}

export default SideBar;
