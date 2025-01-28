import express from 'express'
import { addComment, videoComment } from '../Controllers/commentController.js'
import { authentication } from '../middleware/authentication.js'

export const commentRoute = express.Router()

commentRoute.post('/comment', authentication, addComment)
commentRoute.get('/comment/:videoId', videoComment)