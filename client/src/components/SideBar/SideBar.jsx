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
    <ContainerStyled>
      <Search />
      <FilterDiets />
      <FilterScore />
      <FilterOrder />
      <Reset />
    </ContainerStyled>
  );
}

const ContainerStyled = styled.div`
  margin: 10px;
  padding: 8px;
  border: 2px dotted;
  border-radius: 5px;
  color: #d920dcda;
`;

export default SideBar;
