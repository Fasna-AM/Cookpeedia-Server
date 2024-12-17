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

//get user download recipe
exports.getUserDownloadListController = async(req,res)=>{
    console.log("Inside getUserDownloadListController");
    const userId = req.userId
    try{
        const allUserDownloads = await downloadRecipes.find({userId})
        res.status(200).json(allUserDownloads)
    }catch(err){
        res.status(401).json(err)
    }
    
}

//get all download recipe
exports.getAllDownloadListController = async(req,res)=>{
    console.log("Inside getAllDownloadListController");
    try{
        const allDownloads = await downloadRecipes.find()
        res.status(200).json(allDownloads)
    }catch(err){
        res.status(401).json(err)
    }
    
}