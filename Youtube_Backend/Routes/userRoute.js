import express from 'express'
import { logOut, signIn, signUp } from '../Controllers/userController.js'

export const router = express.Router()

router.post('/signup', signUp)
router.post('/login', signIn)
router.post('/logout',logOut)