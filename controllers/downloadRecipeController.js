const downloadRecipes = require('../models/downloadModel')

//add to downloadRecipes
exports.addToDownloadRecipeController = async(req,res)=>{
    console.log("Inside addToDownloadRecipeController");
    const {id} = req.params
    const userId = req.userId
    const {name,image,cuisine} = req.body
    console.log(id,name,image,cuisine);
    try{
        //check recipe already in download
        const exixtingRecipe = await downloadRecipes.findOne({recipeId:id})
        if(exixtingRecipe){
            //increment count of recipe by 1 - update
            exixtingRecipe.count +=1
            await exixtingRecipe.save()
            res.status(200).json(exixtingRecipe)

        }else{
            // add recipe to your model - insert
            const newRecipe = new downloadRecipes({
                recipeId:id,recipeName:name,recipeImage:image,recipeCuisine:cuisine,count:1,userId
            })
            await newRecipe.save()
            res.status(200).json(newRecipe)
        }

    }catch(err){
        res.status(401).json(err)
    }
    
    
}