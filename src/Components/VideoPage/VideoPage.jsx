import React from 'react';
import VideoCard from '../VideoCard/VideoCard';
import './VideoPage.css'

const VideoPage = (props) => {
    const {onSearch,onID,data,ID} = props;
    return(
        <div className='VideoPage'>
            <div className='r_video'>
            <iframe src={`https://www.youtube.com/embed/${ID.video_id}?autoplay=1&fs=0`} width="1000" height="480" frameBorder="0"></iframe>
            <div className='r_info'>
                <h3>{ID.title}</h3>
                <div className='r_extra_info'>
                    <p>{ID.channel}</p>
                    <p>{ID.date}</p>
                </div>
                <p>{ID.description}</p>
            </div>
            </div>
            <div className='related_videos'>
                {data.map(elem => {return<VideoCard className='results' onID = {onID} onSearch={onSearch} key={elem.title} data={elem} type={2} description={null}/>})}
            </div>
        </div>
    )
}

export {VideoPage as default}