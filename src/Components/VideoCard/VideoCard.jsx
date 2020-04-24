import React from 'react';
import './VideoCard.css';

const VideoCard = (props) => {
    const {onSearch,onID,description,type} = props;
    const {miniature,title,channel,date,id} = props.data;
    

    return(
    <div className = {type===1?'VideoCard1':'VideoCard2'} onClick={() => {onSearch(id.videoId?id.videoId:id.channelId,id.videoId?'video':'channel');onID((id.videoId?id.videoId:id.channelId),(id.videoId?'video':'channel'))}}>
        <div className={(id.videoId)?`video`:`channel`}>
            <img className={(id.videoId)?null:`channel_miniature`} src={miniature} alt="error"/>
        </div>
        <div className="info">
            <h3>{title}</h3>
            <div className="extra_info">
                <p className="name">{channel}</p>
                <p>{date}</p>
            </div>
            {description?<p>{description}</p>:null}
        </div>
    </div>
    );
}

export {VideoCard as default};