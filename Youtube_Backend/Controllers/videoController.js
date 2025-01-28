import { video } from "../Models/Video.js";

export const uploadVideo = async (req, res) => {
  try {
    const { title, description, videoLink, thumbnail, videoType } = req.body;
    const uploadVideo = new video({
      user: req.user._id,
      title,
      description,
      videoLink,
      thumbnail,
      videoType,
    });
    await uploadVideo.save();

    res.status(200).json({ success: true, uploadVideo });
  } catch (error) {
    console.log("Error in video controller", error);
    res.status(400).json({ success: false, message: error.message });
  }
};

export const allVideos = async (req, res) => {
  try {
    const videos = await video
      .find()
      .populate("user", "channelName userName profile createdAt");
    res.status(200).json({ success: true, video: videos });
  } catch (error) {
    res
      .status(400)
      .json({
        success: false,
        message: "Error while fetching all videos",
        error,
      });
  }
};

export const videoById = async (req, res) => {
  try {
    const { id } = req.params;
    const videoById = await video.findById(id).populate('user','channelName userName profile createdAt');
    res.status(200).json({ success: true, video: videoById });
  } catch (error) {
    res
      .status(400)
      .json({ success: false, message: "Error while video id", error });
  }
};


export const videoByUserId = async (req, res) => {
  try {
    const { userId } = req.params;
    const videos = await video.find({user:userId}).populate('user','channelName userName profile createdAt');
    res.status(200).json({ success: true, video: videos });
  } catch (error) {
    res
      .status(400)
      .json({ success: false, message: "Error while fetching the user videos", error });
  }
};
