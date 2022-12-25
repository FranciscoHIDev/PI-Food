const axios = require('axios')
const { API } = process.env
const dataAPI = require('../data/dataInfo.json')
const API_URL = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=6032fcf8e8a04693a878e6b145158f6b&addRecipeInformation=true&number=100'
const API_URL2 = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=4ac67de829494b7195a6cd464ea7be57&addRecipeInformation=true&number=100'
const getApiInfo = async () => {
    try {
        // const apiUrl = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=206aac4c607943c49eb99bf20a699dad&addRecipeInformation=true&number=100`)
        const apiUrl = await axios({
            method: 'get',
            url: `https://api.spoonacular.com/recipes/complexSearch?apiKey=206aac4c607943c49eb99bf20a699dad&addRecipeInformation=true&number=100`,
            headers: { "Accept-Encoding": "null" }
        })
        const apiData = apiUrl.data.results.map((recipes) => {
            return {
                id: recipes.id,
                name: recipes.title,
                image: recipes.image,
                diets: recipes.diets.map(e => ({ name: e })),
                dishTypes: recipes.dishTypes,
                summary: recipes.summary,
                healthScore: recipes.healthScore,
                steps: recipes.analyzedInstructions[0]?.steps.map((e) => {
                    return {
                        number: e.number,
                        step: e.step
                    }
                })
            }
        })
        return apiData
    } catch (error) {
        console.log(error)

    }
};


module.exports = {
    getApiInfo,

}