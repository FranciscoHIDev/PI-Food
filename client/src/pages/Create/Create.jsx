import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { getAllDiets, postRecipe } from "../../redux/actions/actions";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import image from "../../img/cooking.gif";
import styled from "styled-components";

function Create() {
  const initialState = {
    name: "",
    image: "",
    summary: "",
    healthScore: "",
    steps: "",
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
      <NavBar />
      <ContenedorStyled>
        <CardStyled>
          <h3>
            Crea tu receta favorita solo ingresa datos en el siguiente
            formulario.
          </h3>
          <form onSubmit={(e) => handleSubmit(e)}>
            <InputStyled
              type="text"
              placeholder="name"
              name="name"
              value={input.name}
              onChange={(e) => handleOnChange(e)}
            ></InputStyled>
            <InputStyled
              type="text"
              placeholder="summary"
              name="summary"
              value={input.summary}
              onChange={(e) => handleOnChange(e)}
            ></InputStyled>
            <InputStyled
              type="number"
              placeholder="health score"
              name="healthScore"
              value={input.healthScore}
              onChange={(e) => handleOnChange(e)}
            ></InputStyled>
            <InputStyled
              type="text"
              placeholder="steps"
              name="steps"
              value={input.steps}
              onChange={(e) => handleOnChange(e)}
            ></InputStyled>
            <select
              name="diets"
              placeholder="diets"
              onChange={(e) => handleSelect(e)}
            >
              <option value="--Seleccionar--">--Tipo de dieta--</option>
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
                  <Button2Styled value={diet} onClick={(e) => handleDelete(e)}>
                    X
                  </Button2Styled>
                </React.Fragment>
              );
            })}
            <ButtonStyled type="submit">CREAR RECETA</ButtonStyled>
          </form>
        </CardStyled>

        <ContainerStyled>
          <img src={image} alt={"imagendog"} />
          <h3>¡Estamos creando tu receta!</h3>
          {<p>Nombre: {input.name}</p>}
          {<p>Resumen: {input.summary}</p>}
          {<p>Nivel de comida: {input.healthScore}</p>}
          {<p>Pasos: {input.steps}</p>}
        </ContainerStyled>
      </ContenedorStyled>
      <Footer />
    </>
  );
}
const CardStyled = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid #db94d7;
  border-radius: 5px;
  margin: 7px;
  width: 400px;
  height: 500px;
  align-content: center;
  justify-content: center;
  text-align: center;
`;
const InputStyled = styled.input`
  padding: 5px;
  margin: 7px;
  width: 350px;
`;
const ButtonStyled = styled.button`
  background-color: #d920dcda;
  border: 2px solid #d920dcda;
  color: white;
  border-radius: 5px;
  margin: 10px;
  padding: 8px;
  cursor: pointer;
  :hover {
    background-color: #e6576e;
    color: white;
    border-color: #e6576e;
  }
`;
const Button2Styled = styled.button`
  margin: 5px;
  border: 1px solid;
  border-radius: 5px;
  cursor: pointer;
  :hover {
    background-color: red;
    border: 1px solid red;
    border-radius: 5px;
    margin: 5px;
    color: white;
  }
`;
const ContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid #db94d7;
  border-radius: 5px;
  margin-left: 150px;
  width: 400px;
  align-content: center;
  justify-content: center;
  text-align: center;
`;
const ContenedorStyled = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 10px;
  align-items: center;
  justify-content: center;
  align-content: center;
`;

export default Create;
