import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getRecipeByName, setSearch } from "../../redux/actions/actions";

function Search() {
  const dispatch = useDispatch();
  const [buscar, setBuscar] = useState("");

  function handleSearch(e) {
    e.preventDefault();
    dispatch(getRecipeByName(buscar));
    setBuscar(e.target.value);

    console.log(e.target.value);
  }

  return (
    <>
      <input
        type="search"
        name="search"
        placeholder="Buscar receta..."
        onChange={(e) => handleSearch(e)}
      />
    </>
  );
}
export default Search;
