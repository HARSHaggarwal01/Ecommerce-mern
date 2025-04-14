import React from 'react'

const Video = () => {
  return (
    <div className="video-area ">
        <div className="container-fluid px-0">
            <div
            className="video-content"
            style={{ backgroundImage: "url(assets/img/video/01.jpg)" }}
            >
            <div className="video-wrapper">
                <a
                className="play-btn popup-youtube"
                href="https://www.youtube.com/watch?v=ckHzmP1evNU"
                >
                <i className="fas fa-play" />
                </a>
            </div>
            </div>
        </div>
    </div>

  )
}

export default Video
