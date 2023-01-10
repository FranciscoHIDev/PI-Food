import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllDiets, filterByDiets } from "../../redux/actions/actions";

function FilterDiets() {
  const dispatch = useDispatch();
  const diets = useSelector((state) => state.diets);

  React.useEffect(() => {
    dispatch(getAllDiets());
  }, [dispatch]);

  function handleDiets(e) {
    e.preventDefault();
    dispatch(filterByDiets(e.target.value));
  
  }
  return (
    <>
      <select onChange={(e) => handleDiets(e)}>
        <option selected>----Dietas----</option>
        {diets?.map((d) => {
          return (
            <option key={d.id} value={d.name}>
              {" "}
              {d.name}
            </option>
          );
        })}
      </select>
    </>
  );
}

export default FilterDiets;
