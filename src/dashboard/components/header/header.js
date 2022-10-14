import React from 'react';
import './header.css';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';

function Header({ collapsed }) {
    var showDate = new Date();
    // var displayDate = showDate.getDay+', '+showDate.getDate()+' '+showDate.getMonth()+' '+showDate.getFullYear();
    var displayDate = showDate.toDateString();

    return (
        <div className={"headerDashboard " + (!collapsed && "blur")}>
            <div className="left">
                <h1>Dashboard</h1>
                <h3>{displayDate}</h3>
            </div>
            <div className="right">
                <div className="top">
                    {/* <NotificationsIcon className="notifications"/> */}
                    <div className="user">
                        <h3>John Bayer</h3>
                        <AccountCircleIcon className="avatar"/>
                        <KeyboardArrowDownIcon className="arrow"/>
                    </div>
                </div>
                <div className="bottom">
                    <button className="add-btn">+ Add</button>
                    <div className="searchbar">
                        <SearchIcon className="search-icon"/>
                        <input type="text" placeholder="Search for Application here"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
