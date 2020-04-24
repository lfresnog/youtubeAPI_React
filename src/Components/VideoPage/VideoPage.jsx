import React from 'react';
import VideoCard from '../VideoCard/VideoCard';
import './VideoPage.css'

const VideoPage = (props) => {
    const {onSearch,onID,data,ID} = props;
    return(
        <div className='VideoPage'>
            <div className='video'>
            <iframe src={`https://www.youtube.com/embed/${ID[0].video_id}`} width="640" height="360" frameBorder="0"></iframe>
            </div>
            <div className='related_videos'>
                {data.map(elem => {return<VideoCard className='results' onID = {onID} onSearch={onSearch} key={elem.title} data={elem} description={null}/>})}
            </div>
            <div className='relatedVideos'></div>
        </div>
    )
}

export {VideoPage as default}