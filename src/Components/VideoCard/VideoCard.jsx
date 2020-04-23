import React from 'react';
import './VideoCard.css';

const VideoCard = (props) => {
    const {miniature,title,channel,date,description,id} = props.data;
    const {onSearch} = props;

    return(
    <div className = "VideoCard" onClick={() => onSearch(id.videoId,'id')}>
        <div className={(id.videoId)?`video`:`channel`}>
            <img src={miniature} alt="error"/>
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