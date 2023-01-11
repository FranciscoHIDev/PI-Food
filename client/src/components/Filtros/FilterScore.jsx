import React from "react";
import { filterByScore } from "../../redux/actions/actions";
import { useState } from "react";
import { useDispatch } from "react-redux";

function FilterScore() {
  const dispatch = useDispatch();
  const [order, setOrder] = useState("");

  function handleOrderScore(e) {
    e.preventDefault();
    dispatch(filterByScore(e.target.value));
  
    setOrder(`Sorted ${e.target.value}`);
  }

  return (
    <>
      <select onChange={(e) => handleOrderScore(e)}>
        <option disabled selected value=" ">
          ----healthScore----
        </option>
        <option value="min">Menor Score</option>
        <option value="max">Mayor Score</option>
      </select>
    </>
  );
}

export default FilterScore;
