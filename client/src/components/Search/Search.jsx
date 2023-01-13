import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setSearch } from "../../redux/actions/actions";

function Search() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  function handleInput(e) {
    e.preventDefault();
    setName(e.target.value);
    console.log(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (name) {
      dispatch(setSearch(name));
      setName("");
    } else {
      alert("Ingrese un nombre de una receta");
    }
  }

  return (
    <>
      <input
        type="text"
        placeholder="Buscar recetas..."
        onChange={(e) => handleInput(e)}
      />
      <button type="submit" onClick={(e) => handleSubmit(e)}>
        🔍
      </button>
    </>
  );
}
export default Search;
