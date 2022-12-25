// const { Router } = require('express')
const dataAPI = require('../data/dataInfo.json')
const { Recipe, Diet } = require('../db')
const { getApiInfo } = require('../controllers/recipe.controller')

const getAllData = async () => {
    try {
        const data = await getApiInfo()
        const dataDB = await Recipe.findAll({
            include: {
                model: Diet,
                attributes: ['name']
            }
        })
        const resultado = dataDB.concat(data)
        return resultado
    } catch (err) {
        console.log(err)
    }
}

// const getDB = async () => {
//     return await Recipe.findAll({
//         include: {
//             model: Diet,
//             attributes: ['name'],
//             through: {
//                 attributes: []
//             }
//         }
//     })
// }

// const getAllData = async () => {
//     const dataApi = await getApiInfo()
//     const dataDB = await getDB()
//     const allInfo = [...dataApi, ...dataDB]
//     return allInfo
// }

const getAllRecipes = async (req, res) => {
    const { name } = req.query
    const recipes = await getAllData()
    try {
        if (name) {
            const recipeName = recipes.filter(r => r.name.toLowerCase().includes(name.toLowerCase()))
            recipeName.length ? recipes.status(200).json({ recipeName }) :
                res.status(404).send("Receta no encontrado")
        } else {
            const result = await getAllData()
            res.status(200).json({ result })
        }
    } catch (error) {
        res.status(400).send(error)
    }
}

const getRecipesById = async (req, res) => {
    const { id } = req.params
    try {
        const recipes = await getAllData()
        const recipe = recipes.filter(recipe => recipe.id == id)
        if (recipe.length > 0) {
            res.status(200).json({ recipe })
        } else {
            res.status(400).send('Receta con ese ID no encontrado')
        }
    } catch (error) {
        res.status(400).send(error)
    }
}

const postRecipes = async (req, res) => {
    const { name, summary, healthScore, steps, image, diets } = req.body
    if (!name || !summary || !healthScore || !steps || !diets) {
        return res.status(400).send('Faltan datos por completar')
    }
    try {
        let newRecipe = await Recipe.create({
            name,
            summary,
            healthScore,
            steps,
            image: image ? image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLgvW1SfpDadBdNn0vmauOiBzvPRe5tv0iSA&usqp=CAU'
        })
        let associate = await Diet.findAll({ where: { name: diets } })
        newRecipe.addDiet(associate)
        res.status(200).send(newRecipe)

    } catch (err) {
        console.log(err)
    }
}




module.exports = {
    getAllRecipes,
    getRecipesById,
    postRecipes,

}