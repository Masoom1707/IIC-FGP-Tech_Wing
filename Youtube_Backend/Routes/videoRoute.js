import express from 'express'
import { allVideos, uploadVideo, videoById, videoByUserId } from '../Controllers/videoController.js';
import { authentication } from '../middleware/authentication.js';

export const videoRouter = express.Router();

videoRouter.post('/video', authentication, uploadVideo)
videoRouter.get('/allvideos', allVideos)
videoRouter.get('/videoId/:id', videoById)
videoRouter.get('/:userId/videos', videoByUserId)