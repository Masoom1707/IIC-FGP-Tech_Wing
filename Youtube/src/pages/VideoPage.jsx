import React, { useEffect, useState } from "react";
import "./Pages-Css/VideoPage.css";
import { NavLink } from "react-router-dom";
import axios from 'axios'
import {useParams} from 'react-router-dom'

const VideoPage = () => {
  const [commentHandling, setCommentHandling] = useState("");
  const [videoId, setVideoId] = useState(null) //initial value null as the video is in object form
  const [videoUrl, setVideoUrl] = useState("")
  const [comments, setComments] = useState([])

  const {id} = useParams();

  const fetchVideoById = async() => {
     await axios.get(`http://localhost:3000/api/videoId/${id}`).then((response) => {
      // console.log(response);
      setVideoId(response.data.video)
      setVideoUrl(response.data.video.videoLink)

    }).catch((error) => {console.log(error);})
  }

  const fetchComments = async() => {
    await axios.get(`http://localhost:3000/commentapi/comment/${id}`).then((response) => {
      // console.log(response);
      setComments(response.data.videoComments)
    }).catch((error) => {console.log(error);})
    
  }

  useEffect(() => {
    fetchVideoById()
    fetchComments()
  }, [])

  return (
    <div className="video_page_container">
      <div className="left_side">
       {videoId && <video controls autoPlay>
          <source src={videoUrl} />
          <source src={videoUrl} />
        </video>}
        <div className="title">
          <p>{videoId?.title}</p>
          <div className="title_container">
            <div className="profile_detail_container">
              <NavLink to={`/@user/${videoId?.user?._id}`} className="profile_div">
                <img src={videoId?.user?.profile} alt="" />
              </NavLink>
              <NavLink to={`/@user/${videoId?.user?._id}`} className="profile_name">
                <p className="name">{videoId?.user?.channelName}</p>
                <p className="subs_count">298k subscriber</p>
              </NavLink>
              <div className="subs">
                <p>Subscribe</p>
              </div>
            </div>
            <div className="like_disLike_container">
              <div className="like_Dis">Like {videoId?.like} | Dislike {videoId?.dislike}</div>
              <div className="share">Share</div>
              <div className="download">download</div>
            </div>
          </div>
          <div className="description">
            <h3>{videoId?.createdAt.slice(0,10)}</h3>
            <p>{videoId?.createdAt.description}</p>
          </div>

          <div className="comment_section">
            <div className="comment_input">
              <img src={videoId?.user?.profile} alt="profile" />
              <div className="input_div">
                <input
                  type="text"
                  placeholder="Add a comment"
                  name="comment"
                  value={commentHandling}
                  onChange={(e) => setCommentHandling(e.target.value)}
                />
              </div>
            </div>

            <div className="cancel_comment">
              <div className="comment_button hover1">Cancel</div>
              <div className="comment_button hover2">Comment</div>
            </div>

            {comments?.map((comment) => {
              return(
                <div className="comment_input comments" key={comment._id}>
              <img src={comment.user.profile} alt="profile" />
              <div className="input_div">
                <h3>
                {comment.user.channelName} <span>{comment.createdAt.slice(0,10)}</span>
                </h3>
                <p className="comment">
                {comment.message}
                </p>
              </div>
            </div>
              )
            })}
          
          </div>
        </div>
      </div>

      <div className="right_side">
        <div className="recomendation">
          <div className="image">
            <img src="../public/images.jpg" alt="" srcset="" />
          </div>
          <div className="details">
            <p className="title">Learn JavaScript In One Video</p>
            <p className="channel_name">Code With Harry</p>
            <p className="channel_name">120K views | 3 hours ago</p>
          </div>
        </div>

        <div className="recomendation">
          <div className="image">
            <img src="../public/images.jpg" alt="" srcset="" />
          </div>
          <div className="details">
            <p className="title">Learn JavaScript In One Video</p>
            <p className="channel_name">Code With Harry</p>
            <p className="channel_name">120K views | 3 hours ago</p>
          </div>
        </div>

        <div className="recomendation">
          <div className="image">
            <img src="../public/images.jpg" alt="" srcset="" />
          </div>
          <div className="details">
            <p className="title">Learn JavaScript In One Video</p>
            <p className="channel_name">Code With Harry</p>
            <p className="channel_name">120K views | 3 hours ago</p>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default VideoPage;
