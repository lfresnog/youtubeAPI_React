import React from 'react';
import searchIcon from '../Assets/search.svg';
import youtubeIcon from '../Assets/youtube.svg';
import './Styles.css';

const Header = (props) => {
    const {onSearch} = props;
    
    return(
    <div className = "Header">

        <div className = "logo">
            <img className="youtubeIcon" src={youtubeIcon} alt="1"/>
        </div>

        <input className="searchInput" id="search" placeholder="Search"  />

        <div className="searchButton" onClick={() => onSearch(document.getElementById("search").value)}>
            <img className="searchIcon" src={searchIcon} alt="2"/>
        </div>
    </div>
    );
}

export {Header as default}