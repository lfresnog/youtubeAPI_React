import React from 'react';
import './ChannelPage.css';
import VideoBox from '../VideoBox/VideoBox'

const ChannelPage = (props) => {
    const{ID,data,onSearch,onID}=props;
    return(
    <div className = "ChannelPage">
       <div className="channel">
            <div className="miniature">
                <img className='channel_miniature' src={ID.miniature} alt="error"/>
            </div>
        <h3>{ID.title}</h3>
       </div>
       <div className="videos">
            {data.map(elem => {return <VideoBox data={elem} onID ={onID} onSearch={onSearch}/>})}
       </div>
    </div>
    );
}

export {ChannelPage as default};