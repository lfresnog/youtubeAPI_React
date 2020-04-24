import React from 'react';
import './VideoCard.css';

const VideoCard = (props) => {
    const {onSearch,onID,description} = props;
    const {miniature,title,channel,date,id,channel_id} = props.data;
    

    return(
    <div className = "VideoCard" onClick={() => {onSearch(id.videoId,'video');onID((id.videoId?id.videoId:channel_id),(id.videoId?'video':'channel'))}}>
        <div className={(id.videoId)?`video`:`channel`}>
            <img className={(id.videoId)?null:`channel_miniature`} src={miniature} alt="error"/>
        </div>
        <div className="info">
            <h3>{title}</h3>
            <div className="extra_info">
                <p>{channel}</p>
                <p>{date}</p>
            </div>
            {description?<p>{description}</p>:null}
        </div>
    </div>
    );
}

export {VideoCard as default};