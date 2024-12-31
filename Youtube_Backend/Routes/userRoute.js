import express from 'express'
import { signIn, signUp } from '../Controllers/userController.js'

export const router = express.Router()

router.post('/signup', signUp)
router.post('/login', signIn)
