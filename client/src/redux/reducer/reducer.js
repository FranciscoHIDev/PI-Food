import {
    GET_ALL_RECIPES,
    GET_RECIPE_ID,
    GET_RECIPE_NAME,
    GET_ALL_DIETS
} from '../actions/actions.js'

const initialState = {
    recipes: [],
    recipeId: {},
    recipeName: [],
    diets: []
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_RECIPES:
            return {
                ...state,
                recipes: action.payload
            }
        case GET_RECIPE_ID:
            return {
                ...state,
                recipeId: action.payload
            }
        case GET_RECIPE_NAME:
            return {
                ...state,
                recipeName: action.payload
            }
        case GET_ALL_DIETS:
            return {
                ...state,
                diets: action.payload
            }
        default:
            return state;
    }
}


export default rootReducer