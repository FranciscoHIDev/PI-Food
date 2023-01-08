import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { getAllDiets, postRecipe } from "../../redux/actions/actions";

function Create() {
  const initialState = {
    name: "",
    image: "",
    summary: "",
    healthScore: "",
    steps: [],
    diets: [],
  };

  // const [errors, setErrors] = useState({});
  const [diets, setDiets] = useState([]);
  const [input, setInput] = useState(initialState);
  const dispatch = useDispatch();
  const dietas = useSelector((state) => state.diets);

  React.useEffect(() => {
    dispatch(getAllDiets());
  }, [dispatch]);

  function handleOnChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  function handleSelect(e) {
    if (!diets.includes(e.target.value)) {
      if (diets.length > 0) {
        setDiets([...diets, e.target.value]);
      } else {
        setDiets([...diets, e.target.value]);
      }
    }
  }

  function handleDelete(e) {
    e.preventDefault();
    setDiets(diets.filter((d) => d !== e.target.value));
  }

  function handleSubmit(e) {
    const newRecipe = {
      name: input.name,
      summary: input.summary,
      healthScore: input.healthScore,
      steps: input.steps,
      diets: diets,
    };
    e.preventDefault();
    dispatch(postRecipe(newRecipe));
    alert("¡Tu nueva receta se creo con éxito!");
    setInput(initialState);
    setDiets([]);
  }

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="name"
          name="name"
          value={input.name}
          onChange={(e) => handleOnChange(e)}
        />
        <input
          type="text"
          placeholder="summary"
          name="summary"
          value={input.summary}
          onChange={(e) => handleOnChange(e)}
        />
        <input
          type="number"
          placeholder="health score"
          name="healthScore"
          value={input.healthScore}
          onChange={(e) => handleOnChange(e)}
        />
        <input
          type="text"
          placeholder="steps"
          name="steps"
          value={input.steps}
          onChange={(e) => handleOnChange(e)}
        />
        <select
          name="diets"
          placeholder="diets"
          onChange={(e) => handleSelect(e)}
        >
          {dietas?.map((diet, id) => (
            <option key={id} value={null}>
              {diet.name}
            </option>
          ))}
        </select>
        {diets?.map((diet, id) => {
          return (
            <React.Fragment key={id}>
              {""}
              {diet}
              <button value={diet} onClick={(e) => handleDelete(e)}>
                X
              </button>
            </React.Fragment>
          );
        })}
        <button type="submit">Crear receta</button>
      </form>

      <>
        <img
          src={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgjDd9EDL6VoNdUZyy9TcCDBr9l3X56PvySw&usqp=CAU"
          }
          alt={"imagendog"}
        />
        {<p>Nombre: {input.name}</p>}
        {<p>Resumen: {input.summary}</p>}
        {<p>Nivel de comida: {input.healthScore}</p>}
        {<p>Pasos: {input.steps}</p>}
      </>
    </>
  );
}

export default Create;
