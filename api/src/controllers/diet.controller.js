const axios = require('axios')
// const { API } = process.env
const { Diet } = require('../db')
const dataAPI = require('../data/dataInfo.json')
API_URL = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=6032fcf8e8a04693a878e6b145158f6b&addRecipeInformation=true&number=100'


const getApiDiets = async (req, res) => {
    try {
        // const { data } = await axios.get(API_URL)
        const { data } = await axios("https://run.mocky.io/v3/1769296e-f0a0-4e36-a17c-aa0c9ea65bc0")
        //     method: 'get',
        //     url: `https://api.spoonacular.com/recipes/complexSearch?apiKey=4ac67de829494b7195a6cd464ea7be57&addRecipeInformation=true&number=100`,
        //     headers: { "Accept-Encoding": "null" }
        // })
        const diets = data.results.map((e) => e.diets);
        diets.flat().map(async (diet) => {
            await Diet.findOrCreate({
                where: {
                    name: diet
                }
            })
        })
        const result = await Diet.findAll()
        return result
    } catch (error) {
        console.log(error);
        res.status(400).send("No se encontraron las dietas")
    }
};



module.exports = {
    getApiDiets
}