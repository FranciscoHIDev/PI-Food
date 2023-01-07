const axios = require('axios')
const { API } = process.env
const dataAPI = require('../data/dataInfo.json')
const API_URL = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=206aac4c607943c49eb99bf20a699dad&addRecipeInformation=true&number=100'
const API_URL2 = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=4ac67de829494b7195a6cd464ea7be57&addRecipeInformation=true&number=100'
const getApiInfo = async () => {
    try {
        // const apiUrl = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=4ac67de829494b7195a6cd464ea7be57&addRecipeInformation=true&number=100`)
        let { data: { results: dataAPI } } = await axios({
            method: 'get',
            url: `https://api.spoonacular.com/recipes/complexSearch?apiKey=6032fcf8e8a04693a878e6b145158f6b&addRecipeInformation=true&number=100`,
            headers: { "Accept-Encoding": "null" }
        })
        // let { data: { results: dataAPI } } = await axios(`${API_URL}`);

        dataAPI = dataAPI.map(e => {
            return {
                id: e.id,
                name: e.title,
                image: e.image,
                diets: e.diets.map(e => ({ name: e })),
                dishTypes: e.dishTypes,
                summary: e.summary,
                healthScore: e.healthScore,
                steps: e.analyzedInstructions[0]?.steps.map((e) => {
                    return {
                        number: e.number,
                        step: e.step
                    }
                })
            }
        })
        return dataAPI
    } catch (error) {
        console.log(error)

    }
};


module.exports = {
    getApiInfo,

}