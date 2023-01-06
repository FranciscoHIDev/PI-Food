import React from "react";
import { Link} from "react-router-dom";

function NavBar() {
  return (
    <>
      <Link to={"/home"}>Home</Link>
      <Link to={"/about"}>About</Link>
      <Link to={"/create"}>Create</Link>
     
    </>
  );
}

export default NavBar;
