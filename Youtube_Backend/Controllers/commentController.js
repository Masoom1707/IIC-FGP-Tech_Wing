import { comment } from "../Models/Comment.js";


export const addComment = async (req,res) => {
  try {
    const {video, message} = req.body;
    const commentadded = new comment({user:req.user._id, video, message})
    await commentadded.save();

    res.status(200).json({success:true, commentadded})

  } catch (error) {
    console.log("Error in addComment controller", error);
    res.status(400).json({ success: false, message: error.message });
  }
};


export const videoComment = async(req,res) => {
  try {
    const {videoId} = req.params;
    const videoComments = await comment.find({video:videoId}).populate('user', 'channelName userName profile createdAt')

    res.status(200).json({success:true, videoComments})
  } catch (error) {
    console.log("Error in videoComment controller", error);
    res.status(400).json({ success: false, message: error.message });
  }
}