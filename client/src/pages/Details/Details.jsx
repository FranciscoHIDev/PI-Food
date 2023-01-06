import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getRecipeById } from "../../redux/actions/actions";

function Details() {
  const dispatch = useDispatch();
  const { recipe } = useSelector((state) => state.recipeId);
  const { id } = useParams();

  React.useEffect(() => {
    dispatch(getRecipeById(id));
  }, [dispatch, id]);

  return (
    <>
      {recipe.length !== 0 ? (
        <div>
          <p>id: {recipe.id?.id} </p>
          <p>name:{recipe.name?.name} </p>
          {/* <img src={result.image} alt={result.name} /> */}
        </div>
      ) : (
        <img
          src="https://acegif.com/wp-content/uploads/loading-4.gif"
          alt="loading"
        />
      )}
    </>
  );
}

export default Details;
