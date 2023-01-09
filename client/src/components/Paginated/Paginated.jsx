import React from "react";
import styled from "styled-components";

function Paginated({ recipesPage, recetas, paginated }) {
  const pages = [];
  const numberPages = Math.ceil(recetas / recipesPage);

  for (let i = 0; i < numberPages; i++) {
    pages.push(i + 1);
  }

  return (
    <NavStyled>
      {pages?.map((num) => (
        <ButtonStyled key={crypto.randomUUID()} onClick={() => paginated(num)}>
          {num}
        </ButtonStyled>
      ))}
    </NavStyled>
  );
}

const NavStyled = styled.nav`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-left: 350px;
  align-items: center;
  border: 1px solid #d822cf;
  width: 700px;
  border-radius: 15px;
  margin-top: 10px;
`;
const ButtonStyled = styled.button`
  background-color: #1d1c1d;
  border: 1px solid transparent;
  border-radius: 20px;
  margin: 5px;
  border-color: white;
  cursor: pointer;
  color: rgb(247, 241, 241);
  min-height: 35px;
  max-height: 50px;
  min-width: 35px;
  max-width: 50px;

  :hover {
    background: #e6576e;
  }
`;
export default Paginated;
