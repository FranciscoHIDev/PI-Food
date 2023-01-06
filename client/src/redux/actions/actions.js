import axios from 'axios'
export const GET_ALL_RECIPES = 'GET_ALL_RECIPES'
export const GET_RECIPE_ID = 'GET_RECIPE_ID'
export const GET_RECIPE_NAME = 'GET_RECIPE_NAME'
export const GET_ALL_DIETS = 'GET_ALL_DIETS'
const API_URL = 'http://localhost:3001/recipes'
const API_URL2 = 'http://localhost:3001/diets'

export const getAllRecipes = () => async (dispatch) => {
    try {
        const { data } = await axios.get(API_URL)
        dispatch({
            type: 'GET_ALL_RECIPES',
            payload: data
        })
    } catch (error) {
        return console.log(error)
    }
}

export const getRecipeById = (id) => async (dispatch) => {
    try {
        const { data } = await axios.get(`${API_URL}/${id}`)
        dispatch({
            type: 'GET_RECIPE_ID',
            payload: data
        })

    } catch (error) {
        return console.log(error)
    }
}

export const getRecipeByName = (name) => async (dispatch) => {
    try {
        const { data } = await axios.get(`http://localhost:3001/recipes?name=${name}`)
        dispatch({
            type: 'GET_RECIPE_NAME',
            payload: data
        })
    } catch (error) {
        return console.log(error)
    }
}

export const getAllDiets = () => async (dispatch) => {
    try {
        const {data} = await axios.get(API_URL2)
        dispatch({
            type: 'GET_ALL_DIETS',
            payload: data
        })
    } catch (error) {
        return console.log(error)
    }
}
