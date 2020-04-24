import React from 'react';
import './VideoBox.css'

const VideoBox = (props) => {
    const {miniature,title,channel,id} = props.data;
    const {onSearch,onID} = props;
    return(
        <div className='VideoBox' onClick={() => {onSearch(id.videoId?id.videoId:id.channelId,id.videoId?'video':'channel');onID((id.videoId?id.videoId:id.channelId),(id.videoId?'video':'channel'))}}>
            <div className="image">
                <img src={miniature} alt="error"/>
            </div>
            <div className='b_info'>
                <h4 className="title">{title}</h4>
                <p className="channel">{channel}</p>
            </div>
            
        </div>
    )
}

export {VideoBox as default}