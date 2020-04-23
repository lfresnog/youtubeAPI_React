import React from 'react';
import './VideoCard.css';

const VideoCard = (props) => {
    const {miniature,title,channel,date,description,id} = props.data;

    return(
    <div className = "VideoCard">
        <div className={(id.videoId)?`video_miniature`:`channel`}>
            <img src={miniature} alt="1"/>
        </div>
        <div className="info">
            <h3>{title}</h3>
            <div className="extra_info">
                <p>{channel}</p>
                <p>{date}</p>
            </div>
            <p>{description}</p>
        </div>
    </div>
    );
}

export {VideoCard as default};