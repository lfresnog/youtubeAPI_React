import React from 'react';
import searchIcon from '../../Assets/search.svg';
import youtubeIcon from '../../Assets/youtube.svg';
import './Header.css';

const Header = (props) => {
    const {onSearch,clean} = props;
    
    return(
    <div className = "Header">

        <div className = "logo" onClick={()=>clean()}>
            <img className="youtubeIcon" src={youtubeIcon} alt="1"/>
        </div>

        <input className="searchInput" id="search" placeholder="Search"  />

        <div className="searchButton" onClick={() => onSearch(document.getElementById("search").value,'name')}>
            <img className="searchIcon" src={searchIcon} alt="2"/>
        </div>
    </div>
    );
}

export {Header as default}