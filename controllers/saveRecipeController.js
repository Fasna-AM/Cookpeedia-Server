 const saveRecipes = require('../models/saveRecipeModel')

 //add to collection
 exports.addToSaveRecipeController = async(req,res)=>{
    console.log("Inside addToSaveRecipeController");
    const {id} = req.params
    const userId = req.userId
    const {name,image} = req.body
    try{
        const existingRecipe = await saveRecipes.findOne({recipeId:id,userId})
        if(existingRecipe){
            res.status(406).json("Selected Recipe already in your Collection... Please add Another!!!")
        }else{
            const newRecipe = new saveRecipes({
                recipeId:id,name,image,userId
            })
            await newRecipe.save()
            res.status(200).json(newRecipe)
        }
    }catch(err){
        res.status(401).json(err)
    }
    
 }

 //user recipe collection get - authorised user
 exports.getUserSavedRecipeController = async(req,res)=>{
    console.log("Inside getUserSavedRecipeController");
    const userId = req.userId
    try{
        const userResipeCollection = await saveRecipes.find({userId})
        res.status(200).json(userResipeCollection)
    }catch(err){
        res.status(401).json(err)
    }
    
 }

 //remove save recipe - authorised user
 exports.removeRecipeController = async(req,res)=>{
    console.log("Inside removeRecipeController");
    const {id} = req.params
    try{
        const removeSaveRecipe = await saveRecipes.findByIdAndDelete({_id:id})
        res.status(200).json(removeSaveRecipe)
    }catch(err){
        res.status(401).json(err)
    }
    
 }