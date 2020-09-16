import React, { useState } from 'react';
import './Header.css';
import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsOutlinedIcon from '@material-ui/icons/AppsOutlined';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { Avatar } from '@material-ui/core';
import { Link } from 'react-router-dom';

function Header() {
    const [inputSearch, setInputSearch] = useState('');
    return (
        <div className="header">
            <div className="header__left">
                <MenuOutlinedIcon />
                <img className="header__logo" src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg" alt="Youtube Logo" />
            </div>
            <div className="header__search">
                <input className="header__searchInput" value={inputSearch} onChange={ e => setInputSearch(e.target.value)} placeholder="Search" />
                <Link to={`/search/${inputSearch}`}>
                <SearchOutlinedIcon className="header__searchButton" />
                </Link>
                
            </div>
            <div className="header__right">
                <VideoCallIcon className="header__icon" />
                <AppsOutlinedIcon className="header__icon" />
                <NotificationsIcon className="header__icon" />
                <Avatar src="https://avatars1.githubusercontent.com/u/49842187?s=460&u=f40259e1e37e9346d757848196904a23dbd664da&v=4" />
            </div>
        </div>
    )
}

export default Header;
