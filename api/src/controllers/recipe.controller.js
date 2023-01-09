const axios = require('axios')
const { API } = process.env
const API_URL = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=206aac4c607943c49eb99bf20a699dad&addRecipeInformation=true&number=100'
const API_URL2 = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=4ac67de829494b7195a6cd464ea7be57&addRecipeInformation=true&number=100'
const getApiInfo = async () => {
    try {

        let dataInfo = await axios("https://run.mocky.io/v3/1769296e-f0a0-4e36-a17c-aa0c9ea65bc0")
        //     method: 'get',
        //     url: `https://api.spoonacular.com/recipes/complexSearch?apiKey=66aca8f51d11492e84ea329eccc1bd71&addRecipeInformation=true&number=100`,
        //     headers: { "Accept-Encoding": "null" }
        // })

        dataAPI = dataInfo.data.results.map(e => {
            return {
                id: e.id,
                name: e.title,
                image: e.image,
                diets: e.diets.map(e => e),
                dishTypes: e.dishTypes,
                summary: e.summary,
                healthScore: e.healthScore,
                steps: e.analyzedInstructions[0]?.steps.map((step) => step)
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