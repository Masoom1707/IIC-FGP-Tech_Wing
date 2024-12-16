import React, { useState } from "react";
import "./Pages-Css/VideoPage.css";
import { NavLink } from "react-router-dom";

const VideoPage = () => {
  const [commentHandling, setCommentHandling] = useState("");

  return (
    <div className="video_page_container">
      <div className="left_side">
        <video controls autoPlay>
          <source src={"#"} />
          <source src={"#"} />
        </video>
        <div className="title">
          <p>Learn React In 20 minutes</p>
          <div className="title_container">
            <div className="profile_div">
              <NavLink to={"/@user/1710"} className="profile_pic">
                <img src="#" alt="" />
              </NavLink>
              <NavLink to={"/@user/1710"} className="profile_name">
                <p className="name">Masoom</p>
                <p className="subs_count">298k subscriber</p>
              </NavLink>
              <div className="subs">
                <p>Subscribe</p>
              </div>
            </div>
            <div className="like_disLike_container">
              <div className="like_Dis">Like | Dislike</div>
              <div className="share">Share</div>
              <div className="download">download</div>
            </div>
          </div>
          <div className="description">
            <h3>35,332 views 9 Dec 2024</h3>
            <p>Hey every one enjoy my youtube video</p>
          </div>

          <div className="comment_section">
            <div className="comment_input">
              <img src="../public/images (1).jpg" alt="profile" />
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

            <div className="comment_input comments">
              <img src="../public/images (1).jpg" alt="profile" />
              <div className="input_div">
                <h3>
                  Masoom <span>09-12-2024</span>
                </h3>
                <p className="comment">
                  This is the best Youtube design that i've buid
                </p>
              </div>
            </div>
            <div className="comment_input comments">
              <img src="../public/images (1).jpg" alt="profile" />
              <div className="input_div">
                <h3>
                  Masoom <span>09-12-2024</span>
                </h3>
                <p className="comment">First Project as a IIC FGP</p>
              </div>
            </div>
            <div className="comment_input comments">
              <img src="../public/images (1).jpg" alt="profile" />
              <div className="input_div">
                <h3>
                  Masoom <span>09-12-2024</span>
                </h3>
                <p className="comment">ALL The best Developers</p>
              </div>
            </div>
            <div className="comment_input comments">
              <img src="../public/images (1).jpg" alt="profile" />
              <div className="input_div">
                <h3>
                  Masoom <span>09-12-2024</span>
                </h3>
                <p className="comment">Best Design so far</p>
              </div>
            </div>
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

        <div className="recomendation">
          <div className="image">
            <img src={"../public/images.jpg"} alt="thumb" />
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
