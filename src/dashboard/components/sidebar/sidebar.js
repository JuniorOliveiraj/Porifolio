import React, { useState } from 'react';
import './sidebar.css';
import logo from '../../../assets/22logo-jr.png';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import HomeIcon from '@mui/icons-material/Home';
import PollIcon from '@mui/icons-material/Poll';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import FolderIcon from '@mui/icons-material/Folder';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import CommentIcon from '@mui/icons-material/Comment';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
//import Link from 'next/link';
import TestePg from '../../pg2';
//import { Link } from '@mui/material';
import { Link } from 'react-router-dom';
function Sidebar({ collapsed, setCollapsed }) {

    const handleMenu = () => setCollapsed(!collapsed);
    
    return (
        <div className={"side-menu " + (collapsed && "collapsed")}>
            <div className="top-section">
                <div className="logo">
                    <img src={logo} alt="thesocialcomment" />
                </div>
                <div className={"toggle-menu-btn " + (collapsed && "collapsed")}>
                    <ArrowBackIcon className="arrow" onClick={handleMenu}/>
                </div>
            </div>

            <div className={"main-menu " + (collapsed && "collapsed")}>
                <ul>
                    <li>
                        <a href="#home" className="menu-item active">
                            <HomeIcon className="icon"/>
                            <span>Home</span>
                        </a>
                    </li>
                    <li>
                        <a href="#home" className="menu-item">
                            <PollIcon className="icon"/>
                            <span>Stats</span>
                        </a>
                    </li>
                    <li>
                        <a href="#home" className="menu-item">
                            <BusinessCenterOutlinedIcon className="icon"/>
                            <span>Activity</span>
                        </a>
                    </li>
                    <li>
                       
                        <Link href={TestePg} to={TestePg}>
                        <a className="menu-item">
                            <FolderIcon className="icon"/>
                            <span>Collection</span>
                        </a>
                        </Link>
                    </li>
                    <li>
                        
                        <a href="#home" className="menu-item">
                            <EventAvailableIcon className="icon"/>
                            <span>Events</span>
                        </a>
                    </li>
                    <li>
                        <a href="#home" className="menu-item">
                            <PeopleOutlinedIcon className="icon"/>
                            <span>Community</span>
                        </a>
                    </li>
                    <li>
                        <a href="#home" className="menu-item">
                            <CommentIcon className="icon"/>
                            <span>Contact</span>
                        </a>
                    </li>
                    <li>
                        <a href="#home" className="menu-item">
                            <LogoutIcon className="icon"/>
                            <span>Logout</span>
                        </a>
                    </li>
                    <li>
                        
                    </li>
                </ul>
                <div className="settings">
                    <a href="#home" className="menu-item">
                        <SettingsOutlinedIcon className="icon"/>
                        <span>Settings</span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
