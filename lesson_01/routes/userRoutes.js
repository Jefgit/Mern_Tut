const express = require('express')
 const router = express.Router()
 const usersController = require('../controller/usersController')

 router.route('/')
 .get(usersController.getAllUsers)// read
 .post(usersController.createNewUser)// create
 .patch(usersController.updateUser)// update
 .delete(usersController.deleteUser)// delete

module.exports = router