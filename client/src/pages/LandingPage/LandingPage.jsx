import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import img from "../../img/homepage.jpg";

function LandingPage() {
  return (
    <LandingStyled>
      <h1>Food App Henry</h1>
      <Link to={"/home"}>
        <button>Start</button>
      </Link>
    </LandingStyled>
  );
}

export const LandingStyled = styled.div`
  background: url(${img});
  width: 1200px;
  height: 500px;
`;

export default LandingPage;
