import express from 'express'
import userController from '../Controllers/userController'

export const router = express.Router()

router.post('/signup', userController.signUp)


