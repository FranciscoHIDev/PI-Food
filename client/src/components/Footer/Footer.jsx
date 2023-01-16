import React from "react";
import image from "../../img/icon-corazon.png";
import image2 from "../../img/icon-github.png";
import image3 from "../../img/icon-linkedin.png";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <FooterStyled>
      Copyright © 2023 Coded with <img src={image} alt="corazón" /> by
      FranciscoDev. All rights reserved.
      <Link to="#">
        <img src={image2} alt="icon-Github" />
      </Link>
      <Link to="#">
        <img src={image3} alt="icon-Linkedin" />
      </Link>
    </FooterStyled>
  );
}

const FooterStyled = styled.div`
  background-color: #d920dcda;
  padding: 40px;
  /* margin-top: 25px; */
  border-radius: 2em 2em 0 0;
  text-align: left;
  color: #fff;
  text-shadow: black 0.1em 0.1em 0.1em;
  position:relative
`;
export default Footer;
