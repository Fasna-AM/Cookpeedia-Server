const express = require('express')
const recipeController = require('../controllers/recipeController')
const testimonyController = require('../controllers/testimonyController')
const userController = require('../controllers/userController')
const jwtMiddleware = require('../middlewares/jwtMiddleware')
const downloadRecipeController = require('../controllers/downloadRecipeController')
const saveRecipeController = require('../controllers/saveRecipeController')

const router = new express.Router()

//all-recipes
router.get('/all-recipes',recipeController.getAllRecipeController)

//add-testimony
router.post('/add-testimony',testimonyController.addTestimonyController)

//add-user
router.post('/register',userController.addUserControler)

//login
router.post('/login',userController.loginController)

//view single Recipe
router.get('/recipe/:id/view',jwtMiddleware,recipeController.getRecipeController)

//related recipe
router.get('/related-recipes',jwtMiddleware,recipeController.relatedRecipeController)

//download recipe
router.post('/recipe/:id/download',jwtMiddleware,downloadRecipeController.addToDownloadRecipeController)

//save recipe
router.post('/recipe/:id/save',jwtMiddleware,saveRecipeController.addToSaveRecipeController)

//get usersave recipe
router.get('/get-save-recipes',jwtMiddleware,saveRecipeController.getUserSavedRecipeController)

//remove saved Recipe
router.delete('/save-recipes/:id/remove',jwtMiddleware,saveRecipeController.removeRecipeController)

//get user download recipe
router.get('/user-downloads',jwtMiddleware,downloadRecipeController.getUserDownloadListController)

//edit-user
router.post('/user/edit',jwtMiddleware,userController.editUserController)

//all-user
router.get('/all-users',jwtMiddleware,userController.getAllUsersController)

//all-download
router.get('/all-download',jwtMiddleware,downloadRecipeController.getAllDownloadListController)

//all-feedbacks
router.get('/all-feedbacks',jwtMiddleware,testimonyController.getAllFeedbackController)

//update-testimony
router.get('/feedbacks/:id/update',jwtMiddleware,testimonyController.updateFeedbackStatusController)

//all-Approved-feedbacks
router.get('/all-approved-feedbacks',testimonyController.getAllApprovedFeedbackController)

//addRecipe
router.post('/add-recipe',jwtMiddleware,recipeController.addRecipeController)

//edit Recipe
router.put('/recipe/:id/edit',jwtMiddleware,recipeController.updateRecipeController)

//remove Recipe
router.delete('/recipe/:id/remove',jwtMiddleware,recipeController.removeRecipeController)

module.exports = router